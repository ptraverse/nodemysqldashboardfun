Node Mysql Dashboard Fun
########################

Fun times on a droplet making a server that runs mysql and php and node:

* Nodejs runs and populates the mysql database with some bullshit data;
* Nodejs runs a websocket server that sends a message with some summary stats about mysql whenever x happens
* PHP serves up a dashboard page with some browser based JS, maybe some nice graphs about the mysql stats
* Grid of results of some information that has been extracted as well 

What data to use?

* What's interesting: politics of course!
* Scrape the comments section of the Washington Post by User
* Will need to use TOR to get past WaPo's cookies bullshit!
* Interesting Stats for Users: { IdenticalPosts; Vocabulary; NumberOfPosts; TrollScore }

Full Plan:

* PhantomJS + TOR Scrape of WashingtonPost.com URL's
* Drill down to comment sections, click click click to scrape it all
* Do some analysis and dump those stats into mysql tables

Procrastination Plan:

* Use npm faker to generate fake { urls, users, posts }
* Insert BS data into tables
* Display BS data 

Fun side SIDE project - make a shell script in a separate repo that can easily be executed to populate dotfiles really quickfast


