define(function(){
	return{
		lunbo : function(){
					var oFind=document.querySelector('.find');
					var oFimg=document.querySelectorAll('.find img');
					var oBanner=document.querySelector('.banner');
					var oBox=document.querySelector('.box');
					// var oSpan=document.querySelectorAll('.banner span');
					var oImg=document.querySelectorAll('.box img');
			
					
			
					//点击左右按钮切换图片
					var count=0;
					oImg[0].style.opacity=1;
// 					oSpan[0].onclick=function(){
// 						after();
// 					}
// 					oSpan[1].onclick=function(){
// 						next();
// 					}
// 			
				
			
					//向后切换
					function after(){
						if(count==0){
							count=oImg.length-1;
						}else{
							count--;
						}
						clear();
						move(oImg[count],{opacity:100});
						oFimg[count].className='active';
						// oI[count].className='active';
					}
			
					//向前切换
					function next(){
						count++;
						if(count>oImg.length-1){
							count=0;
						}
						clear();
						move(oImg[count],{opacity:100});
						oFimg[count].className='active';
						// oI[count].className='active';
					}
			
			
					//自动切换图片
					var timer=setInterval(function(){
						next();
					},3000);
			
					oBanner.onmouseover=function(){
						clearInterval(timer);
// 						for(var i=0;i<oSpan.length;i++){
// 							move(oSpan[i],{opacity:100});
// 						}
					}
			
					oBanner.onmouseout=function(){
						timer=setInterval(function(){
							next();
						},3000);
// 						for(var i=0;i<oSpan.length;i++){
// 							move(oSpan[i],{opacity:0});
// 						}
					}
					//给小图添加鼠标滑过事件
					oFimg[0].className='active';
						for(let k=0;k<oFimg.length;k++){
							oFimg[k].onmouseover=function(){
					 				clear();
									this.className='active';
					 				move(oImg[k],{opacity:100});
									count=k;
					 		}
					 	}
			
			
			
			
					//动态添加按钮
// 					var findstr='';
// 					for(let i=0;i<oImg.length;i++){
// 						findstr+='<i></i>'
// 					}
// 					oFind.innerHTML=findstr;
// 					var oI=document.querySelectorAll('.find i');
					//给按钮添加鼠标滑过事件
// 					oI[0].className='active';
// 					for(let k=0;k<oI.length;k++){
// 						oI[k].onmouseover=function(){
// 							clear();
// 							this.className='active';
// 							move(oImg[k],{opacity:100});
// 							count=k;
// 						}
// 					}
			
					//清除所有图片的不透明度
					function clear(){
						for(let i=0;i<oImg.length;i++){
							move(oImg[i],{opacity:0});
							// oI[i].className='';
							oFimg[i].className='';
						}
					}
		}
	}
})