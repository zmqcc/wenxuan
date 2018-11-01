define(function(){
	return {
		mirror:function(){
			var oPhoto=document.querySelector('.details .good .photo');
			oPhoto.onmouseover=function(){
				alert(1);
			}
		}
	}
})