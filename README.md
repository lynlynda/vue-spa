# vue-spa
- ### backdrop-filter属性  
 Safari支持， ` backdrop-filter: blur(10px)`能够使背景变模糊
- ### vue 中使用渐变  [vue文档](http://cn.vuejs.org/v2/guide/transitions.html)

- ### sticky footer
	
	```
	
	<style>
	
	.detail {
	      position: fixed;
	      top: 0;
	      left: 0;
	      z-index: 100;
	      width: 100%;
	      height: 100%;
	      overflow: auto;
	}
	
	
	.detail-wrapper{
	    min-height: 100%;
	}
	
	.detail-main{
	   padding-top: 64px ;
	   padding-bottom: 64px;
	}
	      
	          
	.detail-close{
		position: relative;
		width: 32px;
		height: 32px;
		margin: -64px auto;
	}
		
	</style>
	
	<div class="detail">
	    <div class="detail-wrapper ">
	        <div class="detail-main"></div>
	    </div>
	    <div class="detail-close"></div>
	</div>
	   
	```
	
- ### flex  
[flex布局计算原理](http://blog.csdn.net/lihongxun945/article/details/45458717)  
[阮一峰布局语法](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool)  
[阮一峰布局实例](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)

	1. flex-grow
	2. flex-shrink
	3. flex-basis  

  
- ### this.$nextTick(() => {})   
  涉及dom相关的计算时，需要保证dom已经渲染完毕：
  需要用$nextTick() 方法，因为vue的dom更新是异步的，会放入异步队列去执行
    
  ```
	  this.$nextTick(() => {   
		 //dom渲染完毕
		  dosometing  
	  })
   
  ```
  
- ### better-scroll   
  1. 会阻止默认点击行为,需要进行设置才能用  

	```
	this.menuScroll = new BScroll(this.$els.menuWrapper, {
	          click: true
	 });
	```  
	如此设置，在pc端使用better-scroll时，会产生两次click事件，因为浏览器执行一次，better-scroll执行一次。因此需要将浏览器的阻止掉。 
	 
	```
	
	  selectMenu(index,e) {    	
        if(e._constructed){
          return;
        }
        console.log(this.listHeight[index]);
      }
   ```
- ### vue里面如果props是一个数组或者对象，default需要是一个函数  

 ```
 props: {  
	 	selectFood:{  	
	 		type: Array,   		
	 		default() {  		
	 			return [];  		
	 		}  		
	 	}  	
 }  
  
 ```
- 想要给数据新增某些之前不存在的属性时，想要vue对这些新增属性进行观测，需要使用```Vue.set```方法  

- ### 子组件派发一个事件，父组件接收  
子组件在点击事件中派发  
```this.$dispatch('cart.add', event.target);```  

	  
	```
	
	methods: {  	
	  addCart(e) {  	  
	    if (!e._constructed) {      
	      return;  	      
	    }  	    
	    if (!this.food.count) {  	    
	      Vue.set(this.food, 'count', 1);       
	    } else {  
	      this.food.count++;  
	    }  
	    this.$dispatch('cart.add', event.target);   
	  }   
	}  
	```
父组件接收 
 
	```
	events: {
	      'cart.add'(target){
	      }
	}  
	```


  
	$dispatch已经废弃，[查看文档](http://cn.vuejs.org/v2/guide/migration.html#dispatch-和-broadcast-替换)  
	 
- ### 父组件访问子组件（v-ref,$refs）  
[Vue 2.0替换v-ref](http://cn.vuejs.org/v2/guide/migration.html#v-el-和v-ref-替换)   

 
	```
	<parent>  
	<shopcart v-ref:shopcart ></shopcart>  
	</parent>  
	
	<script> 
	···  
	 
	methods: {  
		_drop() {  
			this.$refs.shopcart
		}
	}   
	
	···
	</script>
	
	```  
- ### v-el 绑定dom  this.$els访问被绑dom  
[Vue 2.0替换v-el](http://cn.vuejs.org/v2/guide/migration.html#v-el-和v-ref-替换) 
 
	```html```  
	
	```
		<div class="menu-wrapper" v-el:menu-wrapper>
		    <ul>
		      <li v-for="item in goods" class="menu-item" :class="{'current':currentIndex === $index}" @click="selectMenu($index,$event)">
		        <span class="text border-1px">
		          <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
		        </span>
		      </li>
		    </ul>
		  </div>  
		    
	```  
		
	```script``` 
		 
	```
	selectMenu(index, e) {
        if (e._constructed) {
          return;
        }
        console.log(1);
        let foodlist = this.$els.foodsWrapper.getElementsByClassName('food-list-hook');
        let el = foodlist[index];
        this.foodsScroll.scrollToElement(el, 300);
      }  
       
    ```   
     
- ### getBoundingClientRect
 [getBoundingClientRect](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)   
- ### 阻止冒泡  
@click.stop.prevent  
- 详情页图片问题  
图片不能写死宽高，因为宽=高=设备屏幕宽，是变化的。但是如果不写，那么图片加载时异步过程，图片下的内容会跳动。因此，  

```  
.image-wrapper  
	width: 100%
	height: 0 
	padding-top: 100% 
	.image
		width: 100%
		height: 100%  
``` 
w3c中说，当padding设置百分数的时候，他是相对于该容器的宽来计算的


- 绑定class  
```<span :class="{'icon-thumb_up':rating.rateType === 0,'icon-thumb_down':rating.rateType === 1}"></span>```  

- for...of 方法  
一个数据结构只要部署了Symbol.iterator属性，就被视为具有iterator接口，就可以用for...of循环遍历它的成员。for...of循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象（比如arguments对象、DOM NodeList 对象）、后文的 Generator 对象，以及字符串。对于***普通的对象***，for...of结构不能直接使用，会报错，必须部署了iterator接口后才能使用。
	[es6的for...of](http://es6.ruanyifeng.com/#docs/iterator#for---of循环)  
- vue的filter  
```   
<div class="time">{{rating.rateTime | formatDate}}</div>  

filters: {
      formatDate(time) {
        let date = new Date(time);
        return formatDate(date, 'yyyy-MM-dd hh:mm');
      }
    }  
 ```   
-  正则的test方法 match方法    
- ready()声明周期，是dom渲染完毕之后调用的方法  
- watch方法  
watch: {
	'seller'() {

	}	
}  
观察seller变量，执行相应方法  
- 商家实景图  
需要给ul赋值是因为，ul作为可以滑动的内容块他的长度应该大于包含他的块，不然不能滑动。  
- 什么情况用localstorage   
- Object.assign  
- localstorage  
- keep-alive  
- 总结  
vue-cli脚手架
es6 + eslint
组件化，模块化
vue-router,vue-source
vue.js 权威指南