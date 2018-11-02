define(function(){
	return {
		focus:function(){
			var list=[
				{
					"img":"dist/image/1201153251_0_1.jpg",
					"description":"浮生六记",
					"price":"￥23.00",
					"yuanprice":"￥33.00"
				},
				{
					"img":"dist/image/1201508815_22_1.jpg",
					"description":"红星照耀中国",
					"price":"￥23.00",
					"yuanprice":"￥33.00"
				},
				{
					"img":"dist/image/1201153251_0_1.jpg",
					"description":"浮生六记",
					"price":"￥23.00",
					"yuanprice":"￥33.00"
				},
				{
					"img":"dist/image/1200885923_11_1.jpg",
					"description":"解忧杂货店",
					"price":"￥23.00",
					"yuanprice":"￥33.00"
				},
				{
					"img":"dist/image/1200885923_11_1.jpg",
					"description":"解忧杂货店",
					"price":"￥23.00",
					"yuanprice":"￥33.00"
				},
				{
					"img":"dist/image/1201607673_0_1_800x800.jpg",
					"description":"原则",
					"price":"￥23.00",
					"yuanprice":"￥33.00"
				},
				{
					"img":"dist/image/1201153251_0_1.jpg",
					"description":"浮生六记",
					"price":"￥23.00",
					"yuanprice":"￥33.00"
				},
				{
					"img":"dist/image/1201508815_22_1.jpg",
					"description":"红星照耀中国",
					"price":"￥23.00",
					"yuanprice":"￥33.00"
				},
				{
					"img":"dist/image/1201153251_0_1.jpg",
					"description":"浮生六记",
					"price":"￥23.00",
					"yuanprice":"￥33.00"
				},
				{
					"img":"dist/image/1200885923_11_1.jpg",
					"description":"解忧杂货店",
					"price":"￥23.00",
					"yuanprice":"￥33.00"
				}
			]
			var str="";
			for(var i=0;i<list.length;i++){
				str+=`<li>
									<a href="#">
										<div class="book"><img src="${list[i].img}" ></div>
										<div class="descri">${list[i].description}</div>
										<div class="price"><span class="float-left">${list[i].price}</span><i class="float-right">${list[i].yuanprice}</i></div>
										<p><span>${list[i].description}</span></p>
									</a>
								</li>`;
			}
			$('#focus .list ul').append(str);
			$('#focus .list ul li').mouseenter(function(){
				$(this).children().children().last().slideDown(600);
			})
			$('#focus .list ul li').mouseleave(function(){
				$(this).children().children().last().slideUp(200);
			})
		}
	}
})