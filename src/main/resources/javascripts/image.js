// JavaScript Document
var db=require('./db');
function Photos(photos){
	this.user=photos.uesr;
	this.urlid=photos.urlid;
	this.message=photos.message;
}

Photos.prototype.save=function(){
	var now=new Date();
	var time={
		date:now.getTime(),
		year:now.getFullYear(),
		month:now.getFullYear()+'-'+(now.getMonth()+1),
		day:now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate(),
		hours:now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate()+'-'+now.getHours(),
		minutes:now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate()+'-'+now.getHours()+':'+
		        now.getMinutes()
	};
    
    var id=this.user.toString()+time.date().toString();
    var photos={
    	user:this.user,
    	urlid:this.urlid,
    	message:this.message,
    	time:time,
    	id:id
    };

    db.open(function(err,db){
	if(err){
	  return callback(err);
	}
	db.collection('photos',function(err,collection){
	if(err){
	db.close();
	return callback(err);
	}
	collection.insert(photos,function(err,docs){
	db.close();
	if(err){
	return callback(err);
	}
	callback(null);
	});
  });
});
};

Photos.get=function(Item,page,callback){
	db.open(function(err,db){
	if(err){
		console.log(err+' open');
	return callback(err);
	}
	db.collection('photos',function(err,posts){
	if(err){
		console.log(err+'  collection');
	db.close();
	return callback(err);
	}
	var query={};
	var count=0;
	if(Item){
	query.name=Item;
	}
	posts.count(query,function(err,_count){
		count=_count;
	});
	posts.find(query,{sort:{time:-1}}).skip(page.index).limit(page.size).toArray(function(err,docs){
	db.close();
	if(err){
		console.log(err+' find');
	return callback(err);
	}
	callback(null,docs,count);
	  });
    });
  });
};

module.exports=Photos;