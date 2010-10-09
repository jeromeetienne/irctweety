var twitter	= require('./twitter_client').create();
var nstore	= require('../vendor/nstore/lib/nstore');

var handle_err	= function(error){
	if(error)	console.log("PANIC "+JSON.stringify(error));
	console.assert(!error)	
}


var timeline_read_page	= function(since_id, count, callback){
	twitter.user_timeline({
		count		: count,
		since_id	: since_id,
		include_rts	: true
	}, function(error, data){
		handle_err(error);
		var statuses	= JSON.parse(data);
		callback(statuses);
	})
}

/**
 * merci au patch de brice argenson 
*/
var paginate	= function(subfct, callback){
	var count	= 10;
	var since_id	= 1;
	var res_cb	= function(items){
		console.log('items len'+items.length + " since_id="+since_id+" count="+count);
		if( items.length == 0 ){
			callback(items);
		}else{
			callback(items);
			since_id	= items[items.length-1].id;
			subfct(since_id, count, res_cb);		
		}
	};
	subfct(since_id, count, res_cb);
}


// Create a store
var users	= nstore.new('/tmp/user_timeline.db', function(error){
	handle_err(error);
	paginate(timeline_read_page, function(statuses){
		console.log("len="+statuses.length);
		//if( statuses.length === 0 ){
		//	console.log("empty");
		//	return
		//}
		//statuses.forEach(function(mention){
		//	console.log(mention.id)
		//})
		//var last_id	= statuses[statuses.length-1].id;
		//console.log('last_id='+last_id);
		//statuses.forEach(function(mention){
		//	users.save(mention.id, mention, function(error){
		//		handle_err(error);
		//	});			
		//})
	})
});
