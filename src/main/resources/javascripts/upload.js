// JavaScript Document

var dragEvent=function(){
	var drop=document.getElementById("drop"),
		area=document.getElementById("filearea");
		area.style.width='420px';
		area.style.height='250px';
	var	width=parseInt(area.style.width),
		height=parseInt(area.style.height);
	area.style.left=(document.body.clientWidth-width)/2+'px';
	area.style.top=(window.screen.availHeight-height)/4+'px';
	imd.Event(document).on('dragover',function(e){
		e=e||window.event;
		e.stopPropagation();
		e.preventDefault();
		e.dataTransfer.dragEffect = 'copy';
	});

	imd.Event(document).on('drop',function(e){
		e=e||window.event;
		e.stopPropagation();
		e.preventDefault();
		sendFile(e.dataTransfer.files);
		//showFile(e.dataTransfer.files);
	});
}
imd.initDocReady(dragEvent);
var sendFile=function(file){
   if(file.length<=0){
	return;
   }
 var fileName='',
     formdata=new FormData(),
	 url='/upload/'+file.length,
	 pro=document.getElementById("show"),
	 progress=document.getElementById("progress");
	 
   for(var i=0;i<file.length;i++){
	 formdata.append('file'+i,file[i]);
	 fileName+=file[i].name;
   }
 var xhr=new XMLHttpRequest();
   xhr.upload.addEventListener("progress",function(e){
	if(e.lengthComputable){
		progress.style.display="block";
	    progress.value=Math.round(e.loaded/e.total)*100;
	}
	},false);
   xhr.upload.onload=function(){
	  pro.innerHTML='完成';
   }
   xhr.upload.onerror=function(){
	   pro.innerHTML='出错';
   }
   xhr.open("POST",url,true);
   xhr.responseType='text';
   xhr.onload=function(){
	 if(this.status==200||this.status==304){
		if(xhr.response=='1'){
		  window.location.href='/';
		}
	 }
   }
   xhr.send(formdata);
}
   
 var showFile=function(file){
   	  for(var i=0,f;i<file.length;i++){
   	  	f=file[i];
   	  	var reader=new FileReader();
   	  	reader.readAsDataURL(f);
   	  	imd.Event(reader).on('load',function(){
   	  		imd.getElement('#show').innerHTML="<img src="+"'"+ this.result+ "'"+ "/>";
   	  	});
   }
}
