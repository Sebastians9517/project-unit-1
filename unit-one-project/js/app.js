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
        text: "Upon further inspection and a quick flip through the pages you realize that, strangely enough, the book has no author displayed or where it was published, not even a publication date. And to make things even more odd almost all of the pages seem to have faded out with time and only three of them remain somewhat legible and brigthly colored. They seem to be short stories and you decide to read one out of curiosity.",
        choices: [
            // FUNCTION HERE THAT CHANGES THE SCREEN DISPLAYING A CHARACTER SELECTION MENU WHILE DISPLAYING THE NAME AND A BRIEF DESCRIPTION BELOW, ALONG WITH THE OPTION TO SELECT THE DESIRED CHARACTER //
            {
                text: "Read the story of Hellavia, The Sorceress.",
                nextText: 4
            },
            {
                text: "Read the legend of Nihliana, The Ancient.",
                nextText: 5
            },
            {
                text: "Read the tale of Shaileen, The Protector.",
                nextText: 6
            }
        ]
    },
    {
        id: 4,
        text: "You turn the page to the story of Hellavia",
        choices: [
            {
                text: "Start reading.",
                nextText: 7
            }
        ]
    },
    {
        id: 7,
        text: "Hellavia was finally ready with her spell, magic candles lit on the floor tangential to the summoning circle, oil extracted from an ancient and powerful dragon burning with a purple flame in the middle of the circle. She begins her incantation...",
        choices: [
            {
                text: "While you read you start to feel increasingly dizzy...",
                nextText: 8
            }
        ]
    },
    {
        id: 8,
        text: "???: \n 'Ha! I am the best! Uhh, wait, are you alive or dead or... -she pokes you slightly with her staff- oh, it breaths, cool!'",
        choices: [
            {
                text: "Uhg...",
                nextText: 9
            }
        ]
    },
    {
        id: 9,
        text: "As you open your eyes a strange character is standing above you. Dark coloured robes, mostly black and purple, a twisted wooden staff in one hand and on the top of it an ashen coloured skull with two small horns protruding from it. You noticed her skin tone is ashen as well, and her eyes are a frightening dark crimson.",
        choices: [
            {
                text: "*Sit up*",
                nextText: 10
            }
        ]
    },
    {
        id: 10,
        text: "Upon sitting up trying to make sense of what just happened, you also realize the figure above you is rather short. You almost reached her height when standing straight. Suddenly the individual pokes your head again with the staff a few times.",
        choices: [
            {
                text: "*You let out a slight groan*",
                nextText: 11
            }
        ]
    },
    {
        id: 11,
        text: "???: \n 'Okay good, you are corpo and real, hehe... Can you understand me?'",
        choices: [
            {
                text: "... Yes.",
                nextText: 12
            },
            {
                text: "Who are you...? Where am I?",
                nextText: 12
            },
            {
                text: "Do not poke me again.",
                nextText: 12
            }
        ]
    },
    {
        id: 12,
        text: "???: 'Okay, we do speak the same language' -she ignores whatever you said.- 'Yes, you are the proof I need. Get up, you are coming with me.'",
        choices: [
            {
                text: "Uhh, no. But thank you.",
                nextText: 13
            },
            {
                text: "What? Go where? What is this place?",
                nextText: 14
            }
        ]
    },
    {
        id: 13,
        text: "???: \n 'No but thank you? Nu-uh, that won't cut it. I said GET UP! -you immediately feel an imperative need of jump and stand straight- 'Good, I like obedient pets. Now follow me, don't make me command you again.",
        choices: [
            {
                text: "Who are you? What do you want?"
            }
        ]
    },
    {
        id: 14,
        text: "Pick only one question my pet, I hate too many at the same time. It only shows a lack of confidence in one's path. But sure, this is the thing: you are "
    }
]


// Defining variables //
let gameState = {};


// Defining functions //
function gameStart() {
    gameState = {};
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
    return choice.requiredState == null || choice.requiredState(gameState);
};


function selectChoice(choice) {
    const nextTextNodeId = choice.nextText;
    if (nextTextNodeId <= 0) {
        return gameStart();
    };
    gameState = Object.assign(gameState, choice.setgameState);
    showTextNode(nextTextNodeId);
};


gameStart();
