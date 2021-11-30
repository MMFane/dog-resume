import placeholder from "./images/placeholder.jpg";
import placeholderVideo from "./images/placeholder.gif";
import placeholderVideoSlate from "./images/video-title-slate.jpg";

let trickCount = 0;
const tricks = {
  Communication: [
    {
      cue: "Yes!",
      description: "I know I did the right thing",
      handSignal:
        "Smile, especially with your eyes. Maybe wiggle or dance a bit",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "This word marks when I've made a good choice or done what's asked of me. Try to say it in an inviting, high-pitched voice right after I do something notably good. Can be followed by a treat or not",
    },
    {
      cue: "Uh-uh",
      description:
        "I stop what I am doing and look to you for further instructions. I know I didn't do the right thing.",
      handSignal: "Sterner face, maybe a head shake",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "This word marks when I've made a bad choice or done something other than what was asked of me. Neutral, but low tone of voice helps. This word can't tell me what I did wrong, so be sure to follow it up with clearer instruction, or give me a break if I am overwhelmed or overexcited",
    },
    {
      cue: "Hey/no",
      description: "I stop what I am doing and move to appease you",
      handSignal: "N/A",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "A more attention-grabbing form of uh-uh. Quiet and low tone of voice will convey your disapproval to me better than shouting. In emergency situations a loud clap can help get my attention, but it scares me a lot, so please use sparingly",
    },
    {
      cue: "Ok, go!",
      description:
        "This is my release command. I am released from waiting or staying. I start to move freely and interact with what I want",
      handSignal: "N/A",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "Sometimes I am so good at waiting I need to hear this twice.",
    },
    {
      cue: "Say bye-bye!",
      description:
        "I don't really react to this one, but may calm down or look at you",
      handSignal: "Wave at the friend",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "This is meant to help me process that a friend is leaving",
    },
    {
      cue: "Who's that?",
      description:
        "I know you acknowledge what I am looking at and I usually relax and look back at you.",
      handSignal: "N/A",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "This one helps tell me whatever I am looking at is safe and friendly. My humans use it to get me used to strangers or weird shapes that scare me. I don't always look back, but my humans prefer it when I do, so reward me well to reinforce this behavior!",
    },
    {
      cue: "Good girl!",
      description: "I know you're praising me!",
      handSignal: "N/A",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        'If you want to give me more praise than just a "yes", this is a good option. I\'ll react to anything if you say it in an excited and happy tone, but this is one I know well!',
    },
    {
      cue: "Daisy!",
      description:
        "I know you're praising me; I usually give you my attention and might come over",
      handSignal: "N/A",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "My humans try to only say my name when praising me, so I have a good association with it. I don't always come over when you just say my name, since that's not its only purpose, but I often do when I am in a good mood.",
    },
    {
      cue: "This way!",
      description:
        "I give you my attention and follow you instead of going the way I was going",
      handSignal: "N/A",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting: "N/A",
    },
    {
      cue: "Potty",
      description: "I go to the bathroom if I need to",
      handSignal: "Point an open hand down to the ground at ~45 degree angle",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "I don't really go on command yet, but this can help me know what you want me to do",
    },
  ],
  Movement: [
    {
      cue: "Sit",
      description: "Just what you'd expect - I sit down",
      handSignal: "Hold a closed fist up for me to see, fingers toward you",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "Sometimes I won't sit on cold or hard floors. It can also take me a moment to sit; please be patient with me! If I am being stubborn, you can try moving to stand right in front of me and I usually respond.",
    },
    {
      cue: "Down",
      description: "I lie down on the ground",
      handSignal: "Push a flat hand down toward the ground",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "Sometimes I won't sit on cold or hard floors. If I'm feeling really patient I will try, and hover my tummy, but sometimes I won't do it at all and that's OK.",
    },
    {
      cue: "Back",
      description: "I step backward away from you",
      handSignal:
        "Hold your hand flat with fingers down toward the ground and flick away from you, towards me",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "Sometimes, especially if asked to go back twice, I will sit down. This is OK, but I'll be working on it later. I do not know how to go back when sitting or lying down yet.",
    },
    {
      cue: "Bed",
      description: "I will got to my spot - usually a dog bed or a blanket",
      handSignal: "Point and look at the bed",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "I may need some help staying on the bed if I am excited.",
    },
    {
      cue: "Kennel",
      description: "I will got to my kennel/crate",
      handSignal: "Point and look at the kennel",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "I am working on crate training, but I like sleeping in here at night.",
    },
    {
      cue: "Off",
      description:
        "I will get off the surface or person I am standing on and go back on the floor",
      handSignal: "Point from the surface to the floor",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "I am working on not counter surfing and need to be watched around food on surfaces",
    },
    {
      cue: "Come",
      description: "I will come to you",
      handSignal: "Face your palm flat over the floor and curl your fingers in",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "Sometimes I don't want to get up - coming closer or turning your back and bending your legs and bouncing or wiggling invitingly, or maybe doing some rhythmic pats on your leg can help encourage me",
    },
    {
      cue: "Out",
      description: "I will leave the kitchen or bathroom you don't want me in",
      handSignal:
        'N/A. Can use this in conjunction with "back"\'s hand gesture',
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "I just started learning this and am not very good yet; please be patient with me!",
    },
    {
      cue: "Up",
      description:
        "I will get up from whatever position I am in - lying down to sitting, sitting to standing",
      handSignal:
        'N/A. Can use this in conjunction with "back"\'s hand gesture',
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "I just started learning this and am not very good yet; please be patient with me!",
    },
    {
      cue: "Couch",
      description: "I will get up on the couch or bed",
      handSignal: "Pat or point to the surface you want me on",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "My humans don't mind if I get on the couch or bed on my own at home, so I often do. This cue encourages me to join them if I don't do so on my own.",
    },
    {
      cue: "Heel",
      description: "I will walk next to you, close in at your left side",
      handSignal: "Look at me and hold your hand down at your left side",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "I'm pretty good at this at home, but need more practice out in public with distractions. The ultimate goal is for me to look at my person and not sniff things or get distracted, but we're still working on that.",
    },
    {
      cue: "Let's Go",
      description: "I will walk with you somewhere",
      handSignal: "Can be same as come, maybe some snaps instead",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting: "If I don't listen you may need to come closer",
    },

    {
      cue: "Turn <left/right>",
      description: "I turn the direction you tell me to turn",
      handSignal: "Hold an arm out to the correct direction",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        'We\'re still working on this one, so right now it mostly does the same thing as "This way"',
    },
  ],
  Manners: [
    {
      cue: "Wait",
      description:
        "I will not eat or interact with something I am interested in until you tell me to",
      handSignal:
        "Hold a flat palm at me from a height and distance that isn't conducive to high-fiving",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "I can wait pretty long, especially if you put food down in front of me and ask me to wait. Let's keep pushing and growing my patience with practice!",
    },
    {
      cue: "Stay",
      description:
        "I will wait where I am, even if you leave, and only move from my spot when I am released",
      handSignal:
        "Hold a flat palm at me from a height and distance that isn't conducive to high-fiving",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting: "I need more practice with this one, in general.",
    },
    {
      cue: "Leave It",
      description: "I will stop what I am doing and usually look at you",
      handSignal: "N/A",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "I am doing pretty good, but when I am getting into something really tempting I can still have trouble. Lots of praise will help me learn!",
    },
    {
      cue: "Enough",
      description:
        "I will stop barking at whatever is bothering me and follow my human somewhere quiet to calm down",
      handSignal: "N/A.",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "Please let me bark a little to get my emotions out, then lead me somewhere quiet and give me treats when I've stopped",
    },
    {
      cue: "Suit Up",
      description:
        "I will poke my head through a harness or piece of clothing you offer me",
      handSignal: "Hold out the item you want me to put on",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "If I'm feeling fussy I may chew on the clothing and need a little additional patience to get the item on.",
    },
    {
      cue: "Play done",
      description:
        "I will leave my flirt pole or tug toy and let you re-invite me to play, or put the toy away if you are done.",
      handSignal: "N/A",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "This one is still a bit hard for me. Let's keep practicing! It will help if you say this a lot during play so I don't learn it means play is over and start resisting because I want it to continue",
    },
    {
      cue: "Settle",
      description: "I will calm down a little bit",
      handSignal: "N/A",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "There are lots of acceptable responses to this one. I can sit, lie down, or just stop mouthing and biting so hard. I might look at you for further instructions",
    },
    {
      cue: "Look at me",
      description: "I stop what I am doing and look in your eyes",
      handSignal:
        "You can point at your eyes, but I also need the verbal cue because you'll only really be using this one when I'm not looking at you",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting: "N/A",
    },
  ],
  Party: [
    {
      cue: "Boop",
      description: "I poke my nose into your fist",
      handSignal: "Hold out a fist for a fistbump",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "Sometimes I'll lick your hand while I boop. That's OK, but my people prefer it when I don't lick and try to reward me more when I don't.",
    },
    {
      cue: "Kiss",
      description: "I lick your outstretched hand, or face if you dare",
      handSignal:
        'Either hold out a flat hand with fingers down (think "kiss the ring") or offer a cheek or mouth and say the cue',
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "Sometimes I boop and lick at the same time. Reward me more when I just lick! If I'm too excited, I may push my teeth into you, so please be prepared if you ask me to kiss your face.",
    },
    {
      cue: "Find <name>",
      description: "I go look for the person you name",
      handSignal: "N/A",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "Can be used for hide and seek! I need to be trained on new names for a quite bit before I really understand who to go to. Sometimes I still get it wrong; this one is complex!",
    },
    {
      cue: "Spin",
      description: "I spin in a circle",
      handSignal: "Point one finger down to the ground and spin it around",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "I currently only spin clockwise. I'm not an ambi-turner yet!",
    },
    {
      cue: "Dance",
      description:
        "I jump up and place both paws on you. You can grab them and dance with me a little",
      handSignal: "Tap your own chest",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "I like to jump on people too much, so my people hope this encourages me to only do it when asked",
    },
    {
      cue: "Stand",
      description:
        "I stand on my hind legs, without supporting my front legs with anything",
      handSignal: "Point a finger to the sky",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting: "This one is very new! A work in progress",
    },
    {
      cue: "Tunnel",
      description:
        "I walk between your legs and maybe circle around a leg to the front again",
      handSignal: "Spread your legs and point between them",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting: "This one is pretty new! A work in progress",
    },
    {
      cue: "Crawl",
      description: "When I'm lying down, I crawl toward you",
      handSignal:
        "Put a flat hand on the ground in front of me, palm up, with your wrist bent at 90 degrees",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "I currently don't keep my back legs bent, so my limit is to crawl until I am fully splooted",
    },
    {
      cue: "Get your <toy name>",
      description: "I grab the toy you specify",
      handSignal: "Point, if I am having trouble",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        'I get a little frustrated with this one, maybe since it involves so many words and grammar is not my strong suit. I am best with "Get your ducky"',
    },
    {
      cue: "Paw/Other Paw",
      description: "I put my paw in your outstretched hand",
      handSignal: "Hold out a flat hand, palm up",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "Left is usually other paw, but my humans haven't been too consistent, so they aren't picky. Sometimes I pull my paw back a little fast, so my humans like to hold my hand for a second to get me used to the sensation. This is one of my go-tos when I am confused, so if I do it when you ask for something else, I may need clearer instruction.",
    },
    {
      cue: "High Five",
      description: "I paw your hand in a high five",
      handSignal: "Hold out your hand for a typical all-American high five",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "We recoded this one from kiss to high five, and I sometimes forget and get my mouth involved. Also, if you hold the hand too far away, I may leap at it. I'll do better next time!",
    },
    {
      cue: "Bow",
      description: "I do a doggy play-bow",
      handSignal: "Do a bow at me",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "This is one of my favorites! Sometimes I'll do it when I don't want to lay down somewhere cold or hard",
    },
  ],
};

for (let list in tricks) {
  tricks[list].sort((a, b) => {
    if (a.cue < b.cue) {
      return -1;
    } else if (a.cue > b.cue) {
      return 1;
    } else {
      return 0;
    }
  });

  for (let i = 0; i < tricks[list].length; i++) {
    tricks[list][i].id = i;
    trickCount++;
  }
}

export { tricks, trickCount };
