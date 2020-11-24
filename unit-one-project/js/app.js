// Defining constants //
const elem = document.documentElement;
const textElement = document.getElementById('story-text');
const choiceButtons = document.getElementById('choices-menu');
const hellaviaSprite = document.getElementById("hellaviaNormal");
const audioBackgroundBongos = new Audio('https://www.mboxdrive.com/Ambient%20Bongos.mp3');
const audioBackgroundBarBrawl = new Audio('https://freepd.com/music/Bar%20Brawl.mp3');
const audioMagicalTransition = new Audio('https://www.mboxdrive.com/Magical%20Transition.mp3');
const audioBackgroundSliceOfLife = new Audio('https://www.mboxdrive.com/Slice%20of%20Life.mp3');
const audioBackgroundInventingFlight = new Audio('https://freepd.com/music/Inventing%20Flight.mp3');
const audioMagicalTheme = new Audio('https://www.mboxdrive.com/Magical%20Theme.mp3');
const hellaviaVoice1 = new Audio('https://www.mboxdrive.com/Ha%20I%20am%20the%20best.mp3'); //Ha! I'm the best
const hellaviaVoice2 = new Audio('https://www.mboxdrive.com/okay%20good%20you%20are%20corpo.mp3'); //Okay good corpo and real
const hellaviaVoice3 = new Audio('https://www.mboxdrive.com/okay%20we%20do%20speak%20the%20same%20language.mp3'); //Okay, we do speak the same language
const hellaviaVoice4 = new Audio('https://www.mboxdrive.com/no%20thank%20you%20nu-uh%20that%20won_t%20cut%20it.mp3'); //No thank you? Nu-uh
const hellaviaVoice5 = new Audio('https://www.mboxdrive.com/okay%20you%20are%20the%20proof%20I%20need.mp3'); //You are the proof I need
const hellaviaVoice6 = new Audio('https://www.mboxdrive.com/pick%20one%20question.mp3'); //Pick one question my pet
const hellaviaVoice61 = new Audio('media/audio/Hellavia-Voice/good now follow me.mp3')
const hellaviaVoice7 = new Audio('https://www.mboxdrive.com/hellavia%20your%20local%20supreme%20warlock.mp3'); //Hellavia, your local supreme warlock
const hellaviaVoice8 = new Audio('https://www.mboxdrive.com/your%20moms%20been%20failling%20ever%20since%20you%20were%20born.mp3'); //You mom's been failing ever since you were born
const hellaviaVoice9 = new Audio('https://www.mboxdrive.com/aw%20how%20cute.mp3'); //Aww how cute
const hellaviaVoice10 = new Audio('https://www.mboxdrive.com/nice%20try%20my%20pet.mp3'); //Nice try my pet, I can respect those who attempt to fight against their fate
const hellaviaVoice11 = new Audio('https://www.mboxdrive.com/i%20dont%20appreciate%20being%20stabbed.mp3'); //I don't appreciate being stabbed in the back
const hellaviaVoice12 = new Audio('https://www.mboxdrive.com/now%20now%20you%20can%20get%20to%20speak%20and%20thanks%20for%20protecting.mp3'); //now now ... thanks for trying to protect me
const hellaviaVoice13 = new Audio('https://www.mboxdrive.com/now%20now%20you%20can%20get%20to%20speak%20refrain%20from%20running.mp3'); //now now ... refrain from running again
const hellaviaVoice14 = new Audio('https://www.mboxdrive.com/now%20now%20you%20can%20get%20to%20speak%20backstab%20me%20again%20lick.mp3'); //now now ... is that clear?
const hellaviaVoice15 = new Audio('https://www.mboxdrive.com/good%20sirs%20and%20ladies.mp3'); //Good sirs and ladies
const hellaviaVoice16 = new Audio('https://www.mboxdrive.com/i%20present%20you%20proof%20of%20my%20theories.mp3'); //I present you proof of my theories
const hellaviaVoice17 = new Audio('https://www.mboxdrive.com/ugh%20they%20take%20forever.mp3'); //ugh they take forever, oh you actually care?
const hellaviaVoice18 = new Audio('https://www.mboxdrive.com/i%20get%20it%20i%20get%20it%20you%20are%20afraid.mp3'); //Afraid we'd cook you or something
const hellaviaVoice19 = new Audio('https://www.mboxdrive.com/youll%20likely%20be%20set%20free%20or%20resummoned.mp3'); //you'll likely be set free
const hellaviaVoice20 = new Audio('https://www.mboxdrive.com/ha%20or%20else%20what.mp3'); //ha, or else what?
const hellaviaVoice21 = new Audio('https://www.mboxdrive.com/you%20have%20no%20power%20here%20my%20pet.mp3'); //you have no power here
const hellaviaVoice22 = new Audio('https://www.mboxdrive.com/oh%20boy%20i%20hate%20this%20part.mp3'); //oh boy, I hate this part
const hellaviaVoice23 = new Audio('https://www.mboxdrive.com/yep%20I%20knew%20youd%20see%20how%20good%20i%20am.mp3'); //I knew you'd see how good I am
const hellaviaVoice24 = new Audio('https://www.mboxdrive.com/yessss.mp3'); //yeeessss
const hellaviaVoice25 = new Audio('https://www.mboxdrive.com/summoner%20hellavia.mp3'); //summoner Hellavia, sounds cool doesn't it?
const hellaviaVoice26 = new Audio('https://www.mboxdrive.com/i%20am%20gonna%20summon%20so%20many%20pets.mp3'); //I'm gonna summon so many pets
const hellaviaVoice27 = new Audio('https://www.mboxdrive.com/oh%20of%20course%20gotta%20figure%20out%20what%20to%20do%20with%20you.mp3'); //Oh, of course, gotta figure out what to do with you
const hellaviaVoice28 = new Audio('https://www.mboxdrive.com/thanks%20companion.mp3'); //Thanks companion
const hellaviaVoice29 = new Audio('https://www.mboxdrive.com/good%20choice%20my%20pet.mp3'); //Good choice my pet, partner now I guess?
const hellaviaVoice30 = new Audio('https://www.mboxdrive.com/alright%20lets%20celebrate.mp3'); //Alright! Let's celebrate
const hellaviaVoice31 = new Audio('https://www.mboxdrive.com/oh%20i%20guess%20i%20understand.mp3'); //oh, I guess I understand
const hellaviaVoice32 = new Audio('https://www.mboxdrive.com/youre%20not%20a%20bad%20guy.mp3'); //you're not my type
const hellaviaVoice33 = new Audio('https://www.mboxdrive.com/my%20new%20friend%20from%20another%20world.mp3'); //I can go with that
const hellaviaVoice34 = new Audio('https://www.mboxdrive.com/celebrate%20our%20new%20friendship.mp3'); //we celebrate our friendship today
const hellaviaVoice35 = new Audio('https://www.mboxdrive.com/yeah%20I%20figured%20fine%20by%20me.mp3') //yeah I figured
const hellaviaVoice36 = new Audio('https://www.mboxdrive.com/look%20i%20dont%20blame%20you%20for%20trying.mp3'); // look I don't blame you for trying to get away
const hellaviaVoice37 = new Audio('https://www.mboxdrive.com/okay%20then%20but%20would%20you%20at%20least%20stay%20for%20a%20day.mp3'); //okay then, but would you at least stay for a day
const hellaviaVoice38 = new Audio('https://www.mboxdrive.com/lets%20at%20least%20have%20you%20try%20one%20of%20our%20drinks.mp3'); //let's at least have you try one of our drinks
const hellaviaVoice39 = new Audio('https://www.mboxdrive.com/maybe%20i%20treated%20you%20too%20harshly.mp3'); //maybe I treated you too harshly
const hellaviaVoice40 = new Audio('https://www.mboxdrive.com/well%20goodbye%20thanks%20for%20being%20summoned%20here.mp3'); //well, bye, thanks for
const teleportationAudioEffect = new Audio('http://freesoundeffect.net/sites/default/files/casting-spell-06-sound-effect-29418946.mp3');

