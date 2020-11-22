
const textNodes =  [
    {
        id: 0, //Prologue
        text: "Being a programmer with a reading addiction sometimes can be troublesome. \n After a long week of not leaving your apartment in order to meet a project deadline (otherwise your boss, The Manliest Shahzad Stinson, will get mad at you) you decide to visit your local library to unwind and release some of your stress by simple relaxing with a good book and a warm cup of coffee.",
        choices: [
            {
                text: "Start.",
                interest: 0,
                nextText: 1,
            }
        ],
    },
    {
        id: 1,
        text: "You are scavenging through the freshly arrived collection of materials, the attendant lets you know the place is closing soon, so you quickly pick up your favourites, plus a few new ones to devour on your upcoming days off.",
        choices: [
            {
                text: "Continue looking around.",
                interest: 0,
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
                interest: 0,
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: "Upon further inspection and a quick flip through the pages you realize that, strangely enough, the book has no author displayed or where it was published, not even a publication date. And to make things even more odd almost all of the pages seem to have faded out with time and only three of them remain somewhat legible and brigthly colored. They seem to be short stories and you decide to read one out of curiosity.",
        choices: [
            {
                text: "Read the story of Hellavia, The Sorceress.",
                interest: 0,
                nextText: 4
            },
        //     {
        //         text: "Read the legend of Nihliana, The Ancient.",
        //         interest: 0,
        //         nextText: 5
        //     },
        //     {
        //         text: "Read the tale of Shaileen, The Protector.",
        //         interest: 0,
        //         nextText: 6
        //     }
        ]
    },
    {
        id: 4,
        text: "You turn the page to the story of Hellavia.",
        choices: [
            {
                text: "Start reading.",
                interest: 0,
                nextText: 7
            }
        ]
    },
    {
        id: 7,
        text: "Hellavia was finally ready with her spell, magic candles lit on the floor tangential to the summoning circle, oil extracted from an ancient and powerful dragon burning with a purple flame in the middle of the it. She begins her incantation...",
        choices: [
            {
                text: "While you read you start to feel increasingly dizzy...",
                interest: 0,
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
                interest: 0,
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
                interest: 0,
                nextText: 10
            }
        ]
    },
    {
        id: 10,
        text: "Upon sitting up and trying to make sense of what just happened, you also realize the figure above you is rather short. You almost reached her height when sitting straight. Suddenly the individual pokes your head again with her staff a few times.",
        choices: [
            {
                text: "*You let out a slight groan*",
                interest: 0,
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
                interest: 0,
                nextText: 12
            },
            {
                text: "Who are you...? Where am I?",
                interest: 0,
                nextText: 12
            },
            {
                text: "Do not poke me again.",
                interest: 0,
                nextText: 12
            }
        ]
    },
    {
        id: 12,
        text: "???: \n 'Okay, we do speak the same language' \n -she ignores whatever you said.- \n 'Yes, you are the proof I need. Get up, you are coming with me.'",
        choices: [
            {
                text: "Uhh, no. But thank you.",
                interest: 2,
                nextText: 13
            },
            {
                text: "What? Go where? What is this place?",
                interest: 1,
                nextText: 14
            }
        ]
    },
    {
        id: 13,
        text: "???: \n 'No but thank you? Nu-uh, that won't cut it. I said *get up*! \n -you immediately feel an imperative need of jump and stand straight- \n 'Good, I like obedient pets. Now follow me, don't make me command you again. This is the thing: to the Council of Warlocks you are the proof I need that there are other worlds, maybe even Universes, we can summon creatures from. You are in front of my hut in the middle of the Shadow Forest, the birthplace of magic in this world and where the Council of Warlocks reside. Now, *come with me*.' \n -You start following her without even wanting to-.",
        choices: [
            {
                text: "Who are you? What do you want?",
                interest: 0,
                nextText: 15
            }
        ]
    },
    {
        id: 14,
        text: "'Pick only one question my pet, I hate too many at the same time. It only shows a lack of confidence in one's path. But sure, this is the thing: to the Council of Warlocks you are the proof I need that there are other worlds, maybe even Universes, we can summon creatures from. You are in front of my hut in the middle of the Shadow Forest, the birthplace of magic in this world and where the Council of Warlocks reside. Now, *come with me*.' \n -You start following her without even wanting to.",
        choices: [
            {
                text: "Who are you? What do you want?",
                interest: 0,
                nextText: 15
            }
        ]
    },
    {
        id: 15,
        text: "Hellavia: \n 'I am Hellavia, your local supreme sorceress, at your ser... no, wait, you are at my service. And I already answered the other question. Now *be quiet* for a while.'",
        choices: [
            {
                text: "You try to speak but no sound comes out of your mouth.",
                interest: 0,
                nextText: 16
            }
        ]
    },
    {
        id: 16,
        text: "As you are walking, you suddenly are greeted by three other individuals, dressed similarly to Hellavia. She notions you to stop, her face clearly annoyed by this encounter. \n \n -'Oh look it’s Hellavia, another failure today I assume?' \n -one speaks while the others pretend it was a funny comment.",
        choices: [
            {
                text: "...",
                interest: 0,
                nextText: 17
            }
        ]
    },
    {
        id: 17,
        text: "Hellavia: \n 'Your mom has been failing since you were born, rookie.' \n -They didn't like that comment at all.",
        choices: [
            {
                text: "You still can't speak.",
                interest: 0,
                nextText: 18
            }
        ]
    },
    {
        id: 18,
        text: "'Alright, time to throw you off your high horse you little b...' -Before the guy could finish the sentence, Hellavia shot a dark energy bolt at him, launching him backwards several metres, landing on his back. The others quickly surrounded her and attacked with some other kind of spells. She blocked them fairly easy, but a fourth one was coming from the knocked down guy.",
        choices: [
            {
                text: "Try to deflect the attack.",
                interest: 3,
                nextText: 19
            },
            {
                text: "Run away.",
                interest: 2,
                nextText: 20
            },
            {
                text: "Attempt to help the others.",
                interest: -3,
                nextText: 21
            }
        ]
    },
    {
        id: 19,
        text: "You tried to jump between the short strange girl and the energy bolt, but you were too late, Hellavia just made it effortlessly disappear mid-air. However she noticed what you attempted to do. \n Hellavia: \n 'Aww, you wanted to protect me? How cute.' \n -In a mere moment the attackers where all lying unconscious on the ground.",
        choices: [
            {
                text: "You tried to speak but still can't.",
                interest: 0,
                nextText: 22
            }
        ]

    },
    {
        id: 20,
        text: "You sprinted as fast as you could, but not even two minutes later you realised you are lost and have no idea where to go. Suddenly, you forcibly started to walk in a certain direction, only to return to Hellavia. The attackers where all lying unconscious on the ground. \n Hellavia: \n 'Nice try my pet, I can respect those who attempt to fight against their fate.'",
        choices: [
            {
                text: "Tsch, so close.",
                interest: 0,
                nextText: 23
            }
        ]
    },
    {
        id: 21,
        text: "You try to knock the short strange girl down, but you realized you can't move against her, your body simply refuses to. \n Hellavia: \n 'I don't appreciate being stabbed in the back, my pet...' \n -She looks at you slightly disappointed. Then she quickly waves her staff around and in a mere moment all the attackers fell unconscious to the ground.",
        choices: [
            {
                text: "Tsch, so close.",
                interest: 0,
                nextText: 24
            }
        ]
    },
    {
        id: 22,
        text: "Hellavia: \n 'Now now, you can get to speak when we are at out destination. And, uhm, thanks for trying to protect me... I guess.' \n -She slightly blushes and looks away.",
        choices: [
            {
                text: "Walk behind her.",
                interest: 0,
                nextText: 25
            }
        ]
    },
    {
        id: 23,
        text: "Hellavia: \n 'Now now, you can get to speak when we are at out destination. Please refrain from running away again, would ya?.",
        choices: [
            {
                text: "Walk behind her.",
                interest: 0,
                nextText: 25
            }
        ]
    },
    {
        id: 24,
        text: "Hellavia: \n 'Now now, you can get to speak when we are at out destination. Backstab me again and I will make you lick my muddy boots, is that clear?",
        choices: [
            {
                text: "Walk behind her.",
                interest: 0,
                nextText: 25
            }
        ]
    },
    {
        id: 25,
        text: "You finally reached a cave where other rageddy, creepy looking human warlocks where doing their own things. They seemed to be surprised upon seeing you and Hellavia, but did nothing other than scrutinizing you with their gaze upon entering their field of view. Upon walking a little longer and crossing a pair of enormous doors, the two of you reached a grand amphitheater where old shadowy men formed a circle in high stone chairs. Candles and darkness decorated the whole place.",
        choices: [
            {
                text: "*whisper to yourself: this is kind of creepy*",
                interest: 0,
                nextText: 26
            }
        ]
    },
    {
        id: 26,
        text: "Hellavia: \n 'Fair sirs and ladies of the Council, after all this years of mocking me and calling me crazy, I present you proof of my theories!' \n -'Not so fast, young one, this could be anyone from outside our forest.' \n -one spoke",
        choices: [
            {
                text: "Continue Listening",
                interest: 2,
                nextText: 27
            },
            {
                text: "Try to sneak away",
                interest: 1,
                nextText: 28
            }
        ]
    },
    {
        id: 27,
        text: "You stood there in silence, they were arguing and questioning Hellavia about who could you be for a few moments, before turning to you.",
        choices: [
            {
                text: "Continue listening.",
                nextText: 29
            }
        ]
    },
    {
        id: 28,
        text: "Since they were distracted, you tried to slowly walk backwards, but your body wouldn't move. They ignored you completely.",
        choices: [
            {
                text: "Continue listening.",
                nextText: 29
            }
        ]
    },
    {
        id: 29,
        text: "This one claims you are from a different world than this one, and you do not seem to be an undead either. How did you and Hellavia came to meet?",
        choices: [
            {
                text: "You decide to be honest, explain about the strange book.",
                interest: 2,
                nextText: 30
            },
            {
                text: "You say you are unsure.",
                interest: 2,
                nextText: 31
            },
            {
                text: "You say she kidnapped you from your home.",
                interest: -5,
                nextText: 32
            }
        ]
    },
    {
        id: 30,
        text: "Warlock Councilmen: \n 'I see... It does sound strange, yet your clothes, your lack of mana… What realm are you from?' \n -another warlock asks.",
        choices: [
            {
                text: "You refuse, you want to protect your world.",
                interest: 3,
                nextText: 33
            }
        ]
    },
    {
        id: 31,
        text: "Warlock Councilmen: \n 'Hmm, memory loss wouldn’t be anything new for those with little to no magic. If I may, my friend... \n -another one speaks up- \n 'What kingdom are you from?'",
        choices: [
            {
                text: "You tell them about your homeworld.",
                interest: 2,
                nextText: 34
            }
        ]
    },
    {
        id: 32,
        text: "Warlock Councilmen: \n 'Wouldn’t put it past our headstrong daughter here, but we are mostly certain you are not from this world. So if you have at least some decency, tell us where were are you from.' \n -Hellavia did not like that reply of yours. ",
        choices: [
            {
                text: "You say you were raised by elves on another country.",
                interest: -4,
                nextText: 35
            }
        ]
    },
    {
        id: 33,
        text: "Warlock Councilmen: \n 'Loyal to the end, how noble.' \n -another warlock speaks. Hellavia smiled a little. \n -'Rare indeed in this times, when all the kingdoms are crumbling.'",
        choices: [
            {
                text: "You smile",
                nextText: 36
            }
        ]
    },
    {
        id: 34,
        text: "Warlock Councilmen: \n 'A planet with billions of people and hundreds of countries? How curious...' \n -One of them reacted. Hellavia’s interest was also piqued.'",
        choices: [
            {
                text: "You nod",
                nextText: 36
            }
        ]
    },
    {
        id: 35,
        text: "Warlock Councilmen: \n 'A bad attempt at lying, human. No elf here would raise a human.' \n -Hellavia made some angry noises.",
        choices: [
            {
                text: "Ehe",
                nextText: 36
            }
        ]
    },
    {
        id: 36,
        text: "They begin a short debate between each other, figuring out something, but you can’t hear what. Hellavia is definitely nervous, and is growing quite impatient even when not even a minute has passed. You can’t decide if she’s cute, scary or both.",
        choices: [
            {
                text: "Ask if she is okay",
                interest: 3,
                nextText: 37
            },
            {
                text: "Ask what is going on and what is going to happen to you.",
                nextText: 38
            },
            {
                text: "Demand she lets you go",
                interest: -2,
                nextText: 39
            }
        ]
    },
    {
        id: 37,
        text: "Hellavia: \n 'Ugh they take forever, the proof is right in front of them! Oh, wait, you actually care? I... just want to prove myself, that’s all…'",
        choices: [
            {
                text: "Before you could reply you were interrupted",
                nextText: 40
            }
        ]
    },
    {
        id: 38,
        text: "Hellavia: \n 'I get it I get it, you are afraid we will cook you or something? Stupid local gosspis, well, mostly...' \n -she sighs- \n 'You will likely be set free, or resummoned to your world. There is also the unlikely chance that you end up being blasted away with magic but...",
        choices: [
            {
                text: "Before you could reply you were interrupted",
                nextText: 40
            }
        ]
    },
    {
        id: 39,
        text: "Hellavia: \n 'Ha, you demand?! Or else what? -she snorts, shaking her head. -You have no power here, you are my pet, now stay put will you?'",
        choices: [
            {
                text: "Before you could reply you were interrupted",
                nextText: 40
            }
        ]
    },
    {
        id: 40,
        text: "Warlock Councilmen: 'Hellavia, and her… ’pet?’ Step forward. \n -One warlock notioned them, while the others took their seats. \n Hellavia: \n 'Oh, I hate this part. This is where they tell me I am crazy and that my theories make no sense, as usual' \n -She whispered with an anxious look in her face.'",
        choices: [
            {
                text: "Listen to the elders",
                nextText: 41
            }
        ]
    },
    {
        id: 41,
        text: "Warlock Councilmen: \n 'We were discussing about your responses, young one, as well about your lack of magic, and having a completely different demeanor and aura than those of this world, we believe Hellavia’s claim.' \n -they look at her with a smile- \n 'Congratulations, Summoner Hellavia, you have earned this rank and its benefits. We know you will make us proud, now... you may do as you please with you... companion here. \n -She seemed shocked for a second, but then did her best to hide her joy and overconfidence.",
        choices: [
            {
                text: "Continue listening",
                nextText: 42
            }
        ]
    },
    {
        id: 42,
        text: "Hellavia: \n 'Yes, I knew you'd eventually realise how good I am! But, uhm, I mean... thank you, Council. I will not let you down.' \n -she quickly rushed to the exit while pushing you in front of her to move faster.",
        choices: [
            {
                text: "You both leave the cave.",
                nextText: 43
            }
        ]
    },
    {
        id: 43,
        text: "Hellavia: \n 'YEEEEEESSSS!' -she shouts with joy- \n 'Summoner Hellavia, sounds cool doesn’t it? -You opened your mouth to reply but she immediately continued boasting.- \n 'I am gonna summon so many pets I won’t have to do aaanything! Aaah, sweet luxury life, here I come…' -She is so happy that you can't help but to smile while looking at her talk",
        choices: [
            {
                text: "Continue listening",
                nextText: 44
            }
        ]
    },
    {
        id: 44,
        text: "Hellavia: \n 'Oh, of course... I guess I gotta figure out what to do with you, let's see...'",
        choices: [
            {
                text: "I have a bad feeling about this.",
                nextText: null // SOMETHING HERE TO TAKE YOU TO THE RIGHT NODE ID (45, 48, 51) ACCORDING TO THE PREVIOUS CHOICES //
            }
        ]
    },
    { //If helped her with her goal almost all the time
        id: 45,
        text: "Hellavia: \n 'Thanks...companion. You could have tried to screw me over but didn’t, so, I’ll leave it to you if you want to stay or leave, I’d like the former, but your choice.' -She leans in a gives you kiss on the cheek, she is definitely blushing.",
        choices: [
            {
                text: "Stay here. You don't want to go back anyway.",
                nextText: 46
            },
            {
                text: "Tell her you want to go home.",
                nextText: 47
            }
        ]
    },
    {
        id: 46,
        text: "Hellavia: \n 'Good choice my pet... uhhh, I mean partner now, I guess?' \n -She clearly was very happy with the answer.- \n 'Alright, let’s celebrate surviving oufirst date! We can start conquering the world tomorrow though, right?'",
        choices: [
            {
                text: "You chuckle, this isn't so bad after all...",
                nextText: 55
            }
        ]
    },
    {
        id: 47,
        text: "Hellavia: \n 'Oh I... I guess I understand.' \n -she was saddened by the answer clearly, but tried to fake a smile- \n 'Okay then, but would you at least stay for a day..? You might even change your mind!'",
        choices: [
            {
                text: "You nod, not everyday you get summoned into another world",
                nextText: 55
            }
        ]
    },
    { // You got somewhere halfway between helping/hindering
        id: 48,
        text: "Hellavia: \n 'You’re not a bad guy, not my type, but not bad. If you want to stay, you’re welcome to do so, I can help you get to know this world, but if not, I’ll return you to your home, don’t mind either way.' \n -She gives you a pat on the head, barely reaching it.",
        choices: [
            {
                text: "Stay for a few days at least.",
                nextText: 49
            },
            {
                text: "Say you want to go home.",
                nextText: 50
            }
        ]
    },
    {
        id: 49,
        text: "Hellavia: \n 'I can go with that, my new friend from another world' \n -She responded with a pat on your back- \n 'Alright, we celebrate our new friendship today, then I can show you some cool stuff tomorrow, sounds good? Good, let’s go, I want a drink! A celebration drink!'",
        choices: [
            {
                text: "Yes, a drink sounds like a great idea",
                nextText: 54
            }
        ]
    },
    {
        id: 50,
        text: "Hellavia: \n 'Yeah, I figured, fine by me” \n -she gave you a pat on the shoulder.- \n Let’s at least have you try one of our drinks, bet you never had a magically enchanted cocktail! You nod, just one drink, can’t hurt can it...?'",
        choices: [
            {
                text: "Yes, a drink sounds like a great idea",
                nextText: 54
            }
        ]
    },
    {
        id: 51,
        text: "Hellavia: \n 'Look, I don’t blame you for trying to get away from me, it was unfair of how I treated you, but trying to constantly sabotage me was too much. I’ll send you back, like it or not, we just gotta make it back to my summoning circle. Let’s go…'",
        choices: [
            {
                text: "You agree.",
                nextText: 52
            }
        ]
    },
    {
        id: 52,
        text: "Hellavia: \n 'Maybe I treated you too harshly, if I did, I am sorry, you did what you had to to try and save your skin, if my opinion matters anything.' \n -The walk back was quiet and awkward, while she was happy to become a summoner, clearly she felt a bit sad. You arrive in front of her hut, where the summoning circle was, and she notions you to stand in the middle.'",
        choices: [
            {
                text: "Walk into the circle.",
                nextText: 53
            }
        ]
    },
    {
        id: 53,
        text: "Hellavia: 'Well, goodbye, thanks for uh, being summoned here I guess?' \n -You pass out, only to wake up in the library, holding the book.",
        choices: [
            {
                text: "Well, that was awkward.",
                nextText: 54
            }
        ]
    },
    {
        id: 54,
        text: "The End.",
        nextText: -1.
    }



























    // {
    //     id: 5,
    //     text: "As you begin reading, you are sucked into the book, speeding through a dark vortex. After you regain consciousness after who knows how long, you finally open your eyes only to see a young woman crouching in front of you, her face quite closer to yours, she is staring at you quite curiously. You jump out of fright."

    // },
    // {
    //     id: 6,
    //     text: "One moment you are reading the first line of the page, and the next you ear something loudly whistling by right next to your ear. You turn around, only to see an arrow stuck in a tree, right behind you, it only missed you for a few centimeters. Unsure what to think, and really confused as to what just happened, you look around, and see a small creature running away, laughing hysterically."
    // }

]
