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
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src= songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
    
    });
    