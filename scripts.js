let bar = document.querySelector("#bars");
let cross = document.querySelector("#cross");
//  localStorage.clear()
bar.onclick = () => {
   let x = document.querySelector(".lists");

   x.style.display = 'flex';
   bar.style.display = 'none'
   cross.style.display = 'block'


};
cross.onclick = () => {
   let x = document.querySelector(".lists");
   x.style.display = 'none';
   bar.style.display = 'block'
   cross.style.display = 'none'

};









let progress = document.querySelector("#progress");
let song = document.querySelector("#song");
let control = document.querySelector("#ctrl");

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
let im=document.querySelector(".album-cover");
let mainname=document.querySelector("#main");
let img = ['MIDDLE.jpg', 'shape.jpg', 'ugram.jpeg', 'Rolex.jpeg', 'Naguva.jpeg', 'calmdown.jpeg', 'Dharma.jpeg', 'heeriye.jpeg', 'lovely.jpeg', 'kgf.jpeg']
let images = document.querySelectorAll("img");
let h3=document.querySelectorAll(".h");
let music = new Audio();
let songnames=['Middle of the night','Shape of you','Ugramm Veeram','Rolex intro','Naaguva nayana','Calm down',
'The Hymm of Dharma','Heeriye heeriye','Billie Eilish Khalid lovely','Dheera Dheera',]

let hearts = document.querySelectorAll(".fa-heart");
hearts.forEach((heart) => {
   if (heart.style.color = 'white') {
      heart.onclick = function (e) {
         heart.style.color = 'chartreuse';
         alert("Added to Liked Songs");
         let i=0;
         let index=0;
         for(i=0;i<heart.length;i++ ){
            
            localStorage.setItem("songs",JSON.stringify(songs[i]));
         }
       
         
        
          
         


      }
   }

});

playbtns.forEach((btn) => {
   btn.onclick = (e) => {
    
    
    
      



      let index = e.target.id;

      console.log(index);
      images.forEach((image) = () => {

         im.style.backgroundImage = `url(./Images/${img[index-1]})`
      })



      let sg = songs[index - 1];

    
      h3.forEach((h) => {
         mainname.innerHTML = `${songnames[index-1]}`;

       
      })

      songs.forEach((songu)=>{

         songu.src=`${[index-1].audio}` 
         
      
     
     
      progress.value = 0;
      // song.currentTime = 0;
      song.src = sg.audio;
     
       
         
      })
  
   


      // music.play();
      // control.classList.remove("fa-pause");
      // control.classList.add("fa-play");
      
      if (btn.classList.contains("fa-pause")) {
         song.pause();
         btn.classList.remove("fa-pause");
         btn.classList.add("fa-play");
         control.onclick = () => {
            progress.style.background = 'white';
            if (control.classList.contains("fa-pause")) {
               song.pause();
               control.classList.remove("fa-pause");
              control.classList.add("fa-play");
           }
            else {
              song.play();
              
               control.classList.add("fa-pause");
               control.classList.remove("fa-play");
           }
         }
       


      }
      else {
         song.play();
         btn.classList.add("fa-pause");
         btn.classList.remove("fa-play");
         control.classList.remove("fa-play");
         control.classList.add("fa-pause");

      }



   }


})

song.autoplay = false
song.onloadedmetadata = () => {
   progress.max = song.duration;
   progress.value = song.currentTime;
}
 control.onclick = () => {
    progress.style.background = 'white';
    if (control.classList.contains("fa-pause")) {
       song.pause();
       control.classList.remove("fa-pause");
      control.classList.add("fa-play");
   }
    else {
      song.play();
       control.classList.add("fa-pause");
       control.classList.remove("fa-play");
   }
 }
 setInterval(() => {
    progress.value = song.currentTime;

}, 500)

 progress.onchange = () => {
    song.play();
    song.currentTime = progress.value;
    control.classList.add("fa-pause");
    control.classList.remove("fa-play");
 }


///liked song















