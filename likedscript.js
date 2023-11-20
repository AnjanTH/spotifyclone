let playbtns = document.querySelectorAll(".fa-play");
let songs = [
   {
      audio: './songs/Shape of you.m4a'
   },
   {
      audio: './songs/Middle.m4a'
   }
   ,
   {
      audio: './songs/ugramm.mp3',
   }
   ,
   {
      audio: './songs/Rolex.mp3'
   }
   ,
   {
      audio: './songs/Naaguva.mp3'
   },
   {
      audio: './songs/Calm down.mp3'
   },
   {
      audio: './songs/The Hymm of Dharma.mp3'
   },
   {
      audio: './songs/Heeriye.mp3'
   }
   ,
   {
      audio: './songs/Billie Eilish Khalid lovely.mp3'
   },
   {
      audio: './songs/Dheera .mp3'
   }
];


let hearts = document.querySelectorAll(".fa-heart");
hearts.forEach((heart) => {
   if (heart.style.color = 'chartreuse') {
      heart.onclick = function (e) {
         heart.style.color = 'white';
         alert("Removed from Liked Songs");
      

      }
   }

});



let music = new Audio();
function toggles() {
    let songitems=document.querySelectorAll(".song-items");
   
    songitems.forEach((song)=>{
        
        song.style.display='none'
     })
    
}