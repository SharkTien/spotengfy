let currentMusic = 0;
repeat = !!false
shuffle = !!false
typing = !!false

window.onbeforeunload = function() {
    return "Stop playing your music and refresh this page?";
};

const shuffleSongs = songs.slice();

for (let i = shuffleSongs.length - 1; i >= 0; i--) {
    const randIndex = Math.floor(Math.random() * (i + 1));
    const temp = shuffleSongs[i];
    shuffleSongs[i] = shuffleSongs[randIndex];
    shuffleSongs[randIndex] = temp;
}


const music = document.querySelector('#audio');

const seekBar = document.querySelector('.seek-bar');
const songName = document.querySelector('.music-name');
const artistName = document.querySelector('.artist-name');
const disk = document.querySelector('.disk');
const currentTime = document.querySelector('.current-time');
const musicDuration = document.querySelector('.song-duration');
const playBtn = document.querySelector('.play-btn');
const playBtn2 = document.querySelector('.play-btn2');
const forwardBtn = document.querySelector('.forward-btn');
const backwardBtn = document.querySelector('.backward-btn');
const repeatBtn = document.querySelector('.repeat-btn');
const shuffleBtn = document.querySelector('.shuffle-btn');
const homeBtn = document.querySelector('.Home');
const homeBtn2 = document.querySelector('.Home2')
const Library = document.querySelector('.Library');
const Library2 = document.querySelector('.Library2');
const Discover = document.querySelector('.Discover');
// const Discover2 = document.querySelector('.Discover2');
const Search2 = document.querySelector('.Search2');
const MusicTab = document.querySelector('.container');
const volumeMuteBtn = document.querySelector('.volume-btn-mute');
const volumeBtn = document.querySelector('.volume-btn');
const volumeBar = document.querySelector('.volume-bar');
const musicBox = document.querySelector('.box');
const search_result = document.querySelector('.search-result');
const banner = document.querySelector('.index-banner');
const title = document.querySelector('title');
const link = document.createElement('link');
const input = document.querySelector('.search-bar');
const input2 = document.querySelector('.search-bar2');
const albumBox = document.querySelector('.box2')
const extentButton = document.querySelector('.extent-button');
const extentButton2 = document.querySelector('.extent-button2');
const scrollAlbumArtists = document.querySelector('.scrollAlbumArtists');
const scrollAlbumCustom = document.querySelector('.scrollAlbumCustom')
const backButton = document.querySelector('.back-button');
const backButton2 = document.querySelector('.back-button2');
const albumArtists = document.querySelector('.album.artists');
const artistsBoxx = document.querySelector('.artists-boxx');
const playAlbumBtn = document.querySelector('.play-album');
const playAlbumBtn2 = document.querySelector('.play-album2');
const albumCustom = document.querySelector('.album.custom');
const layerCreateAlbum = document.querySelector('.layer-create-album');
const closeAlbumGeneratorBtn = document.querySelector('.create-album-box .title .close');
const createBtn = document.querySelector('.create-album-box .body .create');
const albumname = document.getElementById('albumname');
const searchbox = document.querySelector('.search2')
const miniplayer = document.querySelector('.mini-player');
const miniplayerbox = document.querySelector('.box-mini-player');
const creatorBoxx = document.querySelector('.creator-boxx');
const coverartist = document.querySelector('.cover-artist');
const Statusbox = document.querySelector('.status');

const spacebarkey = 32;
const leftKey = 37;
const rightKey = 39;
const tabKey = 9;

layerCreateAlbum.style.display = "none";
volumeMuteBtn.style.display = "none";
musicBox.style.display = "none";
albumBox.style.display = "none";
backButton.style.display = 'none';
backButton2.style.display = 'none';
artistsBoxx.style.display = 'none';
creatorBoxx.style.display = 'none';
searchbox.style.display = 'none';
miniplayerbox.style.display = 'none';
albumSongs = [];
albumSongsShuffle = [];


function handlePress(event) {
    if (event.keyCode === spacebarkey && !typing) {
        playBtn.click();
    }

    if (event.keyCode === leftKey) {
        seekBar.value -= 2;
        music.currentTime = seekBar.value;
    }
    if (event.keyCode === rightKey) {
        seekBar.value += 2
        music.currentTime += seekBar.value/60;
        seekBar.value = music.currentTime;
    }
    if (event.keyCode === tabKey) {
        event.preventDefault();
    }
}

