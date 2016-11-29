<template>
  <div class="header">
    <div class="content-wrapper">
        <div class="avatar">
          <img :src="seller.avatar" alt="" width="64",height="64">
        </div>
    
        <div class="content">
            <div class="title">
              <span class="brand"></span>
              <span class="name">{{seller.name}}</span>
            </div>
            <div class="description">
              {{seller.description}}/{{seller.deliveryTime}}分钟送达
            </div>
            <div v-if="seller.supports" class="support">
                <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                <span class="text">{{seller.supports[0].description}}</span>
            </div>
            <div v-if="seller.supports" class="support-count">
              <span class="count">{{seller.supports.length}}个</span>
              <i class="icon-thumb_up"></i>
            </div>
        </div>
         
    
    </div>
    <div class="bulletin-wrapper">
        <span class="bulletin-title">
          
        </span>
        <span class="bulletin-text">
          {{seller.bulletin}}
        </span>
        <i class="icon-thumb_up"></i>
    </div>
   </div>
</template>
<script type='text/ecmascript-6'>
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    }
  };
</script>
<style lang='stylus' rel='stylssheet/stylus'>
  @import '../../common/stylus/mixin'


  .header
    color: #fff
    background: #999
    align-items: center;
    .content-wrapper
      display: flex
      padding: 24px 0px 18px 24px
      .avarta
        flex: 1 
        margin-right: 10px
        img
          border-radius: 2px
      .content
        position: relative
        flex-direction: column
        flex: 1
        justify-content: flex-start
        .title
          margin: 2px 0 8px 0
          .brand
            width: 30px 
            height: 18px
            display: inline-block
            vertical-align: top
            bg-image('brand')
            background-size: 30px 18px
            background-repeat:no-repeat
          .name
            margin-left: 6px
            font-size: 16px
            line-height:18px;
            font-weight: bold
        .description
          margin-bottom: 10px
          line-height: 12px
          font-size: 12px
        .support
          .icon
            display: inline-block
            width: 12px
            height: 12px
            margin-right: 5px
            background-size: 12px 12px
            background-repeat: no-repeat
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.guarantee
              bg-image('guarantee_1')
            &.invoice
              bg-image('invoice_1')
            &.special
              bg-image('special_1')
          .text
            line-height: 12px
            font-size: 12px
            vertical-align: top
        .support-count
            position: absolute
            right: 12px
            bottom: 6px
            padding: 0 8px
            height: 24px
            line-height: 24px
            border-radius: 14px
            background: rgba(0,0,0,.2)
            text-align: center
            .count
              vertical-align: top
              font-size: 10px
            .icon-keyboard_arrow_right
              font-size: 10px
    .bulletin-wrapper
      height: 28px
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
      padding: 0 22px 0 12px
      .bulletin-title
        display: inline-block
        width: 22px 
        height: 12px
        bg-image('bulletin')
        background-size: 22px 12px
        background-repeat: no-repeat
        vertical-align: middle
      .bulletin-text
        font-size: 10px



</style>