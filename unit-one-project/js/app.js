// Defining constants //
const textElement = document.getElementById('story-text');
const choiceButtons = document.getElementById('choices-menu');

const img = document.getElementById("hellaviaNormal");
const img2 = document.getElementById("hellaviaHappy");
const audioBackgroundBongos = new Audio('https://www.mboxdrive.com/Ambient%20Bongos.mp3');
const audioBackgroundSliceOfLife = new Audio('https://www.mboxdrive.com/Slice%20of%20Life.mp3');
let hellaviaVoice1 = new Audio('https://www.mboxdrive.com/Ha%20I%20am%20the%20best.mp3');
let hellaviaVoice2 = new Audio('https://www.mboxdrive.com/okay%20good%20you%20are%20corpo.mp3');

// Defining variables //
let state = {
    hInterest: 0,
    // nInterest: 0,
    // sInterest: 0
};


// Defining functions //
function start() {
    state;
    audioBackgroundSliceOfLife.play();
    showTextNode(7);
};


function showTextNode(textIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textIndex);
    console.log(textNode.id, 'od')
    function background() {
        if (textNode.id <= 1) {
            document.body.style.backgroundImage = "url('https://zonacarlos.files.wordpress.com/2016/02/the_library_of_babel_by_owen_c-d3gvei3.jpg')";
        } else if (textNode.id >= 8 && textNode.id <= 13) {
            document.body.style.backgroundImage = "url('https://i.imgur.com/uWeax7p.jpg')";
        } else if (textNode.id >= 14 && textNode.id <= 24) {
            document.body.style.backgroundImage = "url('https://coolwallpapers.me/picsup/416886-landscape-wallpaper-free-desktop-wallpapers.gif')";
        } else if (textNode.id === 25) {
            document.body.style.backgroundImage = "url('https://i.imgur.com/NaT3XWh.jpg')";
        }
    }
    background();

    function voiceoverDialogues() {
        if (textNode.id === 8) {
            audioBackgroundBongos.volume = 0.5;
            hellaviaVoice1.play();
        } else if (textNode.id === 11) {
            audioBackgroundBongos.volume = 0.5;
            hellaviaVoice2.play();
        }
    }
    voiceoverDialogues();

    function character() {
        if (textNode.id >= 3 && textNode.id <= 7) {
           audioBackgroundSliceOfLife.pause();
           audioBackgroundBongos.play();
        }
        if (textNode.id === 8) {
            img2.src = "https://i.imgur.com/D31rZSW.png?1";
            img.style.display = "none";
            // audioBackgroundBongos.pause();
        }
        if (textNode.id >= 9 && textNode.id <= 10) {
            hellaviaVoice1.pause();
            img2.style.display = "none";
            img.src = "https://i.imgur.com/xUZ8qt3.png";
        }
    }
    character();
    console.log(textIndex, 'textIndex')

    textElement.innerText = textNode.text;
    while (choiceButtons.firstChild) {
        choiceButtons.removeChild(choiceButtons.firstChild);
    };
    textNode.choices.forEach(choices => {
        if (showOption(choices)) {
            const button = document.createElement('button');
            button.innerText = choices.text;
            button.classList.add('button');
            button.classList = addEventListener('click', () => selectChoice(choices));

            // console.log(button.classList, 'button')

            choiceButtons.appendChild(button);
        };
    });
};


function showOption(choice) {
    return choice.requiredState == null || choice.requiredState(state);
};


function selectChoice(choices) {
    // state.hInterest += choices.interest
    console.log(choices.interest, "choices")
    console.log(state.hInterest, "interest")

    const nextTextNodeId = choices.nextText;
    if (nextTextNodeId < -2) {
        return start();
    };
    state = Object.assign(state, choices.interest);
    showTextNode(nextTextNodeId);
};


start();
