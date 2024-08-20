import { Howl } from "howler";

export const soundPaths = {
  // ===============================
  //           MISS
  // ===============================
  guard: {
    severMetalHit2: "public/assets/audio/sound/guard/Sever Metal Hit 2.mp3",
    swordImpactRock1: "public/assets/audio/sound/guard/Sword Impact Rock 1.mp3",
    swordHit4: "public/assets/audio/sound/guard/Sword Hit 4.mp3",
    swordHit7: "public/assets/audio/sound/guard/Sword Hit 7.mp3",
    eventShield: "public/assets/audio/sound/guard/Event, Shield.mp3",
  },
  miss: {
    miss1: "public/assets/audio/sound/guard/miss-1.mp3",
    miss2: "public/assets/audio/sound/guard/miss-2.mp3",
    miss3: "public/assets/audio/sound/guard/miss-3.mp3",
  },
  // ===============================
  //         ATTACKS
  // ===============================
  attack: {
    lihethAttack: "public/assets/audio/sound/magic/Magic Spell Whoosh 14.mp3",
  },
  fleshHit: {
    fleshHit1: "public/assets/audio/sound/attacks/flesh-hit/Flesh Hit 1.mp3",
    fleshHit3: "public/assets/audio/sound/attacks/flesh-hit/Flesh Hit 3.mp3",
    fleshHit4: "public/assets/audio/sound/attacks/flesh-hit/Flesh Hit 4.mp3",
    fleshHit5: "public/assets/audio/sound/attacks/flesh-hit/Flesh Hit 5.mp3",
    fleshHit11: "public/assets/audio/sound/attacks/flesh-hit/Flesh Hit 11.mp3",
  },
  punch: {
    impactPunchFace8:
      "public/assets/audio/sound/attacks/punch/Impact Punch Face 8.mp3",
    impactPunchHard:
      "public/assets/audio/sound/attacks/punch/Impact Punch Hard.mp3",
    punch1: "public/assets/audio/sound/attacks/punch/Punch 1.mp3",
    punchFaceMeatyFlesh:
      "public/assets/audio/sound/attacks/punch/Punch Face Meaty Flesh 3.mp3",
    impactPunchBody2:
      "public/assets/audio/sound/attacks/punch/Impact Punch Body 2.mp3",
  },
  // Decrepit Skeleton / Thief / Riven
  lightWeapon: {
    knifeSliceFace: "public/assets/audio/sound/attacks/light/Knife Slice Face.mp3",
    knifeStab1: "public/assets/audio/sound/attacks/light/Knife Stab 1.mp3",
    knifeStab: "public/assets/audio/sound/attacks/light/Knife Stab.mp3",
    knifeStabFleshWet:
      "public/assets/audio/sound/attacks/light/Knife Stab Flesh Wet.mp3",
    knifeThrowFlesh:
      "public/assets/audio/sound/attacks/light/Knife Throw Flesh.mp3",
    swordSlice: "public/assets/audio/sound/attacks/light/Sword Slice.mp3",
    swordDraw2: "public/assets/audio/sound/attacks/light/Sword Draw 2.mp3",
    swordThrow: "public/assets/audio/sound/attacks/light/Sword Throw.mp3",
  },
  // Siggurd / Skeletal Warrior / Death Knight
  heavyWeapon: {
    axeChopFlesh1: "public/assets/audio/sound/attacks/heavy/Axe Chop Flesh 1.mp3",
    axeChopFlesh2: "public/assets/audio/sound/attacks/heavy/Axe Chop Flesh 2.mp3",
    axeChopFlesh8: "public/assets/audio/sound/attacks/heavy/Axe Chop Flesh 8.mp3",
    axeChopFlesh10:
      "public/assets/audio/sound/attacks/heavy/Axe Chop Flesh 10.mp3",
    battleAxeStrike2:
      "public/assets/audio/sound/attacks/heavy/Battle Axe Strike 2.mp3",
    battleAxeStrike3:
      "public/assets/audio/sound/attacks/heavy/Battle Axe Strike 3.mp3",
    battleAxeThrow: "public/assets/audio/sound/attacks/heavy/Battle Axe Throw.mp3",
    axeThrowIntoBody2:
      "public/assets/audio/sound/attacks/heavy/Axe Throw Into Body 2.mp3",
    axeThrowIntoBody3:
      "public/assets/audio/sound/attacks/heavy/Axe Throw Into Body 3.mp3",
  },
  // Skeletal Archer - Multi-shot
  bowAttack: {
    bulletsPassBy4: "public/assets/audio/sound/attacks/Bullets Pass By 4.mp3",
    bulletsImpactFlesh26:
      "public/assets/audio/sound/attacks/Bullet Impact Flesh 26.mp3",
  },
  shootArrow: {
    shootArrow1: "public/assets/audio/sound/attacks/shoot-arrow-1.wav",
    shootArrow2: "public/assets/audio/sound/attacks/shoot-arrow-2.wav",
    shootArrow3: "public/assets/audio/sound/attacks/shoot-arrow-3.wav",
    shootArrow4: "public/assets/audio/sound/attacks/shoot-arrow-4.wav",
  },
  ghostAttack: {
    ghostAttack1: "public/assets/audio/sound/attacks/ghost/ghost-attack-1.mp3",
    ghostAttack2: "public/assets/audio/sound/attacks/ghost/ghost-attack-2.mp3",
    ghostAttack3: "public/assets/audio/sound/attacks/ghost/ghost-attack-3.mp3",
    ghostAttack4: "public/assets/audio/sound/attacks/ghost/ghost-attack-4.mp3",
  },

  // ===============================
  //           MAGIC
  // ===============================
  magic: {
    // EVOCATION
    shock: "public/assets/audio/sound/magic/shock.mp3",
    frostbite: "public/assets/audio/sound/magic/frostbite.mp3",
    fireball: "public/assets/audio/sound/magic/fireball.mp3",
    firebolt: "public/assets/audio/sound/magic/meteor.mp3",
    blizzard: "public/assets/audio/sound/magic/blizzard.mp3",
    chainLightning: "public/assets/audio/sound/magic/chain-lightning.mp3",
    stormSphere: "public/assets/audio/sound/magic/storm-sphere.mp3",
    stormSphereDamage: "public/assets/audio/sound/magic/storm-sphere-damage.mp3",
    meteor: "public/assets/audio/sound/magic/meteor.mp3",
    // ABJURATION
    barkskin: "public/assets/audio/sound/magic/barkskin.mp3",
    barrier: "public/assets/audio/sound/magic/barrier.mp3",
    deathWard: "public/assets/audio/sound/magic/death-ward.mp3",
    dispelMagic: "public/assets/audio/sound/magic/dispel-magic.mp3",
    invulnerability: "public/assets/audio/sound/magic/invulnerability.mp3",
    shell: "public/assets/audio/sound/magic/shell.mp3",
    steelskin: "public/assets/audio/sound/magic/steelskin.mp3",
    stoneskin: "public/assets/audio/sound/magic/stoneskin.mp3",
    protectFromEvil: "public/assets/audio/sound/magic/protect-from-evil.mp3",
    // CONJURATION
    conjure: "public/assets/audio/sound/magic/conjure.mp3",
    summon: "public/assets/audio/sound/magic/summon.mp3",
    // RESTORATION
    // Skeletal Mage attack
    iceWand: "public/assets/audio/sound/magic/ice-wand.mp3",
    magicSpellFire1: "public/assets/audio/sound/magic/Magic Spell Fire 1.mp3",
    magicSpellFire2: "public/assets/audio/sound/magic/Magic Spell Fire 2.mp3",
    magicSpellHit2: "public/assets/audio/sound/magic/Magic Spell Hit 2.mp3",
    magicSpellHit4: "public/assets/audio/sound/magic/Magic Spell Hit 4.mp3",

    magicSpellImpact: "public/assets/audio/sound/magic/Magic Spell Impact.mp3",
    magicWandCast8: "public/assets/audio/sound/magic/Magic Wand Cast 8.mp3",
    magicWandCast14: "public/assets/audio/sound/magic/Magic Wand Cast 14.mp3",
    magicSpellPassBy28:
      "public/assets/audio/sound/magic/Magic Spell Pass By 28.mp3",
    magicSpellWhoosh2: "public/assets/audio/sound/magic/Magic Spell Whoosh 2.mp3",
    magicSpellWhoosh4: "public/assets/audio/sound/magic/Magic Spell Whoosh 4.mp3",
    magicSpellWhoosh9: "public/assets/audio/sound/magic/Magic Spell Whoosh 9.mp3",
    magicSpellWhoosh22:
      "public/assets/audio/sound/magic/Magic Spell Whoosh 22.mp3",
  },
  // ===============================
  //            ABILITIES
  // ===============================
  abilities: {
    cleansingFlame: "public/assets/audio/sound/abilities/cleansing-flame.mp3",
    undyingFlame: "public/assets/audio/sound/abilities/undying-flame.mp3",
    divineGuardian: "public/assets/audio/sound/abilities/divine-guardian.mp3",
    venomStrike: "public/assets/audio/sound/abilities/venom-strike.mp3",
  },

  // ===============================
  //            SPAWN
  // ===============================
  spawn: {
    // Skeletons
    boneCrunchCrack1: "public/assets/audio/sound/Bone Crunch Crack 1.mp3",
    ratSqueak30: "public/assets/audio/sound/Rat Squeaks 30.mp3",
    ratSqueak9: "public/assets/audio/sound/Rat Squeaks 9.mp3",
    swordFromSheath3: "public/assets/audio/sound/Sword From Sheath 3.mp3",
    spiderDaddyLong1: "public/assets/audio/sound/Spider Daddy Long 1.mp3",
    spiderDaddyLong2: "public/assets/audio/sound/Spider Daddy Long 2.mp3",
    ghostAppearance1: "public/assets/audio/sound/Ghost Appearance 1.mp3",
    enemySnarl4: "public/assets/audio/sound/Monster Snarl 41.mp3",
  },
  // Undead Spawn
  undeadSpawn: {
    ghoulBeast1:
      "public/assets/audio/sound/spawn/Ghoul Beast, Vocalization, Moan, Growl, Scary 01.wav",
    ghoulBeast2:
      "public/assets/audio/sound/spawn/Ghoul Beast, Vocalization, Moan, Growl, Scary 02.wav",
    ghoulBeast3:
      "public/assets/audio/sound/spawn/Ghoul Beast, Vocalization, Moan, Growl, Scary 03.wav",
    ghoulBeast4:
      "public/assets/audio/sound/spawn/Ghoul Beast, Vocalization, Moan, Growl, Scary 04.wav",
    ghoulBeast5:
      "public/assets/audio/sound/spawn/Ghoul Beast, Vocalization, Moan, Growl, Scary 05.wav",
    ghoulBeast6:
      "public/assets/audio/sound/spawn/Ghoul Beast, Vocalization, Moan, Growl, Scary 06.wav",
    undeadClassic1: "public/assets/audio/sound/spawn/Undead, Classic 1.wav",
    undeadClassic2: "public/assets/audio/sound/spawn/Undead, Classic 2.wav",
    undeadClassic2: "public/assets/audio/sound/spawn/Undead, Classic 3.wav",
  },
  shadowSpawn: {
    shadowSpawn1: "public/assets/audio/sound/spawn/shadow-spawn-1.wav",
    shadowSpawn2: "public/assets/audio/sound/spawn/shadow-spawn-2.wav",
    shadowSpawn3: "public/assets/audio/sound/spawn/shadow-spawn-3.wav",
    shadowSpawn4: "public/assets/audio/sound/spawn/shadow-spawn-4.wav",
  },
  // Humanoid death
  fightGrunt: {
    fightGrunt1: "public/assets/audio/sound/Fight Grunt 1.mp3",
    fightGrunt2: "public/assets/audio/sound/Fight Grunt 2.mp3",
    fightGrunt3: "public/assets/audio/sound/Fight Grunt 3.mp3",
    fightGrunt6: "public/assets/audio/sound/Fight Grunt 6.mp3",
  },
  // Skeleton death
  boneBreak: {
    boneBreak: "public/assets/audio/sound/Bone Break.mp3",
    boneBreak6: "public/assets/audio/sound/Bone Break 6.mp3",
    boneBreak7: "public/assets/audio/sound/Bone Break 7.mp3",
    boneBreak8: "public/assets/audio/sound/Bone Break 8.mp3",
    spineBoneBreak1: "public/assets/audio/sound/Spine Bone Break 1.mp3",
    spineBoneBreak2: "public/assets/audio/sound/Spine Bone Break 2.mp3",
  },
  armorClankToTheGround: {
    armorMetalClanksToTheGround:
      "public/assets/audio/sound/Armor Metal Clanks to Ground.mp3",
    armorMetalClanksToTheGround2:
      "public/assets/audio/sound/Armor Metal Clanks to Ground 2.mp3",
    armorMetalClanksToTheGround3:
      "public/assets/audio/sound/Armor Metal Clanks to Ground 3.mp3",
  },
  // ===============================
  //          STATUS EFFECTS
  // ===============================
  statusEffects: {
    burning: "public/assets/audio/sound/status-effects/burning.mp3",
    stunned: "public/assets/audio/sound/magic/shock.mp3",
    haunted: "public/assets/audio/sound/status-effects/haunted.mp3",
  },
  // ===============================
  //          DEATH
  // ===============================
  death: {
    wispDeath: "public/assets/audio/sound/death/wisp-death.mp3",
    shadowDeath: "public/assets/audio/sound/death/shadow-death.mp3",
    bansheeDeath: "public/assets/audio/sound/death/banshee-death.mp3",
  },
  // ===============================
  //            ITEM
  // ===============================
  item: {
    gulpingWater24: "public/assets/audio/sound/items/Gulping Water 24.mp3",
    chewCrackersMouth: "public/assets/audio/sound/items/Chew Crackers Mouth.mp3",
    skeletonKey: "public/assets/audio/sound/items/Skeleton Key In 2.mp3",
    flameLicks2: "public/assets/audio/sound/items/Flame Licks 2.mp3",
    map: "public/assets/audio/sound/items/map.wav",
    // Laughin Coffin
    coinFlipLand: "public/assets/audio/sound/items/Coin Flip Land.mp3",
  },
  // ===============================
  //           EVENT
  // ===============================
  event: {
    metalSqueak21: "public/assets/audio/sound/Metal Squeak 21.mp3",
  },
  // inventory: {
  //   cameraBag2: "public/assets/audio/sound/misc/Camera Bag 2.mp3",
  // },
  // ===============================
  //            MISC
  // ===============================
  misc: {
    // Continue arrow
    whooshLowAir: "public/assets/audio/sound/Whoosh Low Air.mp3",
    // RoomSummaryModal
    hitReverbDark4: "public/assets/audio/sound/misc/Hit Reverb Dark 4.mp3",
    // Reset School Mastery
    shimmerCrysta: "public/assets/audio/sound/misc/Shimmer Crysta.mp3",
    // Dungeon & Path title
    enterDungeon: "public/assets/audio/sound/misc/enter-dungeon.mp3",
    // QTE
    openCoffin: "public/assets/audio/sound/misc/open-coffin.mp3",
    qteStart: "public/assets/audio/sound/misc/qte-start.mp3",
    correct: "public/assets/audio/sound/misc/correct.mp3",
    incorrect: "public/assets/audio/sound/misc/incorrect.mp3",
    encounter: "public/assets/audio/sound/misc/encounter.mp3",
  },
  openDoor: {
    openDoor1: "public/assets/audio/sound/misc/open-door-1.wav",
    openDoor2: "public/assets/audio/sound/misc/open-door-2.wav",
  },
  // ===============================
  //            DIALOGUE
  // ===============================
  dialogue: {
    dialogue1: "public/assets/audio/sound/misc/dialogue-1.wav",
    dialogue2: "public/assets/audio/sound/misc/dialogue-2.wav",
    dialogue3: "public/assets/audio/sound/misc/dialogue-3.wav",
    dialogue4: "public/assets/audio/sound/misc/dialogue-4.wav",
  },
  // ===============================
  //             UI
  // ===============================
  ui: {
    // Attunement
    magicStone: "public/assets/audio/sound/ui/Magic Stone.mp3",
    // Inc. Attribute & Next Dialogue
    medievalGUI1:
      "public/assets/audio/sound/ui/Medieval, GUI, Hover Over Menu Buttons 01.mp3",
    // Dec. Attribute & Prev. Dialogue
    medievalGUI2:
      "public/assets/audio/sound/ui/Medieval, GUI, Hover Over Menu Buttons 02.mp3",
    // Confirm enter
    GUIMenuButton:
      "public/assets/audio/sound/ui/GUI Menu Button, Select OK, Button, Start Game, Airy, Bright, Dark Reverb.mp3",
    //Modal open & Dialogue open
    softs: "public/assets/audio/sound/ui/Softs.wav",
    //Modal close & Dialogue close
    softs2: "public/assets/audio/sound/ui/Softs 2.wav",
    unattune: "public/assets/audio/sound/ui/unattune.mp3",
    trade: "public/assets/audio/sound/ui/trade.mp3",
    selectHero: "public/assets/audio/sound/ui/select-hero.mp3",
  },
  skill: {
    coldWhoosh3: "public/assets/audio/sound/ui/Cold, Whoosh 03.mp3",
    coldWhoosh10: "public/assets/audio/sound/ui/Cold, Whoosh 10.mp3",
    coldWhoosh14: "public/assets/audio/sound/ui/Cold, Whoosh 14.mp3",
    coldWhoosh16: "public/assets/audio/sound/ui/Cold, Whoosh 16.mp3",
    coldWhoosh19: "public/assets/audio/sound/ui/Cold, Whoosh 19.mp3",
  },
};

