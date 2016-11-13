// Copyright (c) 2016 DLH. See LICENSE.txt for the MIT license.

document.addEventListener("loadedmetadata", function(event) {
    if (document.getElementsByTagName("ytd-channel-video-player-renderer").length > 0) {
        event.target.pause();
    }
}, true);
