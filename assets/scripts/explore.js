// explore.js

window.addEventListener("DOMContentLoaded", init);

function init() {
    // TODO
    const synth = window.speechSynthesis;
    let voices = [];
    synth.addEventListener("voiceschanged", () => {
        voices = synth.getVoices();
        for (const voice of voices) {
            const option = document.createElement("option");
            option.textContent = `${voice.name} (${voice.lang})`;
            if (voice.default) {
                option.textContent += " - DEFAULT";
            }

            option.setAttribute("data-lang", voice.lang);
            option.setAttribute("data-name", voice.name);
            voiceSelect.appendChild(option);
        }
    });

    const voiceSelect = document.getElementById("voice-select");
    const talkButton = document.querySelector("button");
    const textArea = document.getElementById("text-to-speak");
    talkButton.addEventListener("click", () => {
        const utter = new SpeechSynthesisUtterance(textArea.value);
        const selectedOption =
            voiceSelect.options[voiceSelect.selectedIndex].getAttribute(
                "data-name"
            );
        for (const voice of voices) {
            if (voice.name === selectedOption) {
                utter.voice = voice;
            }
        }

        const image = document.querySelector("img");
        utter.onstart = () => {
            image.src = "assets/images/smiling-open.png";
        };
        utter.onend = () => {
            image.src = "assets/images/smiling.png";
        };
        synth.speak(utter);
    });
}
