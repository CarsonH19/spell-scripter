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

// GET
export const DUNGEON_ENTRANCE_DIALOGUE = {
  PLAYER: {
    before: [
      {
        position: `LEFT`,
        speaker: `Carson`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `I've been to worse places. I think..."`,
      },
    ],
  },
};

// GET
export const COFFIN_DIALOGUE = {
  PLAYER: {
    before: [
      {
        position: `LEFT`,
        speaker: `Carson`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `This coffin looks like it belonged to royalty of some kind. Something of value may be inside.`,
      },
    ],
  },
  LIHETH: {
    before: [
      {
        position: `LEFT`,
        speaker: `Liheth`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `There's a coffin. Maybe we should take a look inside.`,
      },
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `src/assets/images/dialogue/liheth-dialogue.png`,
        text: `Careful, we don't want to disturb the dead's eternal rest.`,
      },
    ],
  },
};

export const LIHETH_DIALOGUE = {
  UNLOCK_EVENT: {
    before: [
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `src/assets/images/dialogue/liheth-dialogue.png`,
        text: `"Stop..."`,
      },
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `src/assets/images/dialogue/liheth-dialogue.png`,
        text: `"Do you come seeking the candlelight's warmth, or to extinguish it?`,
      },
      {
        position: `LEFT`,
        speaker: `Carson`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `"I'm... just passing through. What is this place?`,
      },
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `src/assets/images/dialogue/liheth-dialogue.png`,
        text: `"This is a Candlelight Shrine, one of many scattered throughout the catacomb."`,
      },
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `src/assets/images/dialogue/liheth-dialogue.png`,
        text: `"Here, the sacred flames stand sentinel, shielding those of from the evil that prowls beyond its sacred glow."`,
      },
      {
        position: `LEFT`,
        speaker: `Carson`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `"I see. But, why are you here? How did you get all the way down here?`,
      },
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `src/assets/images/dialogue/liheth-dialogue.png`,
        text: `"I'm Liheth, one of the last candlelight priestesses, tasked with maintaining these shrines and keeping their candles lit."`,
      },
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `src/assets/images/dialogue/liheth-dialogue.png`,
        text: `"However, many of the Candlelight Shrines are hidden throughout the catacomb, and the undead have grown in number. So I'm unable to search for them."`,
      },
      {
        position: `LEFT`,
        speaker: `Carson`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `"I'm continuing further into the catacomb. Come with me. We can search the catacomb together and find the other Candlelight Shrines."`,
      },
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `src/assets/images/dialogue/liheth-dialogue.png`,
        text: `"You... you will help me find the shrines?`,
      },
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `src/assets/images/dialogue/liheth-dialogue.png`,
        text: `"I will be forever grateful for the kindness you've shown me."`,
      },
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `src/assets/images/dialogue/liheth-dialogue.png`,
        text: `"Before we go, please rest. You'll need your energy and I need to finish my duties here before we depart."`,
      },
    ],
    after: [
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `src/assets/images/dialogue/liheth-dialogue.png`,
        text: `"You're awake. My duties are finished. When you're ready, we can leave."`,
      },
      {
        position: `LEFT`,
        speaker: `Carson`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `"Lets find those shrines."`,
      },
    ],
  },
};

export const SIGGURD_DIALOGUE = {
  UNLOCK_EVENT: {
    before: [
      {
        position: `RIGHT`,
        speaker: `Siggurd`,
        image: `src/assets/images/dialogue/siggurd-dialogue.png`,
        text: `"Hyaaa!..."`,
      },
      {
        position: `RIGHT`,
        speaker: `Siggurd`,
        image: `src/assets/images/dialogue/siggurd-dialogue.png`,
        text: `"With the Light, I will strike you down!`,
      },
      {
        position: `RIGHT`,
        speaker: `Siggurd`,
        image: `src/assets/images/dialogue/siggurd-dialogue.png`,
        text: `!!!`,
      },
      {
        position: `RIGHT`,
        speaker: `Siggurd`,
        image: `src/assets/images/dialogue/siggurd-dialogue.png`,
        text: `"Stranger, stay back! I'll defeat them alone!`,
      },
      {
        position: `LEFT`,
        speaker: `Carson`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `"There are too many!`,
      },
      {
        position: `LEFT`,
        speaker: `Carson`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `"I won't stand by and watch. Let's drive them back together!`,
      },
    ],
    after: [
      {
        position: `RIGHT`,
        speaker: `Siggurd`,
        image: `src/assets/images/dialogue/siggurd-dialogue.png`,
        text: `"Judgment has been delivered."`,
      },
      {
        position: `RIGHT`,
        speaker: `Siggurd`,
        image: `src/assets/images/dialogue/siggurd-dialogue.png`,
        text: `"You fought bravely. Who are you?`,
      },
      {
        position: `LEFT`,
        speaker: `Carson`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `"A student of the arcana. I'm here to master my skills and become a great spell scripter."`,
      },
      {
        position: `RIGHT`,
        speaker: `Siggurd`,
        image: `src/assets/images/dialogue/siggurd-dialogue.png`,
        text: `"Well met. I am Siggurd, a paladin on a quest to purify the land of evil, and these catacombs harbor much of it."`,
      },
      {
        position: `LEFT`,
        speaker: `Carson`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `"We should stick together. Who knows what we may encounter down here."`,
      },
      {
        position: `RIGHT`,
        speaker: `Siggurd`,
        image: `src/assets/images/dialogue/siggurd-dialogue.png`,
        text: `"Hmm... a spell scripter would be a useful ally in these catacombs."`,
      },
      {
        position: `RIGHT`,
        speaker: `Siggurd`,
        image: `src/assets/images/dialogue/siggurd-dialogue.png`,
        text: `"My journey will have danger far greater than what we just overcame. Are you sure you want me to accompany you?`,
      },
      {
        position: `LEFT`,
        speaker: `Carson`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `"What's a journey without danger."`,
      },
      {
        position: `RIGHT`,
        speaker: `Siggurd`,
        image: `src/assets/images/dialogue/siggurd-dialogue.png`,
        text: `"As you wish, spell scripter. Onward then."`,
      },
    ],
  },
};

