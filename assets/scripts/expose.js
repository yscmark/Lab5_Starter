// expose.js

window.addEventListener("DOMContentLoaded", init);

function init() {
    // TODO
    const hornSelect = document.getElementById("horn-select");
    const image = document.querySelector("img");
    const audio = document.querySelector(".hidden");
    hornSelect.addEventListener("change", () => {
        image.src = `assets/images/${hornSelect.value}.svg`;
        audio.src = `assets/audio/${hornSelect.value}.mp3`;
    });

    const volumeSlider = document.querySelector("#volume-controls > input");
    const icon = document.querySelector("#volume-controls > img");
    volumeSlider.addEventListener("input", () => {
        const volume = volumeSlider.value;
        let volumeLevel = 0;
        if (volume == 0) {
            volumeLevel = 0;
        } else if (volume < 33) {
            volumeLevel = 1;
        } else if (volume < 67) {
            volumeLevel = 2;
        } else {
            volumeLevel = 3;
        }
        icon.src = `assets/icons/volume-level-${volumeLevel}.svg`;
        audio.volume = volume / 100;
    });

    const playButton = document.querySelector("button");
    const jsConfetti = new JSConfetti();
    playButton.addEventListener("click", () => {
        audio.play();
        if (hornSelect.value == "party-horn") {
            jsConfetti.addConfetti();
        }
    });
}
