//一. 配置路径
require.config({
	'paths' : {
		'jquery' : "jquery-1.11.3",
		'move':'move',
		'lunbo':'lunbo',
		'focus':'focus'
	}
})

//二. 引入依赖
require(['jquery','move','lunbo','focus'],function($,move,lunbo,focus){
	//操作页面的代码
	$(function(){
		lunbo.lunbo();
		focus.focus();
	})
})