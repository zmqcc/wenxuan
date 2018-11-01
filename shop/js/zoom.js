define(function(){
	return {
		mirror:function(){
			// 显示滤镜和大图
			$('.details .good .photo').mouseover(function(){
				$('.details .good .photo .filter').css("display","block");
				$('.details .good .photo .bigimg').css("display","block");
			})
			$('.details .good .photo').mouseout(function(){
				$('.details .good .photo .filter').css("display","none");
				$('.details .good .photo .bigimg').css("display","none");
			})
			//鼠标移动
			var oPhoto=document.querySelector('.details .good .photo');
			var oFilter=document.querySelector('.details .good .photo .filter');
			var oJingzi=document.querySelector('.details .good .photo .bigimg .jingzi');
									oPhoto.onmousemove=function(e){
										var e=e||window.event;
										var 
										l=e.clientX-this.offsetLeft-oFilter.offsetWidth/2,
										t=e.clientY-this.offsetTop-oFilter.offsetHeight/2;
										//处理边界
										l=l<0?0:(l>150?150:l);
										t=t<0?0:(t>150?150:t);
										
										oFilter.style.left=l+'px';
										oFilter.style.top=t+'px';
			
										oJingzi.style.left=-2*l+'px';
										oJingzi.style.top=-2*t+'px';
									}
			
		}
	}
})