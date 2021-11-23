import placeholder from "./images/placeholder.jpg";
import placeholderVideo from "./images/placeholder.gif";
import placeholderVideoSlate from "./images/video-title-slate.jpg";
const intro =
  "Hi, my name is Daisy! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const tricks = {
  Release: [
    {
      id: 0,
      cue: "Ok, go",
      description:
        "I am released from waiting or staying. It's OK for me to move freely and interact with what I want",
      handSignal: "N/A",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "Sometimes I am so good at waiting I need to hear this twice.",
    },
  ],
  Utility: [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
      cue: "Wait",
      description:
        "I will not eat or interact with something I am interested in until you tell me to",
      handSignal:
        "Hold your hand flat with fingers down toward the ground and flick away from you, towards me",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "Sometimes, especially if asked to go back twice, I will sit down. This is OK, but I'll be working on it later. I do not know how to go back when sitting or lying down yet.",
    },
  ],
  Party: [
    {
      id: 4,
      cue: "Boop",
      description: "I poke my nose into your fist",
      handSignal: "Hold out a fist for a fistbump",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
      troubleshooting:
        "Sometimes I'll lick your hand while a boop. Nothing to worry about, but my people prefer it when I don't lick, and try to reward me more when I don't.",
    },
  ],
};

//to do alphabetize? and dynamically add ids

export { intro, tricks };
