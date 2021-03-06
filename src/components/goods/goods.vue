<template>
<div class="goods">
  <div class="menu-wrapper" v-el:menu-wrapper>
    <ul>
      <li v-for="item in goods" class="menu-item" :class="{'current':currentIndex === $index}" @click="selectMenu($index,$event)">
        <span class="text border-1px">
          <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
        </span>
      </li>
    </ul>
  </div>
  <div class="foods-wrapper" v-el:foods-wrapper>
    <ul>
      <li v-for="item in goods" class="food-list food-list-hook">
        <h1 class="title">{{item.name}}</h1>
        <ul>
          <li @click="selectFood(food,$event)" v-for="food in item.foods" class="food-item border-1px">
            <div class="icon">
              <img width="57" height="57" :src="food.icon">
            </div>
            <div class="content">
              <h2 class="name">{{food.name}}</h2>
              <p class="desc">{{food.description}}</p>
              <div class="extra">
                <span class="count">月售{{food.sellCount}}份</span>
                <span>好评率{{food.rating}}%</span>
              </div>
              <div class="price">
                <span class="now">￥{{food.price}}</span>
                <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
              </div>
              <div class="cartcontrol-wrapper">
              <cartcontrol :food="food"></cartcontrol>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <shopcart v-ref:shopcart :select-foods="selectFoods" :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shopcart>
</div>
<food :food="selectedFood" v-ref:food></food>
</template>
<script type='text/javascript'>
import BScroll from 'better-scroll';
import shopcart from 'components/shopcart/shopcart';
import food from 'components/food/food';
import cartcontrol from 'components/cartcontrol/cartcontrol';

const ERR_OK = 0;
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        goods: [],
        listHeight: [],
        scrollY: 0,
        selectedFood: {}
      };
    },
    computed: {
      currentIndex() {
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i + 1];
          if (!height2 || this.scrollY >= height1 && this.scrollY < height2) {
            return i;
          }
        }
        return 0;
      },
      selectFoods() {
        let foods = [];
        this.goods.forEach((good) => {
          good.foods.forEach((food) => {
            if (food.count) {
              foods.push(food);
            }
          });
        });
        return foods;
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
      this.$http.get('/api/goods').then((response) => {
        response = response.body;
        if (response.errno === ERR_OK) {
          this.goods = response.data;
          // console.log(JSON.stringify(this.goods));
          this.$nextTick(() => {
            this._initScroll();
            this._caculateHeight();
          });
        }
      });
    },
    methods: {
      selectMenu(index, e) {
        if (!e._constructed) {
          return;
        }
        console.log(1);
        let foodlist = this.$els.foodsWrapper.getElementsByClassName('food-list-hook');
        let el = foodlist[index];
        this.foodsScroll.scrollToElement(el, 300);
      },
      // 可以被外部调用的方法没有下划线
      selectFood(food, e) {
        console.log('selectFood');
        if (!e._constructed) {
          return;
        }
        console.log(JSON.stringify(food));
        this.selectedFood = food;
        this.$refs.food.show();
      },
      // 私有方法名字有下划线
      _initScroll() {
        // console.log(this.$els);
        // console.log(this.$els.menuWrapper);
        this.menuScroll = new BScroll(this.$els.menuWrapper, {
          click: true
        });
        this.foodsScroll = new BScroll(this.$els.foodsWrapper, {
          probeType: 3,
          click: true
        });
        this.foodsScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y));
        });
      },
      _caculateHeight() {
        let foodList = this.$els.foodsWrapper.getElementsByClassName('food-list-hook');
        let height = 0;
        this.listHeight.push(height);
        for (let i = 0; i < foodList.length; i++) {
          let item = foodList[i];
          height += item.clientHeight;
          this.listHeight.push(height);
        }
      },
      _drop(target) {
        this.$nextTick(() => {
          this.$refs.shopcart.drop(target);
        });
      }
    },
    components: {
      shopcart, cartcontrol, food
    },
    events: {
      'cart.add'(target) {
        console.log('接受派发');
        this._drop(target);
      }
    }
  };
</script>
<style lang='stylus' rel='stylssheet/stylus'>
@import "../../common/stylus/mixin.styl"
.goods
  display: flex;
  position: absolute
  width: 100%
  top: 176px
  bottom: 46px
  overflow: hidden
  .menu-wrapper
    flex: 0 0 80px
    width: 80px
    background: #f3f5f7
    .menu-item
      display: table
      width: 56px
      height: 54px
      line-height: 14px
      padding: 0 12px
      &.current
        background: #fff;
        position: relative
        margin-top: -1px
        z-index: 10
        font-weight: 700
        .text
          border-1px(rgba(7,17,27,0.0))
      .icon
        display: inline-block
        vertical-align: top;
        width: 12px
        height: 12px
        margin-right: 5px
        background-size: 12px 12px
        background-repeat: no-repeat
        &.decrease
          bg-image('decrease_3')
        &.discount
          bg-image('discount_3')
        &.guarantee
          bg-image('guarantee_3')
        &.invoice
          bg-image('invoice_3')
        &.special
          bg-image('special_3')
      .text
        display: table-cell
        width: 56px
        vertical-align: middle
        font-size: 12px
        border-1px(rgba(7,17,27,0.1))
  .foods-wrapper
    flex: 1
    .food-list
      .title
        padding-left: 10px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147,153,159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        border-1px(rgba(7,17,27,0.1))
        &:last-child
          border-1px(rgba(7,17,27,0.0))
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            font-size: 14px
            line-height: 14px
            color: rgb(7,17,27)
          .desc,.extra
            font-size: 10px
            line-height: 10px
            color: rgb(147,153,159)
          .desc
            margin-bottom: 8px
            line-height: 12px
          .extra
            line-height: 10px
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color:  rgb(240,20,20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147,153,159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px








  
</style>