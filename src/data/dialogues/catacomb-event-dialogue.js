export const DUNGEON_ENTRANCE_DIALOGUE = {
  PLAYER: [
    [
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `“The ancient stones of this entrance seem to whisper tales of old. Time to gather my wits and step into the unknown. There's no turning back now.”`,
      },
    ],
  ],
  SIGGURD: [
    [
      {
        position: `RIGHT`,
        speaker: `Siggurd`,
        image: `src/assets/images/dialogue/siggurd-dialogue.png`,
        text: `“Spell Scripter, this is where a trial begins. Stay alert and let the light guide us through the darkness.”`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `“Understood, Siggurd. I've got a few tricks up my sleeve to help us through whatever's waiting in there.”`,
      },
    ],
    [
      {
        position: `RIGHT`,
        speaker: `Siggurd`,
        image: `src/assets/images/dialogue/siggurd-dialogue.png`,
        text: `“The catacomb's entrance stands before us, a silent guardian of its secrets. Are you ready for the challenges ahead?”`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `“Ready as I'll ever be. Just keep your sword at the ready and I'll handle the magic. Together, we'll make it through.”`,
      },
    ],
    [
      {
        position: `RIGHT`,
        speaker: `Siggurd`,
        image: `src/assets/images/dialogue/siggurd-dialogue.png`,
        text: `“The air grows heavier as we approach. Remember, bravery and caution are our best allies in these depths.”`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `“Bravery I've got in spades. And with your sword by my side, I'm sure we'll face whatever comes our way.”`,
      },
    ],
  ],
  LIHETH: [
    [
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `src/assets/images/dialogue/liheth-dialogue.png`,
        text: `"Ah, we are about to enter the catacombs. Remember, light can be a beacon in the darkest places. Keep a candle close to guide your way."`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `"Thank you, Liheth. I'll make sure to keep your wisdom in mind. I have a feeling I'll need every bit of light I can get."`,
      },
    ],
    [
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `src/assets/images/dialogue/liheth-dialogue.png`,
        text: `"The shadows in the catacombs can be quite deceptive. Trust in the light you carry and stay true to your path."`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `"I'll heed your advice, Liheth. A little light might make all the difference in these treacherous halls."`,
      },
    ],
    [
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `src/assets/images/dialogue/liheth-dialogue.png`,
        text: `"The deeper you go, the darker it will get. But remember, even the smallest light can dispel the deepest gloom."`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `"I appreciate the encouragement, Liheth. I'll make sure to keep my light burning bright as I venture forth."`,
      },
    ],
  ],
};

export const COFFIN_DIALOGUE = {
  PLAYER: {
    before: [
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `This coffin looks like it belonged to royalty of some kind. Something of value may be inside.`,
      },
    ],
    responseEnemy: [
      {
        position: `LEFT`,
        speaker: null,
        image: ``,
        text: `As the coffin creaks open, a cloud of stale air escapes, revealing a grim sight: a skeletal hand reaching out from the darkness.`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `"It seems my treasure is a bit more animated than anticipated."`,
      },
    ],
    afterLeave: [
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `"Maybe some mysteries are better left undisturbed."`,
      },
    ],
  },
  SIGGURD: {
    before: [
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `"Siggurd, take a look at this—an ornate coffin, just sitting here in the shadows. What do you make of it? Should we risk opening it or leave it be?"`,
      },
      {
        position: `RIGHT`,
        speaker: `Siggurd`,
        image: `src/assets/images/dialogue/siggurd-dialogue.png`,
        text: `"Ah, a coffin with such intricate design could indeed hide valuable treasures. However, the presence of such an item in these cursed catacombs might also signify danger."`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `"True, it could be a trap. But then again, it could be filled with something priceless or even useful for our quest."`,
      },
      {
        position: `RIGHT`,
        speaker: `Siggurd`,
        image: `src/assets/images/dialogue/siggurd-dialogue.png`,
        text: `"The decision remains with you. I shall stand ready in case of any danger."`,
      },
    ],
    responseEnemy: [
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `"Looks like our curiosity has awakened more than we bargained for.`,
      },
    ],
    afterEnemy: [
      {
        position: `RIGHT`,
        speaker: `Siggurd`,
        image: `src/assets/images/dialogue/siggurd-dialogue.png`,
        text: `Maybe the dead should remain undisturbed.`,
      },
    ],
  },
  LIHETH: {
    before: [
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `src/assets/images/dialogue/liheth-dialogue.png`,
        text: `"Ah, a grand coffin amidst the shadows. How curious. It seems to beckon you with an aura of both mystery and temptation."`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `"Temptation indeed. It could be hiding something valuable... or something rather unpleasant. What do you think, Liheth? Should we open it or leave it be?"`,
      },
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `src/assets/images/dialogue/liheth-dialogue.png`,
        text: `"Even in these darkened halls, there is a certain reverence for what lies within. Sometimes, the greatest discoveries come from embracing the unknown. But remember, young wizard, not all secrets are meant to be unearthed."`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `"Ah, wise words as always. But if we always feared the unknown, we'd never have any stories to tell. Perhaps a little risk is just what we need. Besides, what's life without a little adventure?"`,
      },
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `src/assets/images/dialogue/liheth-dialogue.png`,
        text: `"Very well. If you choose to open it, do so with caution. I shall be here to offer guidance, should the need arise. The light may guide us, but it's your courage that will see us through."`,
      },
    ],
    responseEnemy: [
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `src/assets/images/dialogue/liheth-dialogue.png`,
        text: `"Looks like our decision has stirred up quite the unpleasant surprise."`,
      },
    ],
    afterEnemy: [
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `src/assets/images/dialogue/liheth-dialogue.png`,
        text: `"That was more excitement than I anticipated."`,
      },
    ],
  },
};

