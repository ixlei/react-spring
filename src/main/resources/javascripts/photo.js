// JavaScript Document
$(window).load(function(){
//$(document).ready(function(){
	
	var waterfallTop=[],
	    colWidth=300;

	for(var i=0;i<3;i++){
		waterfallTop.push(0);
	}
	
	/*$('#main-content').append("<div class='waterfall-col0 waterfall-col'></div><div class='waterfall-col1 waterfall-col'></div><div class='waterfall-col2 waterfall-col'></div>");
    $('.waterfall-col').css({
    	    position:'relative',
    	    width:"300px",
    	    float:"left"
    });
*/  
    waterfallTop.min=function(waterfallTop){
    	return Math.min.apply(Math,waterfallTop);
    }
   
   $('.waterfall').each(function(){
   	   var minColValue=waterfallTop.min(waterfallTop),
           minTopCol=waterfallTop.indexOf(minColValue);
       var top=minColValue+'px',
           left=(minTopCol*colWidth)+'px';
        
        this.style.top=top;
        this.style.left=left;
        waterfallTop[minTopCol]+=$(this).height()+10;
        //alert($(this).height());
        //console.log($(this).height())
   });
 
});