// // ===============================
// //       Player Abilities
// // ===============================

// const playerAbilitySounds = {
//   ghostlyWhoosh: new Howl({
//     public: ["public/assets/audio/sound/Ghostly Whoosh.mp3"],
//   }),
// };

// ===============================
//        Enemy Sounds
// ===============================

// const enemySounds = {
//   biteFleshCrunch1: new Howl({
//     public: ["public/assets/audio/sound/Bite Flesh Crunch 1.mp3"],
//   }),
//   biteFleshCrunch2: new Howl({
//     public: ["public/assets/audio/sound/Bite Flesh Crunch 2.mp3"],
//   }),
//   biteFleshCrunch4: new Howl({
//     public: ["public/assets/audio/sound/Bite Flesh Crunch 4.mp3"],
//   }),
//   spiderBiteFang3: new Howl({
//     public: ["public/assets/audio/sound/Spider Bite Fang 3.mp3"],
//   }),
//   spiderBiteFang4: new Howl({
//     public: ["public/assets/audio/sound/Spider Bite Fang 4.mp3"],
//   }),
//   spiderWebShoot7: new Howl({
//     public: ["public/assets/audio/sound/Spider Web Shoot 7.mp3"],
//   }),
//   larvaEggHatch4: new Howl({
//     public: ["public/assets/audio/sound/Larva Egg Hatch 4.mp3"],
//   }),
//   fleshRip1: new Howl({
//     public: ["public/assets/audio/sound/Flesh Rip 1.mp3"],
//   }),
//   bodyShove: new Howl({
//     public: ["public/assets/audio/sound/Body Shove.mp3"],
//   }),
// };

