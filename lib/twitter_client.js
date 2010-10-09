/**
 * Minimal twitter client
 * - oauth compliant
 * - switch to twitter-node when possible
*/
var TwitterClient	= function(){
	// consummer stuff for a irctweety
	var consumer_key	= "8ho0SXoPa10N193ytZGcg";
	var consumer_secret	= "xEGPFDZuGcCUPZf6tT98Q0ZQPwW7LXn1JEnh3RF7Q";
	
	var OAuth	= require('../vendor/node-oauth/lib/oauth').OAuth;
	var oauth	= new OAuth("https://twitter.com/oauth/request_token", "https://twitter.com/oauth/access_token",
				consumer_key, consumer_secret, 
				"1.0A", "http://localhost:3000/oauth/callback", "HMAC-SHA1"
			);
	
	// access_token stuff for webpeerit
	var access_token	= "10162102-kMNP7XRBV7YN41GIZyl7QXEuwL7jj3O6Y7DhRAGQ";
	var access_token_secret	= "GIIuynA8dmIAEPazgzAkaWHj9mQhsJCKJuXKgTkHwwc";

	var retweeted_by_me	= function(callback){
		callback	= callback || function(error, data){}
		oauth.get("http://api.twitter.com/1/statuses/retweeted_by_me.json", access_token, access_token_secret, callback);		
	}
	var update		= function(text, callback){
		callback	= callback || function(error, data){}
		oauth.post("http://api.twitter.com/1/statuses/update.json", access_token, access_token_secret, {"status": text}, callback);		
	}
	var public_timeline	= function(callback){
		callback	= callback || function(error, data){}
		oauth.get("http://api.twitter.com/1/statuses/public_timeline.json", access_token, access_token_secret, callback);		
	}
	var mentions		= function(opts, callback){
		var qstring	= require('querystring').stringify(opts)
		var url		= "http://api.twitter.com/1/statuses/mentions.json?"+qstring;
		callback	= callback || function(error, data){}
		oauth.get(url, access_token, access_token_secret, callback);		
	}
	var user_timeline	= function(opts, callback){
		var qstring	= require('querystring').stringify(opts)
		var url		= "http://api.twitter.com/1/statuses/user_timeline.json?"+qstring;
		callback	= callback || function(error, data){}
		oauth.get(url, access_token, access_token_secret, callback);		
	}
	
	return {
		retweeted_by_me	: retweeted_by_me,
		update		: update,
		public_timeline	: public_timeline,
		user_timeline	: user_timeline,
		mentions	: mentions
	}
}


/**
 * Class method to create an object
 * - thus avoid new operator
*/
TwitterClient.create	= function(ctor_opts){
	return new TwitterClient(ctor_opts);
}

// export it via commonjs
exports.create	= TwitterClient.create;
