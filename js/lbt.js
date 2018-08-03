    
    let myTimer;
	var ord = 1;
	//初始化界面
	function initUI(){
		let lis = $("#b_uls").children;
		lis[0].style.backgroundColor = "red";
	}

	//图片停止改变
	function stopChange(){
		window.clearInterval(myTimer);
	}

	//图片开始变化
	function changeImg(){
		myTimer = setInterval(function(){
			let outOrd = ord;
			ord++;
			if(ord>7){
				ord=1;
			}
			let lis = $("#b_uls").children;
			for(let i =0;i<lis.length;i++){
				lis[i].style.backgroundColor = "pink";
			}
			lis[ord-1].style.backgroundColor = "red";
			opacityChange(outOrd,ord);
		},2000);
	}


	//图片的淡入淡出
	function opacityChange(outOrd,inOrd){
		let opacity = 1;
		let myTimer = setInterval(function(){
			opacity-=0.1;
			if(opacity<0){
				opacity = 0;
				window.clearInterval(myTimer);
			}
			$(".b_img")[outOrd-1].style.opacity = opacity;
			$(".b_img")[inOrd-1].style.opacity = 1-opacity;
		},20);
	}


	//图片跳转

	function goImg(transord){
		outOrd = ord;
		ord = transord;

		if(ord>7){
			ord=1;
		}
		let lis = $("#b_uls").children;
		for(let i =0;i<lis.length;i++){
			lis[i].style.backgroundColor = "pink";
		}
		lis[transord-1].style.backgroundColor = "red";
		opacityChange(outOrd,transord);
	}