export const AMBUSH_DIALOGUE = {
  PLAYER: {
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
        speaker: `Spell Scripter`,
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
        speaker: `Spell Scripter`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `...`,
      },
    ],
    responseRefuse: [
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
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
        speaker: `Spell Scripter`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `"I can't believe they stole from me. But at least they didn't attack me."`,
      },
    ],
    afterRefuse: [
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `"It seems no matter where you go, thieves will always be somewhere searching for their next victim."`,
      },
    ],
  },
  SIGGURD: {
    before: [
      {
        position: "RIGHT",
        speaker: null,
        image: ``,
        text: "The shadows part as scoundrels emerge, encircling you with menacing grins and glinting blades.",
      },
      {
        position: "RIGHT",
        speaker: "Thief",
        image: "src/assets/images/dialogue/thief-dialogue.png",
        text: "Well, well, what do we have here? Hand over your valuables, and maybe we'll let you walk away with your lives.",
      },
      {
        position: "LEFT",
        speaker: "Spell Scripter",
        image: "src/assets/images/dialogue/player-1-dialogue.png",
        text: "Hold on a second! Surely there's a better way to resolve this. Perhaps a little negotiation?",
      },
      {
        position: "RIGHT",
        speaker: "Thief",
        image: "src/assets/images/dialogue/thief-dialogue.png",
        text: "Negotiate? The only thing we're interested in is what's in your pockets. Move quickly, or regret it.",
      },
      {
        position: "LEFT",
        speaker: "Siggurd",
        image: "src/assets/images/dialogue/siggurd-dialogue.png",
        text: "Fear not, Spell Scripter. We shall not be cowed by these miscreants. Let us face them with honor.",
      },
      {
        position: "RIGHT",
        speaker: "Thief",
        image: "src/assets/images/dialogue/thief-dialogue.png",
        text: "Brave words for someone about to lose everything. Now, make a choice!",
      },
    ],
    responseRefuse: [
      {
        position: "LEFT",
        speaker: "Spell Scripter",
        image: "src/assets/images/dialogue/player-1-dialogue.png",
        text: "I refuse to give in. We'll see how your blades fare against our resolve.",
      },
      {
        position: "RIGHT",
        speaker: "Thief",
        image: "src/assets/images/dialogue/thief-dialogue.png",
        text: "So be it. You'll regret this decision soon enough.",
      },
      {
        position: "LEFT",
        speaker: "Siggurd",
        image: "src/assets/images/dialogue/siggurd-dialogue.png",
        text: "Stand firm, Spell Scripter. The light will guide us through this challenge.",
      },
    ],
    afterSurrender: [
      {
        position: "RIGHT",
        speaker: "Thief",
        image: "src/assets/images/dialogue/thief-dialogue.png",
        text: "Wise choice. Enjoy the rest of your journey without our company.",
      },
      {
        position: "RIGHT",
        speaker: null,
        image: ``,
        text: "The thieves vanish into the gloom, leaving you relieved yet disheartened.",
      },
      {
        position: "LEFT",
        speaker: "Spell Scripter",
        image: "src/assets/images/dialogue/player-1-dialogue.png",
        text: "It's disappointing to be robbed, but at least we avoided further conflict.",
      },
      {
        position: "LEFT",
        speaker: "Siggurd",
        image: "src/assets/images/dialogue/siggurd-dialogue.png",
        text: "Indeed. Let us press on, and stay vigilant. There may be more dangers ahead.",
      },
    ],
    afterRefuse: [
      {
        position: "LEFT",
        speaker: "Spell Scripter",
        image: "src/assets/images/dialogue/player-1-dialogue.png",
        text: "Thieves will always be lurking, but we stand firm. It's just another test of our resolve.",
      },
      {
        position: "LEFT",
        speaker: "Siggurd",
        image: "src/assets/images/dialogue/siggurd-dialogue.png",
        text: "And we shall face it with courage and strength. The light is with us, no matter the challenge.",
      },
    ],
  },
  LIHETH: {
    before: [
      {
        position: `RIGHT`,
        speaker: null,
        image: ``,
        text: `The flickering torchlight casts eerie shadows on the walls as a figure emerges from the darkness. The thief's eyes gleam with a predatory glint as they draw nearer.`,
      },
      {
        position: `RIGHT`,
        speaker: `Thief`,
        image: `src/assets/images/dialogue/thief-dialogue.png`,
        text: `"Well, well, what do we have here? A couple of easy marks. Stop right there."`,
      },
      {
        position: `RIGHT`,
        speaker: `Thief`,
        image: `src/assets/images/dialogue/thief-dialogue.png`,
        text: `"Hand over your valuables and anything of worth. If you cooperate, I promise we'll be on our way without further trouble."`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `"Wait a second. Let's talk this through. There must be another way."`,
      },
      {
        position: `RIGHT`,
        speaker: `Thief`,
        image: `src/assets/images/dialogue/thief-dialogue.png`,
        text: `"Save your breath. Either you give us what we want, or things will get messy. I'm not in the mood for negotiations."`,
      },
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `src/assets/images/dialogue/liheth-dialogue.png`,
        text: `"Do not be hasty. The light guides us, even in the face of greed. Let us find a way to resolve this without conflict."`,
      },
    ],
    responseRefuse: [
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `"I'm afraid I can't comply with your demands."`,
      },
      {
        position: `RIGHT`,
        speaker: `Thief`,
        image: `src/assets/images/dialogue/thief-dialogue.png`,
        text: `"Stubborn, are we? Well, we'll just have to take what we need by force."`,
      },
    ],
    afterSurrender: [
      {
        position: `RIGHT`,
        speaker: `Thief`,
        image: `src/assets/images/dialogue/thief-dialogue.png`,
        text: `"Much better. We wouldn't want any unnecessary harm."`,
      },
      {
        position: `RIGHT`,
        speaker: null,
        image: ``,
        text: `"The thief collects the valuables and retreats into the shadows, leaving you and Liheth behind."`,
      },
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `src/assets/images/dialogue/liheth-dialogue.png`,
        text: `"Though we've lost our belongings, we can take solace in the fact that we avoided unnecessary violence."`,
      },
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `"Indeed. Let's stay vigilant and not let this setback deter us from our mission."`,
      },
    ],
    afterRefuse: [
      {
        position: `LEFT`,
        speaker: `Spell Scripter`,
        image: `src/assets/images/dialogue/player-1-dialogue.png`,
        text: `"Seems like the darkness is full of thieves. They're always lurking, waiting for their next opportunity."`,
      },
      {
        position: `RIGHT`,
        speaker: `Liheth`,
        image: `src/assets/images/dialogue/liheth-dialogue.png`,
        text: `"True, but remember, the light within us can ward off such threats. Let us continue forward and keep our resolve strong."`,
      },
    ],
  },
};

