//一. 配置路径
require.config({
	'paths' : {
		'jquery' : "jquery-1.11.3",
		'zoom':'zoom',
		'quantity':'quantity'
	}
})

//二. 引入依赖
require(['jquery','zoom','quantity'],function($,zoom,quantity){
	//操作页面的代码
	$(function(){
		zoom.mirror();
		quantity.count();
	})
})