// // ===============================
// //        Enemy Spawn
// // ===============================

// // ===============================
// //        Enemt Attacks
// // ===============================

// const monsterAttackSounds = {
//   skullHitShovel: new Howl({
//     public: ["public/assets/audio/sound/Skull Hit Shovel.mp3"],
//   }),
//   torchPassBy1: new Howl({
//     public: ["public/assets/audio/sound/Torch Pass By 1.mp3"],
//   }),
//   fleshStab3: new Howl({
//     public: ["public/assets/audio/sound/Flesh Stab 3.mp3"],
//   }),
// };

// // ===============================
// //           ITEMS
// // ===============================

// const itemSounds = {
//   crystalWhoosh: new Howl({
//     public: ["public/assets/audio/sound/Whoosh Crystal.mp3"],
//   }),
//   // Wisp
//   ghostBreathWithReverb: new Howl({
//     public: ["public/assets/audio/sound/Ghostly Breath With Reverb.mp3"],
//   }),
//   // Whispering Skulls
//   evilSpell1: new Howl({
//     public: ["public/assets/audio/sound/Evil Spell 1.mp3"],
//   }),
//   // Demonic Grimoire
//   energyPresence4: new Howl({
//     public: ["public/assets/audio/sound/Energy Presence 4.mp3"],
//   }),
// };

