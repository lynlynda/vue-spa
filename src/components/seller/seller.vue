<template>
  <div class="seller">
    <div class="seller-content">
      <div class="overview">
        <h1 class="title">{{seller.name}}</h1>
        <div class="desc">
          <star :size="36" :score="seller.score"></star>
          <span class="text">({{seller.ratingCount}})</span>
          <span class="text">{{seller.sellCount}}</span>
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
    </div>
  </div>
</template>
<script type='text/javascript'>
import star from 'components/star/star';
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    components: {
      star
    }
  };
</script>
<style lang='stylus' rel='stylssheet/stylus'>
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
        line-height: 14
        color: rgb(7,17,27)
      .desc
        padding-bottom: 18px
        line-height: 18px
        font-size: 0
        









</style>