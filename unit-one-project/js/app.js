// Defining constants //
const textElement = document.getElementById('story-text');
const choiceButtons = document.getElementById('choices-menu');
const img = document.getElementById("hellaviaNormal"); //Hellavia normal sprite
const img2 = document.getElementById("hellaviaHappy"); //Hellava happy sprite
const audioBackgroundBongos = new Audio('https://www.mboxdrive.com/Ambient%20Bongos.mp3');
const audioBackgroundBarBrawl = new Audio('https://freepd.com/music/Bar%20Brawl.mp3');
const audioMagicalTransition = new Audio('https://www.mboxdrive.com/Magical%20Transition.mp3');
const audioBackgroundSliceOfLife = new Audio('https://www.mboxdrive.com/Slice%20of%20Life.mp3');
const hellaviaVoice1 = new Audio('https://www.mboxdrive.com/Ha%20I%20am%20the%20best.mp3'); //Ha! I'm the best
const hellaviaVoice2 = new Audio('https://www.mboxdrive.com/okay%20good%20you%20are%20corpo.mp3'); //Okay good
const hellaviaVoice3 = new Audio('https://www.mboxdrive.com/okay%20we%20do%20speak%20the%20same%20language.mp3'); //Okay, we do speak the same language
const hellaviaVoice4 = new Audio('https://www.mboxdrive.com/no%20thank%20you%20nu-uh%20that%20won_t%20cut%20it.mp3'); //No thank you? Nu-uh
const hellaviaVoice5 = new Audio('https://www.mboxdrive.com/okay%20you%20are%20the%20proof%20I%20need.mp3'); //You are the proof I need
const hellaviaVoice6 = new Audio('https://www.mboxdrive.com/pick%20one%20question.mp3'); //Pick one question my pet
const hellaviaVoice7 = new Audio('https://www.mboxdrive.com/hellavia%20your%20local%20supreme%20warlock.mp3'); //Hellavia, your local supreme warlock



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
    showTextNode(0);
};


function showTextNode(textIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textIndex); //Here you assign the text of the proper textNode.id in the textNodes array to the textNode variable in order to display it on the screen
    console.log(textNode.id, 'od')
    function background() { //This function changes the background in accordance with the current flow of the game text
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

    function voiceoverDialogues() { //This function controls the character voice dialogues as well as the background music
        if (textNode.id === 8) {
            audioMagicalTransition.volume = 0.5;
            hellaviaVoice1.play();
        } else if (textNode.id === 11) {
            audioBackgroundBongos.volume = 0.5;
            hellaviaVoice2.play();
        } else if (textNode.id === 18) {
            audioBackgroundBarBrawl.volume = 0.7;
            audioBackgroundBarBrawl.play();
        }
    }
    voiceoverDialogues();

    function character() { //This function controls which sprite is to be shown at what time
        if (textNode.id >= 3 && textNode.id <= 7) {
           audioBackgroundSliceOfLife.pause();
           audioMagicalTransition.play();
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

    textElement.innerText = textNode.text; //Here is where you display the text that was passed on from the corresponding id in the textNodes array
    while (choiceButtons.firstChild) { //This loop is to remove buttons that will not be available during certain portions of the game due to a varying number of selectable choices
        choiceButtons.removeChild(choiceButtons.firstChild);
    };
    textNode.choices.forEach(choices => {
        if (showOption(choices)) {
            const button = document.createElement('button');
            button.innerText = choices.text; // Displaying corresponding choice text into each option button
            button.classList.add('button');
            button.classList = addEventListener('click', () => selectChoice(choices)); //This is what allows the game to determine which option is clicked and redirect the game accordingly

            // console.log(button.classList, 'button')

            choiceButtons.appendChild(button); // If there are available choices to be clicked, append only the necessary number of buttons
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


// start();
