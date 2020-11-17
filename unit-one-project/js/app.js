// Defining constants //
const textElement = document.getElementById('story-text');
const choiceButtons = document.getElementById('choices-menu');
const textNodes = [
    {
        id: 1,
        text: "You are scavenging through the freshly arrived collection of materials at your local bookstore. The place is closing soon, so you quickly pick up your favourites, plus a few new ones.",
        choices: [
            {
                text: "Continue looking around.",
                nextText: 2
            }
        ]
    },
    {
        id: 2,
    }
]


// Defining variables //
let gameState = {};


// Defining functions //
function gameStart() {
    gameState = {};
    showTextNode(1)
}


function showText(textIndex) {

}


function selectChoice(choice) {

}
