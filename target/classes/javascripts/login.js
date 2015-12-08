// JavaScript Document
var login_f=function(){
	var oId=imd.getElement("#login");
	    oId.style.position="absolute";
	    oId.style.width="480px";
		oId.style.height="320px";
	var bg_lg=imd.getElement("#bg_lg");
	    bg_lg.style.width=imd.windowSize().width-2+"px";
	var dh=imd.getElement("#dh");
	    dh.style.width=imd.windowSize().width+20+"px";
	var svg=imd.getElement("#svg");
	var width=parseInt(oId.style.width),
	    height=parseInt(oId.style.height);
	oId.style.left=(document.body.clientWidth-width)/2+"px";
	oId.style.top=(window.screen.availHeight-height)/2+"px";
	svg.style.left=oId.style.left;
};
imd.initDocReady(login_f);