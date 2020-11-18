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
        text: "As you are browsing on the bottom shelf, a strange looking book falls right next to you, barely missing your head. With a relieved sigh, you were about to put the thick book back in its place when you read the title: 'The Enchanted Book'. ",
        choices: [
            {
                text: "Have a peek in the book.",
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: "Upon further inspection and a quick flip through the pages you realize that, strangely enough, the book has no author displayed or where it was published, not even a publication date. And to make things even more odd instead of chapters there are depictions of different characters, dozens of them. However almost all of the pages seem to have faded out with time and only three of them remain somewhat legible and brigthly colored. They seem to be short stories and decide to read one out of curiosity.",
        choices: [ // FUNCTION HERE THAT CHANGES THE SCREEN DISPLAYING A CHARACTER SELECTION MENU WHILE DISPLAYING THE NAME AND OPTIONS BELOW //
            {
                text: "Read the story of Hellavia, The Sorceress"
            }
        ]
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
