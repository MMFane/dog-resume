import placeholder from "./images/placeholder.jpg";
import placeholderVideo from "./images/placeholder.gif";
import placeholderVideoSlate from "./images/video-title-slate.jpg";
const intro =
  "Hi, my name is Daisy! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const tricks = {
  utility: [
    {
      cue: "Sit",
      description: "Just what you'd expect - Daisy sits down",
      handSignal: "Closed fist, fingers toward you",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
    },
    {
      cue: "Down",
      description: "Just what you'd expect - Daisy lies down on the ground",
      handSignal: "push a flat hand down toward the ground",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
    },
  ],
  party: [
    {
      cue: "Boop",
      description:
        "Daisy pokes your hand with her nose. OK if she licks, but preferred if she doesn't.",
      handSignal: "Hold out a fist for a fistbump",
      handSignalImg: placeholder,
      video: placeholderVideo,
      slate: placeholderVideoSlate,
    },
  ],
};

export { intro, tricks };
