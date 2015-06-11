// Copyright (c) 2015 DLH. See LICENSE.txt for the MIT license.

function disableAutoplay() {
    var channelVideo = document.querySelector("#upsell-video");
    if (channelVideo) {
        var config = JSON.parse(channelVideo.getAttribute("data-swf-config"));
        config.args.autoplay = "0";
        channelVideo.setAttribute("data-swf-config", JSON.stringify(config));
    }
}

disableAutoplay();

// YouTube uses the history API (history.pushState, ...), but we can not use the
// popstate event. It is only called when a browser action is initiated, e.g.
// clicking the back button.
//
// One solution for this problem is to create a shim for pushState/replaceState,
// but that is hacky. Instead, we can simply track changes to the main content
// area.
new MutationObserver(disableAutoplay).observe(document.querySelector("#content"), {childList: true});
