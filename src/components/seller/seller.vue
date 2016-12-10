<template>
  <div class="seller">
    <div class="seller-content">
      <div class="overview">
        <h1 class="title">{{seller.name}}</h1>
        <div class="desc">
          <star :size="36" :score="seller.score"></star>
          <span class="text">({{seller.ratingCount}})</span>
          <span class="text">月售{{seller.sellCount}}单</span>
        </div>
        <ul class="remark">
          <li class="block">
            <h2>起送价</h2>
            <div class="content">
              <span class="stress">{{seller.minPrice}}</span>
            </div>
          </li>
          <li class="block">
            <h2>商家配送</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryPrice}}</span>
            </div>
          </li>
          <li class="block">
            <h2>平均配送时间</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryTime}}</span>
            </div>
          </li>
        </ul>
      </div>
      <split></split>
      <div class="bulletin">
        <h class="title">公告与活动</h>
        <div class="content-wrapper">
          <p class="content">{{seller.bulletin}}</p>
        </div>
        <ul v-if="seller.supports" class="supports">
          <li v-for="support in seller.supports" class="support-item border-1px">
            <span :class="classMap[support.type]" class="icon"></span>
            <span class="text">{{support.description}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type='text/javascript'>
import star from 'components/star/star';
import split from 'components/split/split';
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    components: {
      star, split
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    }
  };
</script>
<style lang='stylus' rel='stylssheet/stylus'>
  @import '../../common/stylus/mixin'
  .seller
    position: fixed
    top: 174px
    left: 0
    bottom: 0
    width: 100%
    overflow: hidden
    .overview
      padding: 18px
      .title
        font-size: 14px
        margin-bottom: 8px
        line-height: 14px
        color: rgb(7,17,27)
      .desc
        padding-bottom: 18px
        font-size: 0
        border-1px(rgba(7,17,27,0.1))
        .star
          display: inline-block
          vertical-align: top
          margin-right: 8px
        .text
          display: inline-block
          line-height: 18px
          vertical-align: top
          margin-right: 12px
          font-size: 10px
          color: rgb(77,85,93);
      .remark
        display: flex
        padding-top: 18px
        .block
          flex: 1
          text-align: center
          border-right: 1px solid rgba(7,17,27,0.1)
          &:last-child
            border: none
          h2
            margin-bottom: 4px
            line-height: 10px
            font-size: 10px
            color: rgb(147,153,159)
          .content
            line-height: 24px
            font-size: 10px
            color: rgb(7,17,27)
            .stress
              font-size: 24px
    .bulletin
      padding: 18px 18px 0 18px
      .title
        font-size: 14px
        margin-bottom: 8px
        line-height: 14px
        color: rgb(7,17,27)
      .content-wrapper
        padding: 0 12px 16px 12px
        border-1px(rgba(7,17,27,0.1))
        .content
          line-height: 24px
          font-size: 12px
          color: rgb(240,20,20)











</style>