export const AMBUSH_EVENT_DIALOGUE = {
  before: [
    {
      position: `RIGHT`,
      speaker: null,
      image: ``,
      text: `Scoundrels suddenly emerge from hiding and quickly surround you, their blades unsheathed and eyes gleaming with greed.`,
    },
    {
      position: `RIGHT`,
      speaker: `Thief`,
      image: `src/assets/images/dialogue/thief-dialogue.png`,
      text: `"Hold it right there. Don't move."`,
    },
    {
      position: `RIGHT`,
      speaker: `Thief`,
      image: `src/assets/images/dialogue/thief-dialogue.png`,
      text: `"Your coin, your valuables, and anything else of worth. Hand them over quietly, and we won't hurt you."`,
    },
    {
      position: `LEFT`,
      speaker: `Carson`,
      image: `src/assets/images/dialogue/player-1-dialogue.png`,
      text: `"Hold on! Lets just-`,
    },
    {
      position: `RIGHT`,
      speaker: `Thief`,
      image: `src/assets/images/dialogue/thief-dialogue.png`,
      text: `"Don't test my patience! Empty your pockets, now."`,
    },
    {
      position: `RIGHT`,
      speaker: `Thief`,
      image: `src/assets/images/dialogue/thief-dialogue.png`,
      text: `"I won't ask again."`,
    },
    {
      position: `LEFT`,
      speaker: `Carson`,
      image: `src/assets/images/dialogue/player-1-dialogue.png`,
      text: `...`,
    },
  ],
  responseRefuse: [
    {
      position: `LEFT`,
      speaker: `Carson`,
      image: `src/assets/images/dialogue/player-1-dialogue.png`,
      text: `"I won't give you anything."`,
    },
    {
      position: `RIGHT`,
      speaker: `Thief`,
      image: `src/assets/images/dialogue/thief-dialogue.png`,
      text: `"We'll take it off your corpse!`,
    },
  ],
  // No surrender response
  afterSurrender: [
    {
      position: `RIGHT`,
      speaker: `Thief`,
      image: `src/assets/images/dialogue/thief-dialogue.png`,
      text: `"Good choice."`,
    },
    {
      position: `RIGHT`,
      speaker: null,
      image: ``,
      text: `"The thieves slip back into the shadows they emerged from and are gone."`,
    },
    {
      position: `LEFT`,
      speaker: `Carson`,
      image: `src/assets/images/dialogue/player-1-dialogue.png`,
      text: `"I can't believe they stole from me. But at least they didn't attack me."`,
    },
  ],
  afterRefuse: [
    {
      position: `LEFT`,
      speaker: `Carson`,
      image: `src/assets/images/dialogue/player-1-dialogue.png`,
      text: `"It seems no matter where you go, thieves will always be somewhere searching for their next victim."`,
    },
  ],
};

export const BONEVAULT_DIALOGUE = {
  before: [
    {
      position: `RIGHT`,
      speaker: null,
      image: ``,
      text: `You come across a locked door standing as a silent repositories of forgotten horrors. Its entrance, locked and foreboding, guards secrets untold. Within, an unsettling stillness hints at the ominous events awaiting those who dare to unlock the mysteries concealed within.`,
    },
    {
      position: `LEFT`,
      speaker: `Carson`,
      image: `src/assets/images/dialogue/player-1-dialogue.png`,
      text: `"What's the worst that could happen?"`,
    },
  ],
  after: [
    // {
    //   position: `RIGHT`,
    //   speaker: `Siggurd`,
    //   image: `src/assets/images/dialogue/siggurd-dialogue.png`,
    //   text: `Judgment has been delivered."`,
    // },
  ],
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
      speaker: "Carson",
      image: `src/assets/images/dialogue/player-1-dialogue.png`,
      text: `"Let's see whats on the menu."`,
    },
  ],
  // after - used Laughing Coffin Coin 
  // after - didn't use Laughing Coffin Coin
};
