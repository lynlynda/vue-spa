<template>
  <div class="header">
    <div class="content-wrapper">
        <div class="avatar">
          <img :src="seller.avatar" alt="" width="64",height="64">
        </div>
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
        <i class="icon-keyboard_arrow_right"></i>
    </div>
    </div>
    <div class="bulletin-wrapper"></div>
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
  @import '../../common/stylus/index'

  .header
    display: flex
    color: #fff
    background: #999
    align-items: center;
    .content-wrapper
      flex: 1
      padding: 24px 0px 18px 24px
      .avarta
        img
          border-radius: 2px
    .content
      position: relative
      display: flex
      flex-direction: column
      flex: 3
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
      padding: 0 18px
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
        display: inline-block
        width: 10px
        height: 10px











</style>