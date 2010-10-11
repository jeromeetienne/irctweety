var twitter	= require('./twitter_client').create();
var nstore	= require('../vendor/nstore/lib/nstore');

var handle_err	= function(error){
	if(error)	console.log("PANIC "+JSON.stringify(error));
	console.assert(!error)	
}

twitter.user_timeline({
	count		: 200,
	page 		: 10,
	include_rts	: 1
}, function(error, data){
	handle_err(error);
	var item	= JSON.parse(data);
	console.log("item len="+item.length)
})
