import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const storageKey = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const data = localStorage.getItem(storageKey);
const player = new Player(iframe, {
  quality: '1080p',
});

function currentTime(event) {
  localStorage.setItem(storageKey, event.seconds);
}

player.on('timeupdate', throttle(currentTime, 1001));
player.setCurrentTime(data);
