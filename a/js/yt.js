'use strict';

var player;
var playerFrame;

function getVideoProperties() {
  var height;
  var width;
  var top;
  var left;

  var windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  var windowAspectRatio = windowWidth/windowHeight;
  var videoAspectRatio  = 16/9;

  if (windowAspectRatio < videoAspectRatio) {
    height = windowHeight;
    width  = windowHeight * videoAspectRatio;
    top    = 0;
    left   = (windowWidth - width) / 2;
  } else {
    height = windowWidth / videoAspectRatio;
    width  = windowWidth;
    top    = (windowHeight - height) / 2;
    left   = 0;
  }

  return {
    'height': height,
    'width':  width,
    'top':    top,
    'left':   left
  };
}

function repositionVideo() {
  var playerAttrs = getVideoProperties();

  playerFrame.style.height = playerAttrs.height + 'px';
  playerFrame.style.width  = playerAttrs.width  + 'px';
  playerFrame.style.top    = playerAttrs.top    + 'px';
  playerFrame.style.left   = playerAttrs.left   + 'px';
}

function onPlayerReady(event) {
  event.target.setVolume(100);
  event.target.playVideo();

  playerFrame.className += ' show';
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    event.target.playVideo();
  }
}

var player = document.getElementById('player');
var onYouTubeIframeAPIReady = function() {
  player = new YT.Player('player', {
    videoId: player.getAttribute('data-vid'),
    playerVars: {
      controls: 0,
      showinfo: 0
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });

  playerFrame = player.getIframe();

  window.onresize = repositionVideo;

  repositionVideo();
};