document.addEventListener("keydown",handlePress);

input.addEventListener('focus', () => {
    typing = true
})

input2.addEventListener('focus', () => {
    typing = true
})

input.addEventListener('blur', () => {
    typing = false
})

input2.addEventListener('blur', () => {
    typing = false
})

input.addEventListener('input', () => {
    input2.value = '';
    banner.style.display = "none";
    musicBox.style.display = "flex";
    albumBox.style.display = "none";
    creatorBoxx.style.display = "none";
    artistsBoxx.style.display = "none";
    search(removeToneMark(input.value.toLowerCase()));
})

input2.addEventListener('input', () => {
    input.value = '';
    search(removeToneMark(input2.value.toLowerCase()));
})


homeBtn.addEventListener('click', () => {
    musicBox.style.display = "none";
    banner.style.display = "flex";
    albumBox.style.display = "none";
    artistsBoxx.style.display = "none";
    MusicTab.style.display = "flex";
    creatorBoxx.style.display = 'none';
    coverartist.style.display = 'none';
    homeBtn.blur()
})

homeBtn2.addEventListener('click', () => {
    musicBox.style.display = "none";
    banner.style.display = "flex";
    searchbox.style.display = "none"
    albumBox.style.display = "none";
    artistsBoxx.style.display = "none";
    MusicTab.style.display = "flex"
    miniplayerbox.style.display = 'none';
    creatorBoxx.style.display = 'none';
    coverartist.style.display = 'flex';
    window.scrollTo(0,0)
})



Library.addEventListener('click', () => {
    albumtemp = [];
    creatorBoxx.style.display = 'none';
    musicBox.style.display = "none";
    banner.style.display = "none";
    coverartist.style.display = 'none';
    albumBox.style.display = "";
    artistsBoxx.scrollTo(0,0);
    artistsBoxx.style.display = "none";
    MusicTab.style.display = "flex";
    Library.blur()
})

Library2.addEventListener('click', () => {
    albumtemp = [];
    musicBox.style.display = "none";
    searchbox.style.display = "none";
    banner.style.display = "none";
    albumBox.style.display = "";
    artistsBoxx.scrollTo(0,0);
    artistsBoxx.style.display = "none";
    MusicTab.style.display = "none";
    coverartist.style.display = 'flex';
    miniplayerbox.style.display = 'flex';
    creatorBoxx.style.display = 'none';
    window.scrollTo(0,0)
})

Discover.addEventListener('click', () => {
    albumtemp = [];
    musicBox.style.display = "flex";
    banner.style.display = "none";
    albumBox.style.display = "none";
    artistsBoxx.style.display = "none";
    MusicTab.style.display = "flex";
    creatorBoxx.style.display = 'none';
    input.value = '';
    input2.value = '';
    search('');
    Discover.blur()
})

// Discover2.addEventListener('click', () => {
//     albumtemp = [];
//     searchbox.style.display = "none";
//     musicBox.style.display = "flex";
//     banner.style.display = "none";
//     albumBox.style.display = "none";
//     artistsBoxx.style.display = "none";
//     input.value = '';
//     input2.value = '';
//     search('')
// })

Search2.addEventListener('click', () => {
    searchbox.style.removeProperty('display');
    musicBox.style.removeProperty('display');
    banner.style.display = "none";
    albumBox.style.display = "none";
    creatorBoxx.style.display = 'none';
    artistsBoxx.style.display = "none";
    MusicTab.style.display = "none";
    miniplayerbox.style.display = 'flex';
    input.value = '';
    input2.value = '';
    search('');
    window.scrollTo(0,0)
})

miniplayer.addEventListener('click', () => {
    banner.style.display = 'none';
    searchbox.style.display = 'none';
    musicBox.style.display = 'none';
    creatorBoxx.style.display = 'none';
    albumBox.style.display = 'none';
    artistsBoxx.style.display = 'none';
    MusicTab.style.display = 'flex';
    miniplayerbox.style.display = 'flex';
    window.scrollTo(0,0);
    miniplayer.blur();
})


music.addEventListener('pause', () => {
    if (!playBtn.classList.contains('pause') && !music.ended) {
        playBtn.click();
    }
})

music.addEventListener('play', () => {
    if (playBtn.classList.contains('pause')) {
        playBtn.click();
    }
})