export const UNLOCKING_SIGGURD_DIALOGUE = {
  before: [
    {
      position: "LEFT",
      speaker: null,
      image: "",
      text: "The dimly lit catacombs echo with the clashing sounds of battle. As you turn a corner, a fierce light breaks through the shadows. There, a lone paladin fights valiantly against a swarm of skeletons. His armor gleaming despite the grime, and his sword swings with precision and strength.",
    },
    {
      position: "RIGHT",
      speaker: "Siggurd",
      image: "src/assets/images/dialogue/siggurd-dialogue.png",
      text: `"Hyaaa!"`,
    },
    {
      position: "RIGHT",
      speaker: "Siggurd",
      image: "src/assets/images/dialogue/siggurd-dialogue.png",
      text: `"With the Light, I will strike you down!"`,
    },
    {
      position: "RIGHT",
      speaker: null,
      image: "src/assets/images/dialogue/siggurd-dialogue.png",
      text: "Siggurd's blade connects with a skeleton, its bones shattering into a pile of dust.",
    },
    {
      position: "LEFT",
      speaker: null,
      image: "",
      text: "Despite his skill and bravery, the skeletons continue to pour in from the dark corners of the catacombs, overwhelming him with their sheer numbers. His breath came in ragged gasps as he fought to keep them at bay.",
    },
    {
      position: "RIGHT",
      speaker: null,
      image: "src/assets/images/dialogue/siggurd-dialogue.png",
      text: "Siggurd notices you approaching and quickly calls out.",
    },
    {
      position: "RIGHT",
      speaker: "Siggurd",
      image: "src/assets/images/dialogue/siggurd-dialogue.png",
      text: `"Stranger, stay back! I'll defeat them alone!"`,
    },
    {
      position: "LEFT",
      speaker: "Spell Scripter",
      image: "src/assets/images/dialogue/player-1-dialogue.png",
      text: `"There are too many!"`,
    },
    {
      position: "LEFT",
      speaker: "Spell Scripter",
      image: "src/assets/images/dialogue/player-1-dialogue.png",
      text: `"I won't stand by and watch. Let's drive them back together!"`,
    },
  ],
  after: [
    {
      position: "RIGHT",
      speaker: "Siggurd",
      image: "src/assets/images/dialogue/siggurd-dialogue.png",
      text: `"Judgment has been delivered."`,
    },
    {
      position: "RIGHT",
      speaker: "Siggurd",
      image: "src/assets/images/dialogue/siggurd-dialogue.png",
      text: `"You fought bravely. Who are you?"`,
    },
    {
      position: "LEFT",
      speaker: "Spell Scripter",
      image: "src/assets/images/dialogue/player-1-dialogue.png",
      text: `"A student of the arcana. I'm here to master my skills and become a great spell scripter."`,
    },
    {
      position: "RIGHT",
      speaker: "Siggurd",
      image: "src/assets/images/dialogue/siggurd-dialogue.png",
      text: `"Well met. I am Siggurd, a paladin on a quest to purify the land of evil, and these catacombs harbor much of it."`,
    },
    {
      position: "LEFT",
      speaker: "Spell Scripter",
      image: "src/assets/images/dialogue/player-1-dialogue.png",
      text: `"We should stick together. Who knows what we may encounter down here?"`,
    },
    {
      position: "RIGHT",
      speaker: "Siggurd",
      image: "src/assets/images/dialogue/siggurd-dialogue.png",
      text: `"Hmm..."`,
    },
    {
      position: "RIGHT",
      speaker: null,
      image: "src/assets/images/dialogue/siggurd-dialogue.png",
      text: `He nods thoughtfully, considering your proposal.`,
    },
    {
      position: "RIGHT",
      speaker: "Siggurd",
      image: "src/assets/images/dialogue/siggurd-dialogue.png",
      text: `"A spell scripter would be a useful ally in these catacombs."`,
    },
    {
      position: "RIGHT",
      speaker: "Siggurd",
      image: "src/assets/images/dialogue/siggurd-dialogue.png",
      text: `"My journey will have dangers far greater than what we just overcame. Are you sure you want me to accompany you?"`,
    },
    {
      position: "LEFT",
      speaker: "Spell Scripter",
      image: "src/assets/images/dialogue/player-1-dialogue.png",
      text: `"What's a journey without danger?"`,
    },
    {
      position: "RIGHT",
      speaker: "Siggurd",
      image: "src/assets/images/dialogue/siggurd-dialogue.png",
      text: `"As you wish, spell scripter. Onward then."`,
    },
  ],
};

