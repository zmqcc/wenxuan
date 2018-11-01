//一. 配置路径
require.config({
	'paths' : {
		'jquery' : "jquery-1.11.3",
		'zoom':'zoom'
	}
})

//二. 引入依赖
require(['jquery','zoom'],function($,zoom){
	//操作页面的代码
	$(function(){
		zoom.mirror();
	})
})