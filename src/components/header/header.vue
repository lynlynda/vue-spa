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
            <div v-if="seller.supports" class="support" >
                <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                <span class="text">{{seller.supports[0].description}}</span>
            </div>
            <div v-if="seller.supports" class="support-count" @click="showData()">
              <span class="count">{{seller.supports.length}}个</span>
              <i class="icon-keyboard_arrow_right"></i>
            </div>
        </div>
         
    
    </div>
    <div class="bulletin-wrapper" @click="showData()">
        <span class="bulletin-title">
          
        </span>
        <span class="bulletin-text">
          {{seller.bulletin}}
        </span>
        <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background" >
        <img :src="seller.avatar" width="100%" height="100%"/>
    </div>
    <div class="detail" v-show="detailShow" transition="fade">
      <div class="detail-wrapper ">
        <div class="detail-main">
          <div class="name">
            {{seller.name}}
          </div>
          <div class="starWrapper">
            <star :size="48" :score="seller.score"></star>
          </div>
          <title-slot> <div class="text">优惠信息</div> </title-slot>  
          <ul v-if="seller.supports" class="supports">
            <li v-for="support in seller.supports" class="support-item">
              <span :class="classMap[support.type]" class="icon"></span>
              <span class="text">{{support.description}}</span>
            </li>
          </ul>
          <title-props :cc="'商家信息'"></title-props> 
          <div class="bulletin">
            <p class="content">{{seller.bulletin}}</p>
          </div>
      
        </div>
      </div>
      <div class="detail-close" @click="showData">
         <i class="icon-close"></i>     
      </div>
        
    </div>
   </div>
</template>
<script type='text/javascript'>
  import star from 'components/star/star';
  import titleProps from 'components/title/titleProps';
  import titleSlot from 'components/title/titleSlot';
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        detailShow: false
      };
    },
    methods: {
      showData() {
        this.detailShow = !this.detailShow;
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    },
    components: {
      star, titleProps, titleSlot
    }
  };
</script>
<style lang='stylus' rel='stylssheet/stylus'>
  @import '../../common/stylus/mixin'


  .header
    color: #fff
    position: relative
    background-color: rgba(7,17,27,0.2)
    align-items: center;
    .content-wrapper
      display: flex
      padding: 24px 0px 18px 24px
      .avarta
        flex: 1
        img
          border-radius: 2px
      .content 
        margin-left: 10px
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
            vertical-align: top;
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
      line-height: 22px
      position: relative
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
      .icon-thumb_up
        position: absolute
        right: 0
        top: 6px
        font-size: 16px
    .background
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: -1
      filter: blur(10px)
    .detail 
      position: fixed
      top: 0
      left: 0
      z-index: 100
      width: 100%
      height: 100%
      overflow: auto
      transition: all 0.5s
      backdrop-filter: blur(10px)
      &.fade-transition
        opacity: 1
        background: rgba(7,17,27,0.8)
      &.fade-enter,&.fade-leave
        opacity: 0
        background: rgba(7,17,27,0)        
      .detail-wrapper
        min-height: 100%
        .detail-main
          padding-top: 32px 
          padding-bottom: 32px
          .name
            line-height: 16px
            text-align: center
          .starWrapper
            margin-top: 18px
            padding: 2px 0
            text-align: center 
          
          .supports
            width: 80%
            margin: 0 auto
            .support-item
              padding: 0 12px
              margin-bottom: 12px
              &:last-child
                margin-bottom: 0
              .icon
                display: inline-block
                vertical-align: top;
                width: 16px
                height: 16px
                margin-right: 5px
                background-size: 16px 16px
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
                line-height: 14px
                font-size: 14px
                vertical-align: top
          .bulletin
            width: 80%
            margin: 0 auto
            .content
              padding: 0 12px
              line-height: 24px
              font-size: 12px

      .detail-close
        position: relative
        width: 32px
        height: 32px
        margin: -64px auto
        font-size: 32px








</style>