<template>
  <div class="ratingselect">
    <div class="rating-type">
      <span @click="select(2,$event)" class="block positive" :class="{'active':selectType === 2}">{{desc.all}}<span class="count">{{ratings.length}}</span></span>
      <span @click="select(0,$event)" class="block positive" :class="{'active':selectType === 0}">{{desc.positive}}<span class="count">{{positives.length}}</span></span>
      <span @click="select(1,$event)" class="block negtive" :class="{'active':selectType === 1}">{{desc.negtive}}<span class="count">{{nagtive.length}}</span></span>
    </div>
    <div @click="toggleContent" class="switch" :class="{'on':onlyContent}">
      <span class="icon-check_circle"></span>
      <span class="text">只看有内容的评价</span>
    </div>
    <div class="ratings">
      <ul>
        <li v-for="rating in ratings">{{{rating.text}}}</li>
      </ul>
    </div>
  </div>
</template>
<script type='text/javascript'>
  const POSITIVE = 0;
  const NEGTIVE = 1;
  const ALL = 2;
  export default {
    props: {
      ratings: {
        type: Array,
        default() {
          return [];
        }
      },
      selectType: {
        type: Number,
        default: ALL
      },
      onlyContent: {
        type: Boolean,
        default: false
      },
      desc: {
        type: Object,
        default() {
          return {
            all: '全部',
            positive: '满意',
            negtive: '不满意'
          };
        }
      }
    },
    computed: {
      positives() {
        return this.ratings.filter((rating) => {
          return rating.rateType === POSITIVE;
        });
      },
      nagtive() {
        return this.ratings.filter((rating) => {
          return rating.rateType === NEGTIVE;
        });
      }
    },
    methods: {
      select(type, e) {
        if (!e._constructed) {
          return;
        }
        this.selectType = type;
        this.$dispatch('', this.selectType, type);
      },
      toggleContent(e) {
        if (!e._constructed) {
          return;
        }
        this.onlyContent = !this.onlyContent;
        this.$dispatch('', this.onlyContent, this.onlyContent);
      }
    }
  };
</script>
<style lang='stylus' rel='stylssheet/stylus'>
@import "../../common/stylus/mixin.styl"
.ratingselect
  .rating-type
    padding: 18px 0
    margin: 0 18px
    border-1px(rgba(7,17,27,0.1))
    font-size: 0
    .block
      display: inline-block
      padding: 8px 12px
      border-radius: 1px
      margin-right: 8px
      font-size: 12px
      color: rgb(77,85,93)
      &.active 
        color: #fff
      .count
        font-size: 8px
        margin-left: 2px
        line-height: 16px
      &.positive
        background: rgba(0,160,220,.2)
        &.active
          background: rgba(0,160,220,1)
      &.negtive
        background: rgba(77,85,93,.2)
        &.active
          background: rgba(77,85,93,1)
  .switch
    padding: 12px 18px
    line-height: 24px
    font-size: 0px
    border-bottom: 1px solid rbga(7,17,27,.1)
    color: rgb(147,153,159)
    &.on 
      .icon-check_circle
        color: #00c850
    .icon-check_circle
      display: inline-block
      margin-right: 4px
      line-height: 24px
      font-size: 24px
      vertical-align: top
    .text
      font-size: 12px
      display: inline-block
      vertical-align: top



</style>