volumeBtn.addEventListener('click', () => {
    volumeBtn.style.display = "none";
    volumeMuteBtn.style.display = "block";
    volume = music.volume;
    volumeBar.value = 0;
    music.volume = 0;
})


volumeMuteBtn.addEventListener('click', () => {
    volumeBtn.style.display = "block";
    volumeMuteBtn.style.display = "none";
    music.volume = volume;
    volumeBar.value = volume * 100;
})

playBtn.addEventListener('click', () => {
    if (playBtn.className.includes('pause')) {
        music.play();
    } else {
        music.pause();
    }
    playBtn.classList.toggle('pause');
    playBtn2.classList.toggle('pause');
    disk.classList.toggle('play');
    playBtn.blur()
})

playBtn2.addEventListener('click', () => {
    if (playBtn2.className.includes('pause')) {
        music.play();
    } else {
        music.pause();
    }
    playBtn.classList.toggle('pause');
    playBtn2.classList.toggle('pause');
    disk.classList.toggle('play');
    playBtn2.blur()
})

forwardBtn.addEventListener('click', () => {
    if (albumSongs.length > 0) {
        if (currentMusic == ((shuffle) ? albumSongsShuffle[albumSongsShuffle.length - 1] : albumSongs[albumSongs.length - 1]))  {
            currentMusic = (shuffle) ? albumSongsShuffle[0] : albumSongs[0];
        } else {
            currentMusic = (shuffle) ? albumSongsShuffle[albumSongsShuffle.indexOf(currentMusic) + 1] : albumSongs[albumSongs.indexOf(currentMusic) + 1]
        }
    } else {
        if (currentMusic >= songs.length - 1) {
            currentMusic = 0;
        } else {
            currentMusic ++;
        }
    }

    setMusic(currentMusic);
    if (disk.classList.contains('play')) {
        music.play()
    }
    forwardBtn.blur()
})


backwardBtn.addEventListener('click', () => {
    if (albumSongs.length > 0) {
        if (currentMusic == ((shuffle) ? albumSongsShuffle[0] : albumSongs[0]))  {
            currentMusic = (shuffle) ? albumSongsShuffle[albumSongsShuffle.length - 1] : albumSongs[albumSongs.length - 1];
        } else {
            currentMusic = (shuffle) ? albumSongsShuffle[albumSongsShuffle.indexOf(currentMusic) - 1] : albumSongs[albumSongs.indexOf(currentMusic) - 1]
        }} else {
        if (currentMusic <= 0) {
            currentMusic = songs.length - 1;
        } else {
            currentMusic --;
        }
    }
    setMusic(currentMusic);
    if (disk.classList.contains('play')) {
        music.play()
    }
    backwardBtn.blur()
})

repeatBtn.addEventListener('click', () => {
    if (repeat) {
        repeat = !!false;
        repeatBtn.setAttribute('title','Enable repeat album');
    } else {
        repeat = !!true;
        repeatBtn.setAttribute('title', 'Disable repeat album');
    }
    repeatBtn.classList.toggle('active');
    repeatBtn.blur()
})



shuffleBtn.addEventListener('click', () => {
    if (shuffle) {
        shuffle = !!false;
        shuffleBtn.setAttribute('title','Enable shuffle');
    } else {
        shuffle = !!true;
        shuffleBtn.setAttribute('title','Disable shuffle');
    }
    shuffleBtn.classList.toggle('active');
    shuffleBtn.blur()
})

createBtn.addEventListener('click', () => {
    custom_albums.push({albumName: albumname.value, discription: '', create: '', items: []});
    albumname.value = '';
    layerCreateAlbum.style.display = "none";

    albumListcustom.innerHTML = '';
    getAlbum()
})

closeAlbumGeneratorBtn.addEventListener('click', () => {
    layerCreateAlbum.style.display = "none";
})


// SETUP MUSIC

const formatTime = (time) => {
    let min = Math.floor(time / 60);
    if (min < 10) {
        min = `0${min}`;
    }
    let sec = Math.floor(time % 60);
    if (sec < 10) {
        sec = `0${sec}`;
    }
    return `${min} : ${sec}`;
}

