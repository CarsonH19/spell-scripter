// export const SIGGURD_DIALOGUE = {
//   UNLOCK_EVENT: {
//     before: [
//       {
//         position: `RIGHT`,
//         speaker: `Siggurd`,
//         image: `src/assets/images/dialogue/siggurd-dialogue.png`,
//         text: `Hyaaa!..."`,
//       },
//     ],
//     after: [
//       {
//         position: `RIGHT`,
//         speaker: `Siggurd`,
//         image: `src/assets/images/dialogue/siggurd-dialogue.png`,
//         text: `Judgment has been delivered."`,
//       },
//     ],
//   },
// };


export const GRAVESTONE_DIALOGUE = {
  before: [
    {
      position: `RIGHT`,
      speaker: null,
      image: ``,
      text: `You discover a worn and damaged gravestone.`,
    },
    {
      position: `LEFT`,
      speaker: `Spell Scripter`,
      image: `src/assets/images/dialogue/player-1-dialogue.png`,
      text: `"It's a shame this gravestone is in such bad condition."`,
    },
    {
      position: `LEFT`,
      speaker: `Spell Scripter`,
      image: `src/assets/images/dialogue/player-1-dialogue.png`,
      text: `"I wonder who it belongs to, and how long its been here?"`,
    },
  ],
  after: [
    {
      position: `RIGHT`,
      speaker: null,
      image: ``,
      text: `You place the flower on the gravestone.`,
    },
    {
      position: `RIGHT`,
      speaker: null,
      image: `src/assets/images/dialogue/wandering-wisp-dialogue.png`,
      text: `Suddenly, a wisp emerges from beneath the gravestone and hovers above the ground.`,
    },
    {
      position: `LEFT`,
      speaker: `Spell Scripter`,
      image: `src/assets/images/dialogue/player-1-dialogue.png`,
      text: `"Ahh! A ghost!"`,
    },
    {
      position: `RIGHT`,
      speaker: null,
      image: `src/assets/images/dialogue/wandering-wisp-dialogue.png`,
      text: `The wisp bobs playfully and then flies in circles, before gently leading away from the gravestone further into the catacomb.`,
    },
    {
      position: `LEFT`,
      speaker: `Spell Scripter`,
      image: `src/assets/images/dialogue/player-1-dialogue.png`,
      text: `"Hey! Where are you going? Alright, you lead the way then."`,
    },
  ],
};

export const BONEVAULT_DIALOGUE = {
  SIGGURD_LIHETH: {
    before: [
      {
        position: `RIGHT`,
        speaker: null,
        image: ``,
        text: `You come across a locked door standing as a silent repositories of forgotten horrors. Its entrance, locked and foreboding, guards secrets untold. Within, an unsettling stillness hints at the ominous events awaiting those who dare to unlock the mysteries concealed within.`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `"What's the worst that could happen?"`,
      },
      {
        position: `RIGHT`,
        speaker: `Siggurd`,
        image: `src/assets/images/dialogue/siggurd-dialogue.png`,
        text: `"I can think of several horrors that could be within."`,
      },
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `src/assets/images/dialogue/liheth-dialogue.png`,
        text: `"Death."`,
      },
    ],
    response: [],
    after: [],
  },
  LIHETH: {
    before: [
      {
        position: ``,
        speaker: null,
        image: ``,
        text: ``,
      },
      {
        position: ``,
        speaker: ``,
        image: ``,
        text: ``,
      },
    ],
    response: [],
    after: [],
  },
  SIGGURD: {
    before: [
      {
        position: ``,
        speaker: null,
        image: ``,
        text: ``,
      },
      {
        position: ``,
        speaker: ``,
        image: ``,
        text: ``,
      },
    ],
    response: [],
    after: [],
  },
};

export const LAUGHING_COFFIN_DIALOGUE = {
  before: [
    {
      position: `RIGHT`,
      speaker: null,
      image: ``,
      text: `Nestled within Thieves' Ruin, you find a hidden haven for thieves and scoundrels. Its dimly lit interior glows with flickering lanterns, casting shadows over patrons engaged in hushed conspiracies and raucous laughter. The air is thick with the scent of spiced ale and roasted meat, offering refuge amidst the cold, stone walls of the catacomb.`,
    },
    {
      position: `RIGHT`,
      speaker: "Barkeeper",
      image: `src/assets/images/dialogue/tavernkeeper-dialogue.png`,
      text: `"Welcome to the Laughing Coffin,"`,
    },
    {
      position: `RIGHT`,
      speaker: "Barkeeper",
      image: `src/assets/images/dialogue/tavernkeeper-dialogue.png`,
      text: `"Leave your grudges at the door and your coin on the counter, and you'll find a warm meal and a strong drink."`,
    },
  ],
  responseTrade: [
    {
      position: `LEFT`,
      speaker: "Spell Scripter",
      image: `src/assets/images/dialogue/player-1-dialogue.png`,
      text: `"Let's see whats on the menu."`,
    },
  ],
  // after - used Laughing Coffin Coin
  // after - didn't use Laughing Coffin Coin
};
