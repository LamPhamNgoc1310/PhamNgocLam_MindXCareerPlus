
// change the state of the play button
const playButton = document.getElementById('play-button-clickable');
let toggle = true;


playButton.onclick = function () {
    if (toggle) {
        playButton.style.backgroundImage = "url(./assets/songs/media-pause.png)";
        console.log('changed back');
        music.play();

    }
    else {
        
        playButton.style.backgroundImage = "url(./assets/songs/media-play.png)";
        console.log('changed');
        music.pause();
    }
    toggle = !toggle;
}

// music play

let currentMusic = 0;

const music = document.querySelector('#audio');
const seekBar = document.querySelector('.seek-bar');
const songName = document.querySelector('.song-name');
const artistName = document.querySelector('.song-artist');
const bgImg = document.querySelector('.song-img');
const currentTime = document.querySelector('.current-time');
const songDuration = document.querySelector('.song-time');
const playBtn = document.querySelector('.play-btn');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

// play the music

const setMusic = (i) => {
    seekBar.value = 0;
    let song = songs[i];
    currentMusic = i;
    music.src = song.path;

    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    bgImg.style.backgroundImage = `url('${song.cover}')`;

    currentTime.innerHTML = '00:00';
    setTimeout(() => {
        seekBar.max = music.duration;
        songDuration.innerHTML = formatTime(music.duration);
        console.log(music.duration);
    }, 300);
}
setMusic(0);

// formating the time

const formatTime = (time) => {
    let min = Math.floor(time/60);
    if(min < 10) {
        min = `0${min}`;
    }
    let sec = Math.floor(time%60);
    if (sec < 10) {
        sec = `0${sec}`;
    }
    return `${min} : ${sec}`;
}
// running seekbar 

setInterval(() => {
    seekBar.value = music.currentTime;
    currentTime.innerHTML = formatTime(music.currentTime);
}, 500);

seekBar.addEventListener('change', () => {
    music.currentTime = seekBar.value;
})

// next song
nextButton.addEventListener('click', () => {
    if (currentMusic > songs.length - 1){
        currentMusic = 0;
    }
    else {
        currentMusic++;
    }
    setMusic(currentMusic);
    playButton.click();
    toggle = true;
})

// previous song

prevButton.addEventListener('click', () => {
    if (currentMusic <= 0){
        currentMusic = songs.length -1 ;
    }
    else {
        currentMusic--;
    }
    setMusic(currentMusic);
    playButton.click();
    toggle = true;
})