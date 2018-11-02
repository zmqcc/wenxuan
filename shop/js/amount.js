define(function(){
	return {
		amount:function(){
			//减数量
			$('.content .list ul li .quantity #minus').click(function(){
				var count=$(this).next().val();
				count<=1?1:count--;
				$(this).next().val(count);
				sum+=count;
			})
			//加数量
			$('.content .list ul li .quantity #plus').click(function(){
				var count=$(this).prev().val();
				count++;
				$(this).prev().val(count);
				sum+=count;
			})
			// 获取购物车中所有商品总数
			var sum=0;
			for(var i = 0;i < $('.content .list ul li').length;i++){
				sum += parseInt($('.content .list ul li .quantity #txt').val());
			}
			$('.caculate .total .num span').append(sum);
			//计算购物车中所有商品总价
			var money=0;
			for(var i=0,len=$('.content .list ul li').length;i<len;i++){
				money += parseInt($('.content .list ul li .quantity #txt').val())*parseFloat($('.content .list ul li .price span').text());
			}
			$('.caculate .total .money .zongjia span').append(money);
			
		}
	}
})