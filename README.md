# vue-spa
- backdrop-filter属性  
 Safari支持， ` backdrop-filter: blur(10px)`能够使背景变模糊
- vue 中使用渐变  [vue文档](http://cn.vuejs.org/v2/guide/transitions.html)

- sticky footer
	
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
	
- flex  
[flex布局计算原理](http://blog.csdn.net/lihongxun945/article/details/45458717)  
[阮一峰布局语法](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool)  
[阮一峰布局实例](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)

	1. flex-grow
	2. flex-shrink
	3. flex-basis