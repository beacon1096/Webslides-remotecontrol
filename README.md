# Webslides-remotecontrol
A websocket based solution for remote presentation

Due to the coronavirus issues we had to take our lessons at home. Solutions like QQ Group Screen Sharing provides poor image quality especially when playing a video, and it cannot record the sound of the video, so either the video will have no sound or the sound has to be recorded through a microphone, leading to poor audio quality.
 
So we chose Nodeppt as our presentation tool, but it's remote controll function was removed and can only operator on a single machine, leading to a rough experience when sharing the presentation with up to 50 people.

So I made this. 

## Install

First You'll need a server to run "server.js", which simply broadcast the progress of the presentation to all connected websocket clients. You can change your port or do whatever you want in it. You also should install the only dependency "ws".

You should embed "remote.js" as a plugin to your Webslides instance like this, according to the documentation of Webslides:

``` javascript
    WebSlides.registerPlugin("Remote",Remote);
    //...before initializing Webslides instance
    const ws = new WebSlides({
        loop: false,
        showIndex: !isViewer
    })
```

Look at your index.html to get some ideas. And you should change the Websocket server address in "remote.js" to match your server's.

## How to use

Now the presenter should visit the webslide page with a parameter "?mode=speaker", which allows the plugin to broadcast your current slide index when event "ws:slide-change" is triggered.

Viewers should visit without parameters, and the plugin will listen to the broadcast and navigate to the slide where the speaker is. The plugin will not block visitor from navigating back and forth in the presentation, though.

## Code quality

The code quality is absolutly poor, but I hope maybe this will be of help to those who has just decided to use Webslides and Nodeppt but wanted a smooth experience when presenting to a distributed group of viewers, and had no idea where to begin with while having to finished their presentation document in a short time, just like I had to take only 2 days using fragment time building this before our presentation.
At least it works well, especially when we show a video to our viewers, way better than our previously used screen-capturing approach.