export const UNLOCKING_LIHETH_DIALOGUE = {
  before: [
    {
      position: "LEFT",
      speaker: null,
      image: "",
      text: `As you navigate through a shadowy corridor, you stumble upon a dimly lit chamber. A solitary figure stands amidst a flickering Candlelight Shrine, their face illuminated by the soft, trembling flame. The Candlelight Priestess, Liheth, is struggling to keep the shrine's light from extinguishing.`,
    },
    {
      position: "RIGHT",
      speaker: "Liheth",
      image: "src/assets/images/dialogue/liheth-dialogue.png",
      text: `“Hold it right there...”`,
    },
    {
      position: "RIGHT",
      speaker: "Liheth",
      image: "src/assets/images/dialogue/liheth-dialogue.png",
      text: `“Are you here to bask in the candlelight's warmth or to snuff it out?”`,
    },
    {
      position: "LEFT",
      speaker: "Spell Scripter",
      image: "src/assets/images/dialogue/player-1-dialogue.png",
      text: `“I'm just passing through. What's the significance of this place?”`,
    },
    {
      position: "RIGHT",
      speaker: "Liheth",
      image: "src/assets/images/dialogue/liheth-dialogue.png",
      text: `“This is a Candlelight Shrine, one of the last sanctuaries scattered throughout this catacomb.”`,
    },
    {
      position: "RIGHT",
      speaker: "Liheth",
      image: "src/assets/images/dialogue/liheth-dialogue.png",
      text: `“The sacred flames here are meant to guard against the encroaching darkness and to guide lost souls.”`,
    },
    {
      position: "LEFT",
      speaker: "Spell Scripter",
      image: "src/assets/images/dialogue/player-1-dialogue.png",
      text: `“I understand now. But why are you alone? This place seems overrun.”`,
    },
    {
      position: "RIGHT",
      speaker: "Liheth",
      image: "src/assets/images/dialogue/liheth-dialogue.png",
      text: `“I'm Liheth, one of the few remaining Candlelight Priestesses. My duty is to keep these shrines lit. But with the undead growing in number, I can't safely tend to the others.”`,
    },
    {
      position: "LEFT",
      speaker: "Spell Scripter",
      image: "src/assets/images/dialogue/player-1-dialogue.png",
      text: `“I'm heading further into the catacomb. We could work together to find and restore the other shrines.”`,
    },
    {
      position: "RIGHT",
      speaker: "Liheth",
      image: "src/assets/images/dialogue/liheth-dialogue.png",
      text: `“Are you offering to help me find the other shrines?”`,
    },
    {
      position: "RIGHT",
      speaker: "Liheth",
      image: "src/assets/images/dialogue/liheth-dialogue.png",
      text: `“I'm deeply grateful for your assistance. I didn't expect such kindness in these dark halls.”`,
    },
    {
      position: "RIGHT",
      speaker: "Liheth",
      image: "src/assets/images/dialogue/liheth-dialogue.png",
      text: `“Before we proceed, take a moment to rest. We both need our strength. I'll finish my duties here.”`,
    },
  ],
  after: [
    {
      position: "LEFT",
      speaker: null,
      image: "",
      text: `You awaken from your rest to find Liheth still at the shrine, her eyes now less weary. The shrine's light shines brightly, casting a warm glow in the chamber. Liheth stands nearby, preparing for the next leg of your journey.`,
    },
    {
      position: "RIGHT",
      speaker: "Liheth",
      image: "src/assets/images/dialogue/liheth-dialogue.png",
      text: `“Ah, you're up. I've finished what I could here. When you're ready, we can continue our search for the remaining shrines.”`,
    },
    {
      position: "LEFT",
      speaker: "Spell Scripter",
      image: "src/assets/images/dialogue/player-1-dialogue.png",
      text: `“Thanks for taking care of the shrine. I'm ready to move on. What's our next step?”`,
    },
    {
      position: "RIGHT",
      speaker: "Liheth",
      image: "src/assets/images/dialogue/liheth-dialogue.png",
      text: `“Now that we've restored this shrine, we need to focus on the others hidden throughout the catacomb. The undead won't wait for us to be prepared.”`,
    },
    {
      position: "LEFT",
      speaker: "Spell Scripter",
      image: "src/assets/images/dialogue/player-1-dialogue.png",
      text: `“Understood. Let's get going. The sooner we restore the shrines, the safer the catacomb will be.”`,
    },
  ],
};
