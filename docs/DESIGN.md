About
-----
This file is describing irctweety design. irctweety is *a gateway between irc and twitter*.
It will provide irc goodies to twitter user and twitter goodies to irc users.

It is an irc bot. no web html stuff, it makes it easier to maintain.
It is coded in nodejs because... i like nodejs :)

potential features
------------------
* conversation between irc users and twitter users
** cross networks chatting
* tweet an irc channel activity
** send irc data to twitter
** /msg irctweety retweet #yourchannel @tweetuser
* irc msg from twitter search
** send twitter data to irc
** /msg irctweety search_twitter #yourchannel foo bar


chat between irc and twitter users
----------------------------------
* send tweets from irc channel to a twitter user
** wont be twitter direct messages. they requires special authorisations, so are a user hasle.
* on a channel, !irctweety @desttwiuser blabla
** it will be a mentions in twitter
** why is there a need special command ? a mention may be done by normal 'say' command
* on a channel, !irctweety, say hello from irc
** will 

