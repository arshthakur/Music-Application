const music = new Audio('audio/1.mp3');
// music.play();

const songs = [
    {
        id:1,
        songName : `On My Way<br>
        <div class="subtitle">Alan Walker</div>`,
         poster: "img/1.jpg"
    },
    {
        id:2,
        songName : `TU_Aa-Dilbara<br>
        <div class="subtitle">Jubin Nautiyal</div>`,
         poster: "img/Tu-Aa-Dilbara.jpg"
    },
    {
        id:3,
        songName : `Tu-Meri-Aashiqui<br>
        <div class="subtitle">Kumar Sanu</div>`,
         poster: "img/Tu-Meri-Aashiqui.jpg"
    },
    {
        id:4,
        songName : `Khushi jab bhi teri<br>
        <div class="subtitle">Jubin Nautiyal</div>`,
         poster: "img/Khushi-Jab-Bhi-Teri.jpg"
    },
    {
        id:5,
        songName : `Main nikla gaddi leke<br>
        <div class="subtitle">Udit Narayan</div>`,
         poster: "img/gaddar.jpg"
    },
    {
        id:6,
        songName : `jhangar<br>
        <div class="subtitle">Karan Aujla</div>`,
         poster: "img/jhangar.jpg"
    },
    {
        id:7,
        songName : `8 Parche<br>
        <div class="subtitle">Gur Sidhu</div>`,
         poster: "img/Atrangi.jpg"
    },
    {
        id:8,
        songName : `Ram-Siya-Ram<br>
        <div class="subtitle">Ajay-Atul, Parampara Thakur</div>`,
         poster: "img/Ram-Siya-Ram.jpg"
    },
    {
        id:9,
        songName : `kesariya<br>
        <div class="subtitle">Arijit Singh</div>`,
         poster: "img/Kesariya.jpg"
    },
    {
        id:10,
        songName : `Labon Pe Naam<br>
        <div class="subtitle">Arijit Singh</div>`,
         poster: "img/radhe-shyam.jpg"
    },
    {
        id:11,
        songName : `Zinda Banda<br>
        <div class="subtitle">Anirudh Ravichander</div>`,
         poster: "img/Zinda-Banda.jpg"
    },
    {
        id:12,
        songName : `With You<br>
        <div class="subtitle">AP Dhillon</div>`,
         poster: "img/OMG-2.jpg"
    },
    {
        id:13,
        songName : `Lahore<br>
        <div class="subtitle">Guru Randhava</div>`,
         poster: "img/lahore.jpg"
    },
    {
        id:14,
        songName : `Gili Si Subah<br>
        <div class="subtitle">Papon</div>`,
         poster: "img/Gili-Si-Subah.jpg"
    },
    {
        id:15,
        songName : `End<br>
        <div class="subtitle">Amrit maan</div>`,
         poster: "img/end.jpg"
    },
    {
        id:16,
        songName : `O-Bedaedeya<br>
        <div class="subtitle">Pritam, Arjit Singh</div>`,
         poster: "img/O-Bedardeya.jpg"
    },
    {
        id:17,
        songName : `Baari<br>
        <div class="subtitle">Bilal Saeed</div>`,
         poster: "img/baari.jpg"
    },
    {
        id:18,
        songName : `Daru Badnam<br>
        <div class="subtitle">Param Singh</div>`,
         poster: "img/daru.jpg"
    },
    {
        id:19,
        songName : `Naseeb se<br>
        <div class="subtitle">Payal Dev & Vishal Mishra</div>`,
         poster: "img/naseeb-se.jpg"
    },
    {
        id:20,
        songName : `Softly<br>
        <div class="subtitle">Karan Aujla</div>`,
         poster: "img/softly.jpg"
    },
    {
        id:21,
        songName : `Rubbicon Drill<br>
        <div class="subtitle">Gurlez Akhtar</div>`,
         poster: "img/rubbicon.jpg"
    },
    {
        id:22,
        songName : `High Rated Gabru<br>
        <div class="subtitle">Guru Randhawa</div>`,
         poster: "img/high.jpg"
    },
    {
        id:23,
        songName : `Raat Di Gedi<br>
        <div class="subtitle">Diljit Dosanjh</div>`,
         poster: "img/raat.jpg"
    },
    {
        id:24,
        songName : `Daru DE Drum<br>
        <div class="subtitle">Ammy Virk</div>`,
         poster: "img/drum.jpg"
    }

]


Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
e.getElementsByTagName('img')[0].src= songs[i].poster;
e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;

});

let masterPlay = document.getElementById('masterPlay');