const setMusic = (i) => {  
    if (albumSongs.includes(i)) {
    } else {
        Statusbox.innerHTML = '';
        albumSongs = [];
        albumSongsShuffle = []
    }


    seekBar.value = 0;
    if (albumSongs.length > 0) {
        song = songs[i]
    } else {
        song = (shuffle) ? shuffleSongs[i] : songs[i]
    }

    currentMusic = i;
    music.src = song.path;
    songName.innerHTML = song.name;
    artistName.innerHTML = song.artist;
    disk.style.backgroundImage = `url('${song.cover}')`;
    currentTime.innerHTML = '00:00';
    setTimeout (() => {
        seekBar.max = music.duration;
        musicDuration.innerHTML = formatTime(music.duration);
    }, 150);
    title.textContent = 'Spotengfy | ' + song.name + ' - ' + song.artist;
    
    link.rel = 'shortcut icon';
    link.href = song.cover;
    document.head.appendChild(link);
    miniplayer.innerHTML = `
        <img id='image' src=${song.cover}>
        <div>
        <h1>${song.name}</h1>
        <h1 class="mini-artist">${song.artist}</h1>
        </div>
    `
}


setMusic(0);
music.volume = 1;
volumeBar.value = 100;

setInterval(() => {
    seekBar.value = music.currentTime;
    currentTime.innerHTML = formatTime(music.currentTime);
    if (music.currentTime === music.duration) {
        if (albumSongs.length > 0) {
            currentMusic_finish = (shuffle) ? albumSongsShuffle[albumSongsShuffle.length - 1] : albumSongs[albumSongs.length - 1]
        } else {
            currentMusic_finish = (shuffle) ? shuffleSongs[songs.length - 1] : songs[songs.length - 1]
        }
        if ((!repeat) && (currentMusic == currentMusic_finish)) {
            currentMusic = (albumSongs.length > 0) ? ((shuffle) ? albumSongsShuffle[0] : albumSongs[0]) : 0;
            playBtn.classList.toggle('pause');
            playBtn2.classList.toggle('pause');
            disk.classList.toggle('play');
            setMusic(currentMusic);
        } else {
        forwardBtn.click();
        }
    }
}, 500)

seekBar.addEventListener('input', () => {
    music.currentTime = seekBar.value;
    seekBar.blur()
})

volumeBar.addEventListener('input', () => {
    music.volume = volumeBar.value/100;
    volumeMuteBtn.style.display = "none";
    volumeBtn.style.display = "block";
    volumeBar.blur()
})

const playMusic = () => {
    music.play();
    playBtn.classList.remove('pause');
    playBtn2.classList.remove('pause');
    disk.classList.add('play');
}

const activeMusic = (i) => {
    if (shuffle) {
        shuffleBtn.click();
        setMusic(i);
        playMusic();
        shuffleBtn.click()
    } else {
        setMusic(i);
        playMusic()
    }
}


const addSongItem = (number, i, songList_id, IdItem) => {
    songList = document.getElementById(songList_id);
    li = document.createElement("li");
    li.classList.add(IdItem);
    li.innerHTML = `
    <button class="run" onclick="activeMusic(${i})"><svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg></button>
    <span>${number}</span>
    <div>
    <img src=${songs[i].cover}>
    </div>
    <h5>
        ${songs[i].name}
        <div class="subtitle">${songs[i].artist}</div>
    </h5>
    `;
    songList.appendChild(li);
    };  

num = 0;
for (let i = 0; i < songs.length; i++) {
    num += 1;
    addSongItem(num, i, "song-list", "songItem");
}
const div = document.createElement("div");
div.classList.add('gap');
div.style.height = "120px";
songList.appendChild(div);

path_cover_artists = 'img/artists/'


// Generate playlist of specific artist albums
const albumList = document.getElementById("artists-suggested")
const albumListcustom = document.getElementById("created-album");

const artistsBox = (artist_name) => {
    albumtemp = [];
    artistsBoxx.style.display = 'block';
    albumBox.style.display = "none";

    // Banner artist
    const name_artist = document.querySelector('.name-artist');

    coverartist.innerHTML = `<img src='img/artists/${artist_name}.jpg'>`

    name_artist.innerHTML = artist_name;
    artistsBoxx.style.backgroundImage = `url(img/background/${artist_name.replaceAll(' ','_')}.jpg)`;
    
    // Playlist generating
    songListArtist = document.getElementById('song-list-artists');
    songListArtist.innerHTML = '';
    
    num = 0;
    for (let i = 0; i < songs.length; i++) {
        if (songs[i].artist.includes(artist_name)) {
            num += 1;
            addSongItem(num, i, 'song-list-artists','songItemAlbum');
            albumtemp.push(i)
        }
    }
    
    const div = document.createElement("div");
    div.classList.add('gap');
    div.style.height = "120px";
    songList.appendChild(div)
        
    playAlbumBtn.addEventListener('click', () => {
        albumSongsShuffle = albumtemp.slice();
        for (let i = albumSongsShuffle.length - 1; i >= 0; i--) {
            const randIndex = Math.floor(Math.random() * (i + 1));
            const temp = albumSongsShuffle[i];
            albumSongsShuffle[i] = albumSongsShuffle[randIndex];
            albumSongsShuffle[randIndex] = temp;
        }
        
        albumSongs = albumtemp;
        Statusbox.innerHTML = `Album: ${artist_name}`;
        activeMusic(albumSongs[0]);
        playAlbumBtn.blur()
    })    
}
    
