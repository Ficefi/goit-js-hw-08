import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const storageKey = 'videoplayer-current-time';
localStorage.setItem(storageKey, 0);
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe, {
  quality: '1080p',
});

function currentTime(event) {
  localStorage.setItem(storageKey, event.seconds);
}

player.on('timeupdate', throttle(currentTime, 1001));
player.setCurrentTime(localStorage.getItem(storageKey));
