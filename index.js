let audio = document.querySelector('#audio')
const vid = document.querySelector('#video')
const playBtn = document.querySelector('#play')
const volumeBtn = document.querySelector('#volume')
const volumeImg = volumeBtn.querySelector('img')
const stopImg = document.createElement('img')
const progressBardiv = document.querySelector(".progress-bar");
const whiteSpace = progressBardiv.querySelector(".whiteRect")
stopImg.src = "volume.png"
let isPlaying = false
let volumeOn = true

playBtn.addEventListener('click', (e) => {
    if (isPlaying === false) {
        audio.play()
        vid.play()
        playBtn.innerHTML = "<img src = 'images/pause.png' alt='stop'>"
        isPlaying = true
        progressBar();
    } else {
        audio.pause()
        vid.pause()
        playBtn.innerHTML = "<img src='images/play.png' alt='play'>"
        isPlaying = false
        console.log(audio.currentTime)

    }
})

volumeBtn.addEventListener('click', (e) => {
    if (volumeOn)  {
        audio.volume = 0
        volumeOn = false
        volumeImg.src = "images/volumeOff.png"
    } else {
        audio.volume = 1
        volumeOn = true
        volumeImg.src = "images/volume.png"
    }
})

function progressBar() {
    let currentTime = Math.round(audio.currentTime / audio.duration * 100)
    console.log(currentTime)
    whiteSpace.style.left = currentTime + "%"
    if (currentTime <= 100){
        let animation = window.requestAnimationFrame(progressBar)
    } else {
        window.cancelAnimationFrame(animation)
    }
}