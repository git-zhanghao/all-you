function setRem(){
	//动态设置像素比
	var oPixelRatio = 1 / window.devicePixelRatio;
	//console.log(oPixelRatio)
	document.write('<meta name="viewport" content="width=device-width,initial-scale='+oPixelRatio+',minimum-scale='+oPixelRatio+',maximum-scale='+oPixelRatio+',user-scalable=no" />');
	
	//调用setSize函数，自动刷新
	setSize();
	window.addEventListener("resize", setSize, false);
	window.addEventListener("orientationchange", setSize, false);
	function setSize(){
		//获取字体大小
		var html = document.getElementsByTagName('html')[0];
		var pageWidth = html.getBoundingClientRect().width;
		html.style.fontSize = pageWidth / 15 +"px";
	}
}