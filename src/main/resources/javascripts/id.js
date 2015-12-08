// JavaScript Document
imd.initDocReady(id);
function id(){
  var id_all=imd.getElement("#id_all");
      id_all.style.width="900px";
  var id_all_width=parseInt(id_all.style.width);
      id_all.style.left=(imd.windowSize().width-id_all_width)/2+"px";
  var p_tx=imd.getElement("#p_tx");
 var id_dh=imd.getElement("#id_dh");
      id_dh.style.width=imd.windowSize().width+'px';
};