masterPlay.addEventListener('click', ()=> {
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

const makeAllPlay = () =>{
    Array.from(document.getElementsByClassName('playlistplay')).forEach((el)=>{
        el.classList.add('bi-play-circle');
        el.classList.remove('bi-pause-circle');
    })
}

// const makeAllBackground = () =>{
//     Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
//         el.style.background ='rgb(105,105,105.0)';
//     })
// }

let index=0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playlistplay')).forEach((e) =>{
   e.addEventListener('click', (el)=>{
    let index = el.target.id;
    // console.log(index);
    music.src = `audio/${index}.mp3`;
    // poster_master_play.src = `img/${index}.jpg`;
     music.play();
     masterPlay.classList.remove('bi-play-fill');
     masterPlay.classList.add('bi-pause-fill');

     let songTitles = songs.filter((els) => {
        return els.id == index;
     })

     songTitles.forEach(elss => {
        let { songName, poster } = elss;
        title.innerHTML = songName;
        poster_master_play.src = poster;

     })
    //  makeAllBackground();
    //  Array.from(document.getElementsByClassName('songItem')).style.background = "rgb(105,105,105.1)";
     makeAllPlay();
     el.target.classList.remove('bi-play-circle');
     el.target.classList.add('bi-pause-circle');
     wave.classList.add('active1');
   });
})


let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollRight += 330;
}
);
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
}
)

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artist_bx = document.getElementsByClassName('Artist_bx')[0];

pop_art_right.addEventListener('click', () => {
    Artist_bx.scrollRight += 330;
}
);
pop_art_left.addEventListener('click', () => {
    Artist_bx.scrollLeft -= 330;
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => { 
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    // console.log('music_curr');
    
    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if(sec2 < 10){
        sec2 =`0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);

    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
})


    let vol_icon = document.getElementById('vol_icon');
    let vol = document.getElementsByID('vol');
    let vol_bar = document.getElementsByClassName('vol_bar')[0];
    let vol_dot= document.getElementById('vol_dot');

    vol.addEventListener('change', () => {
        if(vol.value == 0){
            vol_icon.classList.remove('bi-volume-up-fill');
            vol_icon.classList.remove('bi-volume-down');
            vol_icon.classList.add('bi-volume-off');
        }
        if(vol.value > 0){
            vol_icon.classList.remove('bi-volume-up-fill');
            vol_icon.classList.add('bi-volume-down');
            vol_icon.classList.remove('bi-volume-off');
        }
        if(vol.value > 50){
            vol_icon.classList.add('bi-volume-up-fill');
            vol_icon.classList.remove('bi-volume-down');
            vol_icon.classList.remove('bi-volume-off');
        }
        let vol_a = vol.value;
        vol_bar.style.width = `${vol_a}%`;
        vol_dot.style.left = `${vol_a}%`;
        music.volume = vol_a / 100;
})


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', () => {
    index -= 1;

    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    // poster_master_play.src = `img/${index}.jpg`;
     music.play();
     masterPlay.classList.remove('bi-play-fill');
     masterPlay.classList.add('bi-pause-fill');

     let songTitles = songs.filter((els) => {
        return els.id == index;
     })

     songTitles.forEach(elss => {
        let { songName, poster } = elss;
        title.innerHTML = songName;
        poster_master_play.src = poster;

     })
     makeAllBackground();
     Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105,105,105.1)";
     makeAllPlay();
     el.target.classList.remove('bi-play-circle');
     el.target.classList.add('bi-pause-circle');
     wave.classList.add('active1');
})

next.addEventListener('click', () => {
    index ++;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
    // poster_master_play.src = `img/${index}.jpg`;
     music.play();
     masterPlay.classList.remove('bi-play-fill');
     masterPlay.classList.add('bi-pause-fill');

     let songTitles = songs.filter((els) => {
        return els.id == index;
     })

     songTitles.forEach(elss => {
        let { songName, poster } = elss;
        title.innerHTML = songName;
        poster_master_play.src = poster;

     })
    //  makeAllBackground();
    //  Array.from(document.getElementsByClassName('songItem')).style.background = "rgb(105,105,105.1)";
     makeAllPlay();
     el.target.classList.remove('bi-play-circle');
     el.target.classList.add('bi-pause-circle');
     wave.classList.add('active1');
   });


   const body = document.body;
const box = document.querySelectorAll(".audio")
const btn = document.querySelector(".btn");
const navItems = document.querySelectorAll(".nav-iteam")
   btn.addEventListener("click", ()=>{
    body.style.background = "radial-gradient(788px at 0.7% 3.4%, rgb(164, 231, 192) 0%, rgb(255, 255, 255) 90%)";
    for(i=0; i<=box.length; i++){
        let presentBox = box[i]
        presentBox.style.backgroundColor = "#FFF"
        presentBox.style.color = "black"
        presentBox.style.boxShadow = ".1px .1px 14px 0.1px #a19f9f"
        btn.innerHTML = "light"
    }
})