const addAlbumItem = (artist_name) => {
    const li = document.createElement("button");
    li.classList.add("albumItem");
    li.innerHTML = `
        <img src='img/artists/${artist_name}.jpg'>
        <h1>${artist_name}</h1>
        <div class="subtitle">Artist</div>
    `;

    li.addEventListener('click', () => artistsBox(artist_name));
    albumList.appendChild(li);
    }
                
artists = [];

for (let i = 0; i < songs.length; i++) {
    artists.push(songs[i].artist);
}

// Generate list of artists

p = [];
notAvailableArtists = ['Clever','Trí Dũng','Fishy','Groovie','Lil Uzi Vert','Cam','Jenevieve','MinhLai','LeeHi','Anh Phan','Negav','sped up nightcore', 'ARIZONATEARS','bbygirl','DWELLS','Wxrdie','PAR SG','Vũ Thanh Vân','Saabirose','SIVAN','Nguyên','Seth','New$oulZ','THDC','Han Kim','Lã Thắng','Dfoxie37', 'Myhai',
'VSOUL', 'MFREE', 'TUYEN VO','Sweet Liquor','GREY D','B Ray','Phùng Khánh Linh','Minh Lý','Wikin 25 Táo','Sáo','MASEW','Young H',"Sol'Bass",'Nah','Chú 13','Khói','Bảo Uyên','Jay Kem','Khoi','Việt Anh','Monstar','Mahidu','NIEE', 'D.BLue','Phúc Du','$eadreak','W/N','DatG',
'Erik','Linh','Nâu','Orange','Young Crizzbe','Hoàng Dũng','Đạt G','HAST', 'Dab','RPT Orijinn', 'kis','DucMinh','Ronboogz', 'sy','KEI','Galaxyy', 'Kim Nguyen Martian' ]

for (artist of artists) {
    item = artist;
    split = item.split(', ');
    for (items of split) {
        if (!p.includes(items) && !notAvailableArtists.includes(items)) {
        p.push(items)
        }
    }
}
function arrange(array) {
    array.sort((a,b) => a.localeCompare(b));
    return array
}

artists = arrange(p);

// Generate Artists' albums

for (artist of artists) {
    addAlbumItem(artist);
}
// Generate custom albums

