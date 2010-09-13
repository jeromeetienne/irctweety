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

Misc
====
* about _announcer_
  * this is a twitter-irc bot from maushu
  * it is specific to #nodejs
  * it does a search on twitter and echo that in #node.js
  * it allow to tweet from irc channel
    * not sure this is announcer, it may be another

chat between irc and twitter users
==================================
* send tweets from irc channel to a twitter user
  * wont be twitter direct messages. they requires special authorisations, so are a user hasle.
* on a channel, !irctweety @desttwiuser blabla
  * it will be a mentions in twitter
  * why is there a need special command ? a mention may be done by normal 'say' command
* on a channel, !irctweety, say hello from irc


