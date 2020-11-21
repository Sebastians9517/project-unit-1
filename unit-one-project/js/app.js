// Defining constants //
const textElement = document.getElementById('story-text');
const choiceButtons = document.getElementById('choices-menu');
// let hVoice1 = new Audio('https://clyp.it/5vdasdy2');


//     document.body.style.background = 'url('www.maria-laach.de/assets/components/phpthumbof/cache/bibliothek_buecher.9ab133464b0fb3f97633425a63672a54.jpg')
//   }

// Defining variables //
let state = {
    hInterest: 0,
    // nInterest: 0,
    // sInterest: 0
};


// Defining functions //
function start() {
    state;
    showTextNode(0);
};


function showTextNode(textIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textIndex);
    console.log(textNode.id, 'od')
    function background() {
        if (textNode.id <= 1) {
            document.body.style.backgroundImage = "url('https://d.wattpad.com/story_parts/716187488/images/159818a90e7a3f42526614520461.jpg')";
        } else if (textNode.id >= 2 && textNode.id <= 7) {
            document.body.style.backgroundImage = "url('https://halfpricebooks.com/bby-giveaway/images/HPB_Background_01.jpg')";
        } else if (textNode.id >= 8 && textNode.id <= 13) {
            document.body.style.backgroundImage = "url('https://i.imgur.com/uWeax7p.jpg')";
        } else if (textNode.id >= 14 && textNode.id <= 24) {
            document.body.style.backgroundImage = "url('https://coolwallpapers.me/picsup/416886-landscape-wallpaper-free-desktop-wallpapers.gif')";
        }
    }
    background();
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
    state.hInterest += choices.interest
    // state.nInterest += choices.interest;
    // state.sInterest += choices.interest;
    console.log(choices.interest, "choices")
    console.log(state.hInterest, "interest")

    const nextTextNodeId = choices.nextText;
    if (nextTextNodeId < 0) {
        return start();
    };
    state = Object.assign(state, choices.interest);
    showTextNode(nextTextNodeId);
};


start();
