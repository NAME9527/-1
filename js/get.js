


//获取元素的实际样式值
//获取某个DOM对象的某个样式属性
//参数：DOM对象，属性名
//返回值：属性值

function getStyle(domObj,attr){
	if(domObj.currentStyle){
		return domObj.currentStyle[attr];//当对象的属性是变量时，用方括号。不能用点。		
	}else{
		return window.getComputedStyle(domObj)[attr];
	}
}



//获取元素  id 
function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}




////获取n位数字和字母的验证码
function getMa(n){
		var arr = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","i","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
		var str = "";
		for(var i=0;i<n;i++){
			var index =parseInt (Math.random()*arr.length);
			str = str + arr[index];
		}
		return str;
	}

//点击换图片

function ock(shiJian){
		var arr1 = ["img/erji1.png","img/wenx1.png","img/xmn1.png","img/fs1.png","img/erji1.png","img/wenx1.png","img/xmn1.png","img/fs1.png"]
		var arr2 = ["img/erji2.jpg","img/wenx2.jpg","img/xmn2.jpg","img/fs2.jpg","img/erji2.jpg","img/wenx2.jpg","img/xmn2.jpg","img/fs2.jpg"]
		for(let i=0;i<$(shiJian).length;i++)
			$(shiJian)[i].onmouseover=function(){
				$(shiJian)[i].firstElementChild.src=arr2[i];
				$(shiJian)[i].style.backgroundColor="#f4f0ea";
			}
		for(let i=0;i<$(shiJian).length;i++)
			$(shiJian)[i].onmouseout=function(){
				$(shiJian)[i].firstElementChild.src=arr1[i];
				$(shiJian)[i].style.backgroundColor="#fff";
			}
		}


function ock_span1(){
	var left1 = parseInt(getStyle( $(".uls_goods")[0],"left"));
	var left2 = parseInt(getStyle( $(".uls_goods")[0],"left"));
	var Timer = setInterval(function(){
		left1=left1+100;
		if(left1>left2+1090){
			window.clearInterval(Timer);
			left1=left2+1090;
		}
			$(".uls_goods")[0].style.left=left1+"px";
		},10)
}


function ock_span2(){
	var left1 = parseInt(getStyle( $(".uls_goods")[0],"left"));
	var left2 = parseInt(getStyle( $(".uls_goods")[0],"left"));
	var Timer = setInterval(function(){
		left1=left1-100;
		if(left1<left2-1090){
			window.clearInterval(Timer);
		    left1=left2-1090;
		}
			$(".uls_goods")[0].style.left=left1+"px";
		    },30)
	}