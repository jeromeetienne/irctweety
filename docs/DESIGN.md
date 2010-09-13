About
=====
This file is describing irctweety design. irctweety is *a gateway between irc and twitter*.
Its motivation is to bring twitter community and irc one closer to each other.
It will provide irc goodies to twitter user and twitter goodies to irc users.
It is an irc bot. no web html stuff, it makes it easier to maintain.
It is coded in nodejs because... i like nodejs :)

twitter goodies to irc users
----------------------------
* able to follow some users/list and send that to a channel/user
* able to search and send that to a channel/user

irc goodies to twitter users
----------------------------
* publish irc channel log to an twitter account
  * username conversion (collision with mention twitter convention)

chat between irc and twitter users
----------------------------------
* this is an important part of getting the 2 communities closer

General Principles
==================
* irc only.
  * much easier to maintain. no chrome at all, only a bot
* one twitter account attached to a irc channel
  * the priority is on *community*, not individual
  * Thus if some work is specific to individual, it is less priority than comminity one
  * the twitter account is the twitter identity of the irc channel

chat between irc and twitter users
==================================
* send tweets from irc channel to a twitter user
  * wont be twitter direct messages. they requires special authorisations, so are a user hasle.
* on a channel, !irctweety @desttwiuser blabla
  * it will be a mentions in twitter
  * why is there a need special command ? a mention may be done by normal 'say' command
* on a channel, !irctweety, say hello from irc

Commands
========
* for twitter/irc username conversion, there is a user registration
  * /msg irctweety register_user mytwitterusername
  * /msg irctweety confirm_user mytwitterusername
* for inviting the bot on a irc channel
  * /msg irctweety invite #mysuperchannel
  * /msg irctweety uninvite #mysuperchannel
  * is it needed to get special right on the channel ? i dont think so
  * (what about a default twitter search on the channel name ?)
* add twitter search to the channel
  * /msg irctweety search #channel foo bar
* add twitter follow to a irc channel
  * /msg irctweety follow #channel username/list
* for echooing #channel activity on a twitter account
  * /msg irctweety register_channel #channel mytwitteruser
  * /msg irctweety confirm_channel #channel mytwitteruser

notes
-----
* if a command is sent over the channel, the channel name is inserted as second parameter in the command

Misc
====
* on twitter, irctweety got public timeline, it is autofollow
  * it allows direct messages 
* how to handle irc users permissions ?
  * this is such a mess... can i avoid it altogether ?

Alternatives
============
* about _announcer_
  * this is a twitter-irc bot from maushu
  * it is specific to #nodejs
  * it does a search on twitter and echo that in #node.js
  * it allow to tweet from irc channel
    * not sure this is announcer, it may be another

