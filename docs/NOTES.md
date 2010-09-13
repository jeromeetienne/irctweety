I used irc for more than 15years, an heavy duty user. Twitter is “this new thing im trying to grasp”. What about coding on it ?

principles
----------

* irc is about real time chating
* twitter is going real time with its new streams
* lets bring the 2 communities together

existing features
-----------------
* irc and twitter are real time
* irc and twitter got usernames. but each got its own namespace.
* on irc, messages are forgotten between immediatly after broadcast. on twitter they are store
* on irc, people chats mainly on channel, one-to-many. on twitter they mainly chat one-to-one
* on twitter, it is possible to talk “alone”. on irc, any message got a destination, #channel or private msg
* *summary*: both got very similar features. twitter more long term with logging, twitter more one-to-one, irc more about topic with #channel


potential features
------------------
* conversation between irc users and twitter users
** cross networks chatting
* tweet an irc channel activity
** send irc data to twitter
* irc msg from twitter search
** send twitter data to irc

conventions
-----------
* on twitter @username and #tag, on irc “supernick: you are super”
* on twitter there is “via @username” for retweeting
* on irc, it is considered rude to send a unsolicited private message. on twitter it is ok.

irc to twitter
--------------
* bot on a channel, it will tweet to the bot twitter account.
* if twitter user mentions this bot twitter account, bot will send this msg to irc channel.
* if irc users says “@twitteruser” the mentions will be automatically visible to twitteruser, because the bot already tweet irc channel content.
* how to convert irc message to twitter message ?
* how to handle username conversion
* how to handle twitter message limit.

twitter to irc
--------------
* several of them already exists
* http://tweetirc.com is 
** if msg contains #tag, then make it appears in a channel/tab about #tag
** same things with @username
** from a UI pov, it is tabs, each one showing a given search.
* announcer on #nodejs
* 'irc isnt sexy' http://blog.overra.com/irc-isnt-sexy-can-jquery-nodejs-help