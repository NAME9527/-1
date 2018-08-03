//3.封装函数：实现官方函数substring的功能
//功能：在已知的字符串中截取子串
//参数：
// 原始字符串:字符串类型
// 起始位置：数字类型
// 结束位置（不含）：数字类型
//返回值：截取后的结果字符串

function mySubstring(str,start,end){
	var newStr="";
	for(var i=start;i<end;i++){
		newStr+=str.charAt(i);
	}
	return newStr;
}


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


//获取随机的颜色值
function getColor(){
	var str="#";
	for(var i=0;i<6;i++){
		//1、获取0-16（不包括）的数
		var temp = parseInt(Math.random()*16).toString(16);
		//2、拼接
		str+=temp;
	}
	return str;
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


//统计字符串中每个字符的个数。（“aaabbbbccdeefff”,a3 b4 c2 d1 e2 f3）

function test(){
	//1、得到用户的输入
	var str=document.getElementById("sourceId").value;
	
	//2、逻辑（统计个数，压缩）
	var resultStr = "";//定义一个变量，保存最终的结果
	var count = 1;//定义一个变量，保存字符重复的次数
	var currCh = str.charAt(0);//定义一个变量，保存当前字符（正在统计个数的那个字符）；相当于坐庄的字符；
	for(var i=1;i<str.length;i++){
		//统计每个字符重复的次数；
		if(str.charAt(i)==currCh){
			count++;
		}else{
			//1)、把原来的庄家和坐庄次数，拼接到resultStr；
			resultStr += currCh+count;
			//2)、换庄家（换字符）
			currCh = str.charAt(i);
			//3)、次数清1；
			count = 1;
		}		
	}
	resultStr += currCh+count;
	
	//3、输出
	document.getElementById("resultId").value=resultStr;
	
	
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

	//5.封装函数：将URL按key-value形式返回到一个json结构中
//功能：在已知的字符串中截取子串
//参数：
// 原始字符串:字符串类型
// 分割符号：？ & =
//返回值：截取后的结果字符串组成的JSON对象

 function jiequjzd(url){
 	var result={};
 	str1=url.split("?")[1];
 	var arr=str1.split("&");
 	for(var i=0;i<arr.length;i++){
 		result [arr[i].split("=")[0]]=arr[i].split("=")[1];
 	}
 	result=JSON.stringify(result);
 	return result;
 }


//函数名：qingkongqh
//函数功能：用正则去掉字符串的空格
//参数：字符串
//返回值：新的字符串

 function qingkongqh(str){
var str1=str.replace(/\s/g,"");
 console.log(str1);
}
 

 /*函数名：turnArray
函数功能：颠倒数组中元素的顺序。
参数：数组*/
function turnArry(arr){
	var arrNew = [];
	for(var i=arr.length-1;i>=0;i--){
		arrNew.push(arr[i]);
	}
	return arrNew;
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