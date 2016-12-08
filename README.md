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


	