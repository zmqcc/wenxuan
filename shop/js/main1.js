//一. 配置路径
require.config({
	'paths' : {
		'jquery' : "jquery-1.11.3",
		'amount':'amount'
	}
})

//二. 引入依赖
require(['jquery','amount'],function($,amount){
	//操作页面的代码
	$(function(){
		amount.amount();
	})
})