// Defining variables //
let state = {};


// Defining functions //
function start() {
    state;
    showTextNode(-1);
};


function showTextNode(textIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textIndex); //Here you assign the text of the proper textNode.id in the textNodes array to the textNode variable in order to display it on the screen
    textElement.innerText = textNode.text; //Here is where you display the text that was passed on from the corresponding id in the textNodes array

    function background() { //This function changes the background in accordance with the current flow of the game text
        if (textNode.id <= 1) {
            document.body.style.backgroundImage = "url('media/images/background/library-background.jpg')";
        } else if (textNode.id >= 8 && textNode.id <= 14) {
            document.body.style.backgroundImage = "url('media/images/background/forest-hut.jpg')";
        } else if (textNode.id >= 15 && textNode.id <= 24) {
            document.body.style.backgroundImage = "url('media/images/background/forest-animated-cascade.gif')";
        } else if (textNode.id === 25) {
            document.body.style.backgroundImage = "media/images/background/city-of-warlocks-entrance.jpg')";
        } else if (textNode.id >= 26 && textNode.id <= 42) {
            document.body.style.backgroundImage = "url('media/images/background/city-of-warlocks.jpg')";
        } else if (textNode.id >= 43 && textNode.id <= 50) {
            document.body.style.backgroundImage = "url('media/images/background/forest-animated-cascade.gif')";
        } else if (textNode.id >= 51 && textNode.id <= 53) {
            document.body.style.backgroundImage = "url('media/images/background/forest-hut.jpg')";
        } else if (textNode.id === 54) {
            document.body.style.backgroundImage = "url('media/images/background/library-background.jpg')";
        }
    }
    background();

    function audioControl() { //This function controls the character voice dialogues as well as the background music transitions
        if (textNode.id === 0) {
            audioBackgroundSliceOfLife.volume = 0.3;
            audioBackgroundSliceOfLife.play();
        } else if (textNode.id === 3) {
            audioBackgroundSliceOfLife.pause();
            audioMagicalTransition.volume = 0.3;
            audioMagicalTransition.play();
        } else if (textNode.id === 8) {
            audioMagicalTransition.pause();
            teleportationAudioEffect.play();
            audioBackgroundBongos.volume = 0.3;
            audioBackgroundBongos.play();
            hellaviaVoice1.play();
        } else if (textNode.id === 11) {
            hellaviaVoice2.play();
        } else if (textNode.id === 12) {
            hellaviaVoice2.pause();
            hellaviaVoice3.play();
            setTimeout(() => {
               hellaviaVoice5.play();
            }, 3900);
        } else if (textNode.id === 13) {
            hellaviaVoice3.pause();
            hellaviaVoice5.pause();
            hellaviaVoice4.play();
            setTimeout(() => {
                hellaviaVoice61.play();
            }, 6000);
        } else if (textNode.id === 14) {
            hellaviaVoice6.play();
        } else if (textNode.id === 15) {
            hellaviaVoice7.play();
        } else if (textNode.id === 16) {
            audioBackgroundBongos.pause();
            audioBackgroundBarBrawl.volume = 0.3;
            audioBackgroundBarBrawl.play();
        } else if (textNode.id === 17) {
            hellaviaVoice8.play();
        } else if (textNode.id === 19) {
            setTimeout(() => {
                hellaviaVoice9.play();
            }, 500);
        } else if (textNode.id === 20) {
            setTimeout(() => {
                hellaviaVoice10.play();
            }, 500);
        } else if (textNode.id === 21) {
            setTimeout(() => {
                hellaviaVoice11.play();
            }, 300);
        } else if (textNode.id === 22) {
            hellaviaVoice12.play();
        } else if (textNode.id === 23) {
            hellaviaVoice13.play();
        } else if (textNode.id === 24) {
            hellaviaVoice14.play();
        } else if (textNode.id === 25) {
            audioBackgroundBarBrawl.pause();
            audioBackgroundInventingFlight.volume = 0.3;
            audioBackgroundInventingFlight.play();
        } else if (textNode.id === 26) {
            hellaviaVoice15.play();
            setTimeout(() => {
                hellaviaVoice16.play();
            }, 3400);
        } else if (textNode.id === 27) {
            audioMagicalTheme.play();
        } else if (textNode.id === 37) {
            hellaviaVoice17.play();
        } else if (textNode.id === 38) {
            hellaviaVoice18.play();
            setTimeout(() => {
                hellaviaVoice19.play();
            }, 5500);
        } else if (textNode.id === 39) {
            hellaviaVoice20.play();
            setTimeout(() => {
                hellaviaVoice21.play();
            }, 1300);
        } else if (textNode.id === 40) {
            hellaviaVoice22.play();
        } else if (textNode.id === 42) {
            hellaviaVoice23.play();
        } else if (textNode.id === 43) {
            hellaviaVoice24.play();
            setTimeout(() => {
                hellaviaVoice25.play();
            }, 1500);
            setTimeout(() => {
                hellaviaVoice26.play();
            }, 4800);
        } else if (textNode.id === 44) {
            hellaviaVoice27.play();
        } else if (textNode.id === 45) {
            hellaviaVoice28.play();
        } else if (textNode.id === 46) {
            hellaviaVoice29.play();
            setTimeout(() => {
                hellaviaVoice30.play();
            }, 4300);
        } else if (textNode.id === 47) {
            hellaviaVoice31.play();
            setTimeout(() => {
                hellaviaVoice37.play();
            }, 4200);
        } else if (textNode.id === 48) {
            hellaviaVoice32.play();
        } else if (textNode.id === 49) {
            hellaviaVoice33.play();
            setTimeout(() => {
                hellaviaVoice34.play();
            }, 3200);
        } else if (textNode.id === 50) {
            hellaviaVoice35.play();
            setTimeout(() => {
                hellaviaVoice38.play();
            }, 2500);
        } else if (textNode.id === 51) {
            hellaviaVoice36.play();
        } else if (textNode.id === 52) {
            hellaviaVoice39.play();
        } else if (textNode.id === 53) {
            hellaviaVoice40.play();
        } else if (textNode.id === 54) {
            audioBackgroundSliceOfLife.volume = 0.3;
            audioBackgroundSliceOfLife.play();
        }
    }
    audioControl();

    function character() { //This function controls which sprite is to be shown at what time
        if (textNode.id === 8) {hellaviaSprite.src = "https://i.imgur.com/D31rZSW.png?1";}
        else if (textNode.id >= 9 && textNode.id <= 10) {hellaviaSprite.src = "https://i.imgur.com/xUZ8qt3.png";}
        else if (textNode.id >= 13 && textNode.id <= 14) {hellaviaSprite.src = "https://i.imgur.com/ufufmZS.png?1";}
        else if (textNode.id === 15) {hellaviaSprite.src = "https://i.imgur.com/wpJXGu9.png?1";}
        else if (textNode.id === 16) {hellaviaSprite.src = "https://i.imgur.com/xUZ8qt3.png";}
        else if (textNode.id === 17) {hellaviaSprite.src = "https://i.imgur.com/wpJXGu9.png?1";}
        else if (textNode.id === 18) {hellaviaSprite.src = "https://i.imgur.com/xUZ8qt3.png";}
        else if (textNode.id === 22) {hellaviaSprite.src = "https://i.imgur.com/ufufmZS.png?1";}
        else if (textNode.id === 24) {hellaviaSprite.src = "https://i.imgur.com/wpJXGu9.png?1";}
        else if (textNode.id === 25) {hellaviaSprite.src = "https://i.imgur.com/xUZ8qt3.png";}
        else if (textNode.id === 32) {hellaviaSprite.src = "https://i.imgur.com/RYQAOi3.png?1";}
        else if (textNode.id === 33) {hellaviaSprite.src = "https://i.imgur.com/xUZ8qt3.png";}
        else if (textNode.id === 36) {hellaviaSprite.src = "https://i.imgur.com/RYQAOi3.png?1";}
        else if (textNode.id === 37) {hellaviaSprite.src = "https://i.imgur.com/ufufmZS.png?1";}
        else if (textNode.id === 38) {hellaviaSprite.src = "https://i.imgur.com/xUZ8qt3.png";}
        else if (textNode.id === 39) {hellaviaSprite.src = "https://i.imgur.com/wpJXGu9.png?1";}
        else if (textNode.id === 40) {hellaviaSprite.src = "https://i.imgur.com/RYQAOi3.png?1";}
        else if (textNode.id === 41) {hellaviaSprite.src = "https://i.imgur.com/wpJXGu9.png?1";}
        else if (textNode.id === 42) {hellaviaSprite.src = "https://i.imgur.com/xUZ8qt3.png";}
        else if (textNode.id === 43) {hellaviaSprite.src = "https://i.imgur.com/D31rZSW.png?1";}
        else if (textNode.id === 44) {hellaviaSprite.src = "https://i.imgur.com/xUZ8qt3.png";}
        else if (textNode.id === 46) {hellaviaSprite.src = "https://i.imgur.com/D31rZSW.png?1";}
        else if (textNode.id === 47) {hellaviaSprite.src = "https://i.imgur.com/RYQAOi3.png?1"}
        else if (textNode.id === 48) {hellaviaSprite.src = "https://i.imgur.com/xUZ8qt3.png";}
        else if (textNode.id === 51) {hellaviaSprite.src = "https://i.imgur.com/RYQAOi3.png?1";}
        else if (textNode.id === 53) {hellaviaSprite.src = "https://i.imgur.com/xUZ8qt3.png";}

    }
    character();

    while (choiceButtons.firstChild) { //This loop is to remove buttons that will not be available during certain portions of the game due to a varying number of selectable choices
        choiceButtons.removeChild(choiceButtons.firstChild);
    };
    textNode.choices.forEach(choices => {
        if (showOption(choices)) {
            const button = document.createElement('button');
            button.innerText = choices.text; // Displaying corresponding choice text into each option button
            // button.classList.add('button');
            button.addEventListener('click', () => selectChoice(choices)); //This is what allows the game to determine which option is clicked and redirect the game accordingly

            // console.log(button.classList, 'button')

            choiceButtons.appendChild(button); // If there are available choices to be clicked, append only the necessary number of buttons
        };
    });
};


function showOption(choice) {
    return choice.requiredState == null || choice.requiredState(state);
};


function selectChoice(choices) {
    const nextTextNodeId = choices.nextText;
    if (nextTextNodeId < -2) {
        return start();
    };
    state = Object.assign(state, choices.setState);
    showTextNode(nextTextNodeId);
};

function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
}
function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
}


start();