// // ===============================
// //           EVENTS
// // ===============================

// const eventSounds = {
//   humanLaugh25: new Howl({
//     public: ["public/assets/audio/sound/Human Laugh 25.mp3"],
//   }),
//   ratsSqueak: new Howl({
//     public: ["public/assets/audio/sound/Rats Squeak.mp3"],
//   }),
//   crashRockStone: new Howl({
//     public: ["public/assets/audio/sound/Crash Rock Stone.mp3"],
//   }),
// };

// // ===============================
// //           MISC
// // ===============================

// const miscSounds = {
//   cameraBag2: new Howl({
//     public: ["public/assets/audio/sound/misc/Camera Bag 2.mp3"],
//   }),
//   cameraIntoBag: new Howl({
//     public: ["public/assets/audio/sound/misc/Camera Into Bag.mp3"],
//   }),
//   cauldronLargeBoil: new Howl({
//     public: ["public/assets/audio/sound/misc/Cauldron Large Boil.mp3"],
//   }),
//   evilSpellVoice1: new Howl({
//     public: ["public/assets/audio/sound/misc/Evil Spell Voice 1.mp3"],
//   }),
//   feedbackSwell4: new Howl({
//     public: ["public/assets/audio/sound/misc/Feedback Swell 4.mp3"],
//   }),
//   ghostEncounter: new Howl({
//     public: ["public/assets/audio/sound/misc/Ghost Encounter.mp3"],
//   }),
//   ghostlyDemonic: new Howl({
//     public: ["public/assets/audio/sound/misc/Ghostly Demonic.mp3"],
//   }),
//   ghostlyMagic: new Howl({
//     public: ["public/assets/audio/sound/misc/Ghostly Magic.mp3"],
//   }),
//   voiceClipMale226: new Howl({
//     public: ["public/assets/audio/sound/misc/Voice Clip Male 226.mp3"],
//   }),
//   magicMetallic: new Howl({
//     public: ["public/assets/audio/sound/misc/Magical Metallic.mp3"],
//   }),
//   pitchforkBody: new Howl({
//     public: ["public/assets/audio/sound/Pitchfork Body.mp3"],
//   }),
//   splashSubmerge2: new Howl({
//     public: ["public/assets/audio/sound/misc/Splash Submerge 2.mp3"],
//   }),
//   bloodDrips: new Howl({
//     public: ["public/assets/audio/sound/misc/Blood Drips.mp3"],
//   }),
//   ominousPresence: new Howl({
//     public: ["public/assets/audio/sound/misc/Ominous Presence.mp3"],
//   }),
//   doorSecretPassage1: new Howl({
//     public: ["public/assets/audio/sound/misc/Door Secret Passage 1.mp3"],
//   }),
// };

// // Dungeon
// enter dungeon
// room summary
// next room

// // Attributes
// Inc./Dec. Attribute

// // Hero
// Hero Select

// // Spellbook
// Select Skill
// Reset Mastery Points

// // Inventory
// Consumables
// Eat
// Drink

// Equipment
// Attune
// Unattune

// // Combat
// Spells
// Attacks
// Guard
// Abilities
// injury
// defeat
// enemy spawn

// // tome
// open / close
// next page

// // Player
// level up
// master tome

// QTE
// open
// answer
// success
// incorrect
