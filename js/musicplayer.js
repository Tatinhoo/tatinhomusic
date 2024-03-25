let musica = document.getElementById("musica")
let progressBar = document.getElementById("progress")
let playBtn = document.getElementById("playBtn")
let iconBtn = document.getElementById("iconBtnPlay")
let tocando = false;
let volumeBar = document.getElementById("volumeBar")

let currArtist = document.getElementById("currArtist")
let currMusic = document.getElementById("currMusic")
let currCoverArt = document.getElementById("currCoverArt")

musica.addEventListener('loadedmetadata', function() {
    progressBar.max = musica.duration;
    volumeBar.max = 100 
});

musica.addEventListener('timeupdate', function() {
    if(tocando == true){
        musica.volume = volumeBar.value;
        progressBar.value = musica.currentTime;
    }
});

function mudarProgressbar(){
    tocando = false
    musica.pause()
    tocando = true;
    iconBtn.className = "gg-play-pause";
    musica.currentTime = progressBar.value;
    musica.play()
}
function mudarVolumebar() {
    musica.volume = volumeBar.value / 100;
}

volumeBar.addEventListener('input', mudarVolumebar);


function trocarMusica(art,song,coverart,track){
    currMusic.innerHTML = song
    currArtist.innerHTML = art
    currCoverArt.src = "img/"+ coverart + ".png"
    musica.src = "audio/"+ track + ".mp3"
    musica.play()
    tocando = true;
    iconBtn.className = "gg-play-pause"

}
function playsong(){
    if(tocando == false){
        musica.play()
        iconBtn.className = "gg-play-pause"
        tocando = true
    }else{
        iconBtn.className = "gg-play-button"
        musica.pause()
        tocando = false
    }
}