const getAlbum = () => {
    
    const addAlbumcustomItem = (i) => {
        const li = document.createElement("button");
        li.classList.add("albumcustomItem");
        li.innerHTML = `
            <img src="${i.cover}">
            <h1>${i.albumName}</h1>
            <div class="subtitle">${i.creator}</div>
        `;
        li.addEventListener('click', () => customAlbumBox(i.id, i.albumName, i.creator, i.cover, i.description, i.items));
        albumListcustom.appendChild(li);
    }
        
    const add_createAlbumBtn = () => {
        const createAlbumBtn = document.createElement("button");
        createAlbumBtn.classList.add('create-album');
        createAlbumBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#b9b9b9}</style><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
                <h1>Create Album</h1>
                <div class="subtitle">coming soon</div>
            `;
        // li.addEventListener('click', () => artistsBox(i.albumName));
        albumListcustom.appendChild(createAlbumBtn);
    
        // createAlbumBtn.addEventListener('click', () => {
        //     layerCreateAlbum.style.display = "flex";  
        // })
    }    
    add_createAlbumBtn();
    for (customAlbum of custom_albums) {
        addAlbumcustomItem(customAlbum)
    }    
}

const customAlbumBox = (ID,albumname, creator, cover, description, items) => {    
    albumtemp = [];
    creatorBoxx.style.display = 'block';
    albumBox.style.display = "none";
    creatorBoxx.scrollTo(0,0);
    
    // Banner creator's album
    const coverimg = document.querySelector('.cover-img');
    const coverinfor = document.querySelector('.cover-infor');
    coverimg.innerHTML = `<img src='${cover}'>`;

    coverinfor.innerHTML = `
        <h1>${albumname}</h1>   
        <p>${description}</p>
        <h3>${creator}  •  ${items.length} songs</h3>
    `;
    // Playlist generating
    songListCreator = document.getElementById('song-list-creator');
    songListCreator.innerHTML = '';
    
    num = 0;
    for (let i = 0; i < songs.length; i++) {
        if (items.includes(songs[i].id)) {
            num += 1;
            addSongItem(num, i, 'song-list-creator','songItemAlbum');
            albumtemp.push(i)
        }
    }

    const div = document.createElement("div");
    div.classList.add('gap');
    div.style.height = "120px";
    songList.appendChild(div)
    
    playAlbumBtn2.addEventListener('click', () => {
        albumSongsShuffle = albumtemp.slice();
        for (let i = albumSongsShuffle.length - 1; i >= 0; i--) {
            const randIndex = Math.floor(Math.random() * (i + 1));
            const temp = albumSongsShuffle[i];
            albumSongsShuffle[i] = albumSongsShuffle[randIndex];
            albumSongsShuffle[randIndex] = temp;
        }
        Statusbox.innerHTML = `Album: ${albumname} - ${creator}`
        albumSongs = albumtemp;
        activeMusic(albumSongs[0]);
        playAlbumBtn2.blur()
    })
}


getAlbum();

// Search items
const search = (a) => {
    songList = document.getElementById('song-list');
    songItems = songList.querySelectorAll(".songItem");
    songList.innerHTML = `
    <li class = "checkpoint">
        <button class = "run"></button>
        <span>#</span>
        <img>
        <h5>Title<div class="subtitle"></div></h5>
    </li> 
    `;

    for (let i = 0; i < songs.length; i++) {
        songname = removeToneMark(songs[i].name.toLowerCase());
        artistname = removeToneMark(songs[i].artist.toLowerCase());
        if (songname.includes(a) || artistname.includes(a)) {
            li = document.createElement("li");
            li.classList.add('songItem');
            li.innerHTML = `
            <button class="run" onclick="activeMusic(${i})"><svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg></button>
            <span>${i+1}</span>
            <img src=${songs[i].cover}>
            <h5>
                ${songs[i].name}
                <div class="subtitle">${songs[i].artist}</div>
            </h5>
            `;
        
        songList.appendChild(li);
        }
    }

    const div = document.createElement("div");
    div.classList.add('gap');
    div.style.height = "120px";
    songList.appendChild(div);

    if (songList.children.length <= 2) {
        nf = document.createElement("div");
        nf.classList.add('notfound');
        nf.innerHTML = 'No results found for your music'
        songList.appendChild(nf)
    }
}


function removeToneMark(str) {
  // remove accents
  var from = "àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ",
      to   = "aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy";
  for (var i=0, l=from.length ; i < l ; i++) {
    str = str.replace(RegExp(from[i], "gi"), to[i]);
  }

  str = str.toLowerCase().trim()

  return str;
}

// Show more Button

extentButton.addEventListener('click', () => {
    extentButton.style.display = 'none';
    backButton.style.display = 'block';
    scrollAlbumArtists.classList.add('extent');
    albumCustom.style.display = "none";
    albumArtists.classList.add('extent');
})

backButton.addEventListener('click', () => {
    backButton.style.display = 'none';
    extentButton.style.display = 'block';
    scrollAlbumArtists.classList.toggle('extent');
    albumCustom.style.removeProperty('display');
    albumArtists.classList.toggle('extent');
    scrollAlbumArtists.scrollTo(0,0)
})

extentButton2.addEventListener('click', () => {
    extentButton2.style.display = 'none';
    backButton2.style.display = 'block';
    scrollAlbumCustom.classList.add('extent');
    albumArtists.style.display = "none";
    albumCustom.classList.add('extent');
})

backButton2.addEventListener('click', () => {
    backButton2.style.display = 'none';
    extentButton2.style.display = 'block';
    scrollAlbumCustom.classList.toggle('extent');
    albumArtists.style.removeProperty('display');
    albumCustom.classList.toggle('extent');
    scrollAlbumCustom.scrollTo(0,0)
})
