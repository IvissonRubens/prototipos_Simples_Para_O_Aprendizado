document.addEventListener('DOMContentLoaded', function() {
    const nameMusic = document.getElementById('nameMusic');
    const nameCompositor = document.getElementById('nameCompositor');
    const song = document.getElementById('song');
    const play = document.getElementById('playCircleFill');
    const heart = document.getElementById('heart');
    const cover = document.getElementById('cover');
    const skipForward = document.getElementById('SkipForwardFill');
    const skipBackward = document.getElementById('SkipbackwardFill');
    
    const comatose = {
        nameMusic: 'Comatose',
        artist: 'Skillet',
        file2: 'comatose_capa.jpeg',
        file1: 'Comatose.mp3',
        duration: 248 
    };
    const resistence = {
        nameMusic: 'Resistence',
        artist: 'Skillet',
        file2: 'resistence_capa.jpeg',
        file1: 'Resistance.mp3',
        duration: 400
    };const cupid = {
        nameMusic: 'Cupid',
        artist: 'FIFITY FIFITY',
        file2: 'Cupid_capa.jpeg',
        file1: 'Cupid.mp3',
        duration: 252
    };const thelostsouldownxlostsoul = {
        nameMusic: 'The Lost Soul Down X LostSoul',
        artist: 'NBSPLV',
        file2: 'The_Lost_Soul_Down_X_Lost_Soul_capa.jpeg',
        file1: 'The_Lost_Soul_Down_X_Lost_Soul.mp3',
        duration: 312
    };
    const playlist = [comatose, resistence, cupid, thelostsouldownxlostsoul];
    let index = 0;
    let isPlaying = false;

    function playSong() {
        if (song.paused) {
            song.play();
            play.src = 'imagens/pause-circle.png';
            isPlaying = true;
            updateProgressBar();
        } else {
            song.pause();
            play.src = 'imagens/play-circle.png';
            isPlaying = false;
        }
    }

    function changeBackgroundGradient() {
        let startColor, endColor;

        if (index === 0) {
            startColor = 'rgb(51, 68, 51)';
            endColor = 'rgb(18, 18, 18)';
        }
        
        if (index === 1) {
            startColor = 'rgb(11, 51, 65)';
            endColor = 'rgb(18, 18, 18)';
        }
        if (index === 2) {
            startColor = 'rgb(230, 186, 150)';
            endColor = 'rgb(18, 18, 18)';

        }if (index === 3) {
            startColor = 'rgb(156, 49, 171)';
            endColor = 'rgb(18, 18, 18)';
        }

        document.body.style.background = `linear-gradient(to bottom, ${startColor}, ${endColor})`;
    };
    
    function updateProgressBar() {
        setInterval(function() {
            if (isPlaying) {
                const currentTime = song.currentTime;
                const duration = song.duration;
                const progress = (currentTime / duration) * 100;
                document.getElementById('currentBar').style.width = progress + '%';
            }
        }, 1000);
    }

    song.addEventListener ('ended', function() {
        index = (index + 1) % playlist.length
        initializeSong(play.src = 'imagens/pause-circle.png');
        changeBackgroundGradient();
        song.play();

    });

    play.addEventListener('click', playSong);

    skipForward.addEventListener('click', function() {
        index = (index + 1) % playlist.length;
        initializeSong(play.src = 'imagens/play-circle.png');
        changeBackgroundGradient();
    });

    skipBackward.addEventListener('click', function() {
        index = (index - 1 + playlist.length) % playlist.length;
        initializeSong(play.src = 'imagens/play-circle.png');
        changeBackgroundGradient();

    });

    function toggleHeart() {
        if (heart.src.includes('heart_fill.png')) {
            heart.src = 'imagens/heart.png';
        } else {
            heart.src = 'imagens/heart_fill.png';
        }
    };

    heart.addEventListener('click', function() {
        toggleHeart();
    });


    function initializeSong() {
        cover.src = `imagens/${playlist[index].file2}`;
        song.src = `Sons/${playlist[index].file1}`;
        nameMusic.innerText = playlist[index].nameMusic;
        nameCompositor.innerText = playlist[index].artist;
        updateProgressBar;
    }

    initializeSong();
    changeBackgroundGradient();
});
