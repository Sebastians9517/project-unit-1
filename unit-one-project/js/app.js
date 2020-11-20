// Defining constants //
const textElement = document.getElementById('story-text');
const choiceButtons = document.getElementById('choices-menu');


// Defining variables //
let state = {
    hInterest: 0,
    nInterest: 0,
    sInterest: 0
};


// Defining functions //
function start() {
    state;
    showTextNode(1);
};


function showTextNode(textIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textIndex);
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
            choiceButtons.appendChild(button);
        };
    });
};


function showOption(choice) {
    return choice.requiredState == null || choice.requiredState(state);
};


function selectChoice(choices) {
  console.log(state.hInterest)
    state.hInterest += choices.interest;
    state.nInterest += choices.interest;
    state.sInterest += choices.interest;

    console.log(state.hInterest)

    const nextTextNodeId = choices.nextText;
    if (nextTextNodeId <= 0) {
        return start();
    };
    state = Object.assign(state, choices.interest);
    showTextNode(nextTextNodeId);
};


start();
