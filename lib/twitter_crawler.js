var twitter	= require('./twitter_client').create();
var nstore	= require('../vendor/nstore/lib/nstore');

var handle_err	= function(error){
	if(error)	console.log("PANIC "+JSON.stringify(error));
	console.assert(!error)	
}


var timeline_read_page	= function(page_idx, page_len, callback){
	twitter.user_timeline({
		count		: page_len,
		page		: page_idx,
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
	var page_len	= 100;
	var page_idx	= 0;
	var res_cb	= function(items){
		console.log('items len' + items.length + " page_idx=" + page_idx + " page_len=" + page_len);
		callback(items);
		if( items.length > 0 ){
			page_idx++;
			subfct(page_idx, page_len, res_cb);
		}
	};
	subfct(page_idx, page_len, res_cb);
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
		statuses.forEach(function(statuses){
			users.save(statuses.id, statuses, function(error){
				handle_err(error);
			});		
		})
	})
});
