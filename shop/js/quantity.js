define(function(){
	return {
		count:function(){
			var oMinus=document.querySelector('#btn1');
			var oTxt=document.querySelector('#txt');
			var oAdd=document.querySelector('#btn2');
			var count=oTxt.value;
			oMinus.onclick=function(){
				count<=1?1:count--;
				oTxt.value=count;
			}
			oAdd.onclick=function(){
				count++;
				oTxt.value=count;
			}
		}
	}
})