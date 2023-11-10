

function background() {
    const music = document.getElementById("music");
    music.volume = 0.5;
}

document.addEventListener("DOMContentLoaded", background);

var playbutton = document.querySelector('.playButtonDiv');
playbutton.addEventListener('click', () => {
    window.location.href = 'instructions.html';
});

