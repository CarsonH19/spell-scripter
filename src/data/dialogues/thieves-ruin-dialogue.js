export const LAUGHING_COFFIN_DIALOGUE = {
  PLAYER: {
    before: [
      {
        position: `RIGHT`,
        speaker: null,
        image: ``,
        text: `Nestled within Thieves' Ruin, you find a hidden haven for thieves and scoundrels. Its dimly lit interior glows with flickering lanterns, casting shadows over patrons engaged in hushed conspiracies and raucous laughter. The air is thick with the scent of spiced ale and roasted meat, offering refuge amidst the cold, stone walls of the catacomb.`,
      },
      {
        position: `RIGHT`,
        speaker: "Tavern Keeper",
        image: `src/assets/images/dialogue/tavernkeeper-dialogue.png`,
        text: `"Welcome to the Laughing Coffin,"`,
      },
      {
        position: `RIGHT`,
        speaker: "Tavern Keeper",
        image: `src/assets/images/dialogue/tavernkeeper-dialogue.png`,
        text: `"Leave your grudges at the door and your coin on the counter, and you'll find a warm meal and a strong drink."`,
      },
    ],
    response: [
      [
        {
          position: `LEFT`,
          speaker: "Spell Scripter",
          image: `src/assets/images/dialogue/player-1-dialogue.png`,
          text: `"Let's see whats on the menu."`,
        },
      ],
      [
        {
          position: `LEFT`,
          speaker: "Spell Scripter",
          image: `src/assets/images/dialogue/player-1-dialogue.png`,
          text: `"What do you have for a weary traveler?"`,
        },
      ],
      [
        {
          position: `LEFT`,
          speaker: "Spell Scripter",
          image: `src/assets/images/dialogue/player-1-dialogue.png`,
          text: `"I'm in need of some provisions. What can you offer?"`,
        },
      ],
      [
        {
          position: `LEFT`,
          speaker: "Spell Scripter",
          image: `src/assets/images/dialogue/player-1-dialogue.png`,
          text: `"Show me what you've got for sale."`,
        },
      ],
      [
        {
          position: `LEFT`,
          speaker: "Spell Scripter",
          image: `src/assets/images/dialogue/player-1-dialogue.png`,
          text: `"I'm looking to buy some supplies. What do you have?"`,
        },
      ],
    ],
    after: [
      [
        {
          position: `RIGHT`,
          speaker: "Tavern Keeper",
          image: `src/assets/images/dialogue/tavernkeeper-dialogue.png`,
          text: `"Safe travels. The catacombs aren't kind to the unprepared."`,
        },
      ],
      [
        {
          position: `RIGHT`,
          speaker: "Tavern Keeper",
          image: `src/assets/images/dialogue/tavernkeeper-dialogue.png`,
          text: `"Come back. The Laughing Coffin is always open."`,
        },
      ],
      [
        {
          position: `RIGHT`,
          speaker: "Tavern Keeper",
          image: `src/assets/images/dialogue/tavernkeeper-dialogue.png`,
          text: `"Watch your back out there. The shadows are full of dangers."`,
        },
      ],
      [
        {
          position: `RIGHT`,
          speaker: "Tavern Keeper",
          image: `src/assets/images/dialogue/tavernkeeper-dialogue.png`,
          text: `"Don't be a stranger. There's always a spot for you at the Laughing Coffin. "`,
        },
        {
          position: `RIGHT`,
          speaker: "Tavern Keeper",
          image: `src/assets/images/dialogue/tavernkeeper-dialogue.png`,
          text: `"If you have coin."`,
        },
      ],
    ],
  },
  // after - used Laughing Coffin Coin
  // after - didn't use Laughing Coffin Coin
  LIHETH: {
    before: [
      {
        position: `RIGHT`,
        speaker: null,
        image: ``,
        text: `Nestled within Thieves' Ruin, you find a hidden haven for thieves and scoundrels. Its dimly lit interior glows with flickering lanterns, casting shadows over patrons engaged in hushed conspiracies and raucous laughter. The air is thick with the scent of spiced ale and roasted meat, offering refuge amidst the cold, stone walls of the catacomb.`,
      },
      {
        position: `RIGHT`,
        speaker: "Tavern Keeper",
        image: `src/assets/images/dialogue/tavernkeeper-dialogue.png`,
        text: `"Welcome to the Laughing Coffin,"`,
      },
      {
        position: `RIGHT`,
        speaker: "Tavern Keeper",
        image: `src/assets/images/dialogue/tavernkeeper-dialogue.png`,
        text: `"Leave your grudges at the door and your coin on the counter, and you'll find a warm meal and a strong drink."`,
      },
      {
        position: `RIGHT`,
        speaker: "Tavern Keeper",
        image: `src/assets/images/dialogue/tavernkeeper-dialogue.png`,
        text: `"Ah, a Candlelight Priestess in the Laughing Coffin. Quite the unusual sight."`,
      },
      {
        position: `LEFT`,
        speaker: "Liheth",
        image: `src/assets/images/dialogue/liheth-dialogue.png`,
        text: `"Even in the darkest places, light must shine. We seek refuge."`,
      },
      {
        position: `RIGHT`,
        speaker: "Tavern Keeper",
        image: `src/assets/images/dialogue/tavernkeeper-dialogue.png`,
        text: `"Refuge, eh? That depends on how much you're willing to pay."`,
      },
    ],
  },
  SIGGURD: {
    before: [
      {
        position: `RIGHT`,
        speaker: null,
        image: ``,
        text: `Nestled within Thieves' Ruin, you find a hidden haven for thieves and scoundrels. Its dimly lit interior glows with flickering lanterns, casting shadows over patrons engaged in hushed conspiracies and raucous laughter. The air is thick with the scent of spiced ale and roasted meat, offering refuge amidst the cold, stone walls of the catacomb.`,
      },
      {
        position: `RIGHT`,
        speaker: "Tavern Keeper",
        image: `src/assets/images/dialogue/tavernkeeper-dialogue.png`,
        text: `"Welcome to the Laughing Coffin,"`,
      },
      {
        position: `RIGHT`,
        speaker: "Tavern Keeper",
        image: `src/assets/images/dialogue/tavernkeeper-dialogue.png`,
        text: `"Leave your grudges at the door and your coin on the counter, and you'll find a warm meal and a strong drink."`,
      },
      {
        position: `RIGHT`,
        speaker: "Tavern Keeper",
        image: `src/assets/images/dialogue/tavernkeeper-dialogue.png`,
        text: `"A Holy Paladin dares to step foot in the Laughing Coffin. What brings you here, knight?"`,
      },
      {
        position: `LEFT`,
        speaker: "Siggurd",
        image: `src/assets/images/dialogue/siggurd-dialogue.png`,
        text: `"Duty and righteousness know no boundaries. We need rest."`,
      },
      {
        position: `RIGHT`,
        speaker: "Tavern Keeper",
        image: `src/assets/images/dialogue/tavernkeeper-dialogue.png`,
        text: `"Rest comes with a price."`,
      },
    ],
  },
};
