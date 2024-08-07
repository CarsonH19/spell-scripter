import { Howl } from "howler";

export const soundPaths = {
  guard: {
    severMetalHit2: "src/assets/audio/sound/guard/Sever Metal Hit 2.mp3",
    swordImpactRock1: "src/assets/audio/sound/guard/Sword Impact Rock 1.mp3",
    swordHit4: "src/assets/audio/sound/guard/Sword Hit 4.mp3",
    swordHit7: "src/assets/audio/sound/guard/Sword Hit 7.mp3",
    eventShield: "src/assets/audio/sound/guard/Event, Shield.mp3",
  },
  miss: {
    swordSwingWhoosh: "src/assets/audio/sound/guard/Sword Swing Whoosh.mp3",
  },
  fleshHit: {
    fleshHit1: "src/assets/audio/sound/Flesh Hit 1.mp3",
    fleshHit3: "src/assets/audio/sound/Flesh Hit 3.mp3",
    fleshHit4: "src/assets/audio/sound/Flesh Hit 4.mp3",
    fleshHit5: "src/assets/audio/sound/Flesh Hit 5.mp3",
    fleshHit11: "src/assets/audio/sound/Flesh Hit 11.mp3",
  },
  punch: {
    impactPunchFace8: "src/assets/audio/sound/Impact Punch Face 8.mp3",
    impactPunchHard: "src/assets/audio/sound/Impact Punch Hard.mp3",
    punch1: "src/assets/audio/sound/Punch 1.mp3",
    punchFaceMeatyFlesh: "src/assets/audio/sound/Punch Face Meaty Flesh 3.mp3",
    impactPunchBody2: "src/assets/audio/sound/Impact Punch Body 2.mp3",
  },
  // Decrepit Skeleton / Thief / Riven
  lightWeapon: {
    knifeSliceFace: "src/assets/audio/sound/light/Knife Slice Face.mp3",
    knifeStab1: "src/assets/audio/sound/light/Knife Stab 1.mp3",
    knifeStab: "src/assets/audio/sound/light/Knife Stab.mp3",
    knifeStabFleshWet: "src/assets/audio/sound/light/Knife Stab Flesh Wet.mp3",
    knifeThrowFlesh: "src/assets/audio/sound/light/Knife Throw Flesh.mp3",
    swordSlice: "src/assets/audio/sound/light/Sword Slice.mp3",
    swordDraw2: "src/assets/audio/sound/light/Sword Draw 2.mp3",
    swordThrow: "src/assets/audio/sound/light/Sword Throw.mp3",
  },
  // Siggurd / Skeletal Warrior / Death Knight
  heavyWeapon: {
    axeChopFlesh1: "src/assets/audio/sound/heavy/Axe Chop Flesh 1.mp3",
    axeChopFlesh2: "src/assets/audio/sound/heavy/Axe Chop Flesh 2.mp3",
    axeChopFlesh8: "src/assets/audio/sound/heavy/Axe Chop Flesh 8.mp3",
    axeChopFlesh10: "src/assets/audio/sound/heavy/Axe Chop Flesh 10.mp3",
    battleAxeStrike2: "src/assets/audio/sound/heavy/Battle Axe Strike 2.mp3",
    battleAxeStrike3: "src/assets/audio/sound/heavy/Battle Axe Strike 3.mp3",
    battleAxeThrow: "src/assets/audio/sound/heavy/Battle Axe Throw.mp3",
    axeThrowIntoBody2: "src/assets/audio/sound/heavy/Axe Throw Into Body 2.mp3",
    axeThrowIntoBody3: "src/assets/audio/sound/heavy/Axe Throw Into Body 3.mp3",
  },
  // Skeletal Archer - Multi-shot
  bowAttack: {
    bulletsPassBy4: "src/assets/audio/sound/Bullets Pass By 4.mp3",
    bulletsImpactFlesh26: "src/assets/audio/sound/Bullet Impact Flesh 26.mp3",
  },
  magic: {
    shock: "src/assets/audio/sound/magic/shock.mp3",
    frostbite: "src/assets/audio/sound/magic/frostbite.mp3",
    fireball: "src/assets/audio/sound/magic/fireball.mp3",
    firebolt: "src/assets/audio/sound/magic/meteor.mp3",
    meteor: "src/assets/audio/sound/magic/meteor.mp3",
    barkskin: "src/assets/audio/sound/magic/barkskin.mp3",
    barrier: "src/assets/audio/sound/magic/barrier.mp3",
    blizzard: "src/assets/audio/sound/magic/blizzard.mp3",
    chainLightning: "src/assets/audio/sound/magic/chain-lightning.mp3",
    deathWard: "src/assets/audio/sound/magic/death-ward.mp3",
    dispelMagic: "src/assets/audio/sound/magic/dispel-magic.mp3",
    invulnerability: "src/assets/audio/sound/magic/invulnerability.mp3",
    shell: "src/assets/audio/sound/magic/shell.mp3",
    shock: "src/assets/audio/sound/magic/shock.mp3",
    steelskin: "src/assets/audio/sound/magic/steelskin.mp3",
    stoneskin: "src/assets/audio/sound/magic/stoneskin.mp3",
    wardFromEvil: "src/assets/audio/sound/magic/ward-from-evil.mp3",
    // Skeletal Mage attack
    iceCrackFreeze: "src/assets/audio/sound/Ice Crack Freeze.mp3",
    magicSpellFire1: "src/assets/audio/sound/magic/Magic Spell Fire 1.mp3",
    magicSpellFire2: "src/assets/audio/sound/magic/Magic Spell Fire 2.mp3",
    magicSpellHit2: "src/assets/audio/sound/magic/Magic Spell Hit 2.mp3",
    magicSpellHit4: "src/assets/audio/sound/magic/Magic Spell Hit 4.mp3",
    // Liheth attack
    magicSpellImpact: "src/assets/audio/sound/magic/Magic Spell Impact.mp3",
    magicWandCast8: "src/assets/audio/sound/magic/Magic Wand Cast 8.mp3",
    magicWandCast14: "src/assets/audio/sound/magic/Magic Wand Cast 14.mp3",
    // Liheth - Undying Flame
    magicSpellWhoosh14:
      "src/assets/audio/sound/magic/Magic Spell Whoosh 14.mp3",
    magicSpellPassBy28:
      "src/assets/audio/sound/magic/Magic Spell Pass By 28.mp3",
    // Liheth - Cleansing Flame
    magicSpellWhoosh2: "src/assets/audio/sound/magic/Magic Spell Whoosh 2.mp3",
    magicSpellWhoosh4: "src/assets/audio/sound/magic/Magic Spell Whoosh 4.mp3",
    magicSpellWhoosh9: "src/assets/audio/sound/magic/Magic Spell Whoosh 9.mp3",
    magicSpellWhoosh22:
      "src/assets/audio/sound/magic/Magic Spell Whoosh 22.mp3",
    conjure: "src/assets/audio/sound/magic/conjure.mp3",
    summon: "src/assets/audio/sound/magic/summon.mp3",
  },
  armorClankToTheGround: {
    armorMetalClanksToTheGround:
      "src/assets/audio/sound/Armor Metal Clanks to Ground.mp3",
    armorMetalClanksToTheGround2:
      "src/assets/audio/sound/Armor Metal Clanks to Ground 2.mp3",
    armorMetalClanksToTheGround3:
      "src/assets/audio/sound/Armor Metal Clanks to Ground 3.mp3",
  },
  spawn: {
    // Skeletons
    boneCrunchCrack1: "src/assets/audio/sound/Bone Crunch Crack 1.mp3",
    ratSqueak30: "src/assets/audio/sound/Rat Squeaks 30.mp3",
    ratSqueak9: "src/assets/audio/sound/Rat Squeaks 9.mp3",
    swordFromSheath3: "src/assets/audio/sound/Sword From Sheath 3.mp3",
    spiderDaddyLong1: "src/assets/audio/sound/Spider Daddy Long 1.mp3",
    spiderDaddyLong2: "src/assets/audio/sound/Spider Daddy Long 2.mp3",
    ghostAppearance1: "src/assets/audio/sound/Ghost Appearance 1.mp3",
    enemySnarl4: "src/assets/audio/sound/Monster Snarl 41.mp3",
  },
  // Undead Spawn
  undeadSpawn: {
    ghoulBeast1:
      "src/assets/audio/sound/spawn/Ghoul Beast, Vocalization, Moan, Growl, Scary 01.wav",
    ghoulBeast2:
      "src/assets/audio/sound/spawn/Ghoul Beast, Vocalization, Moan, Growl, Scary 02.wav",
    ghoulBeast3:
      "src/assets/audio/sound/spawn/Ghoul Beast, Vocalization, Moan, Growl, Scary 03.wav",
    ghoulBeast4:
      "src/assets/audio/sound/spawn/Ghoul Beast, Vocalization, Moan, Growl, Scary 04.wav",
    ghoulBeast5:
      "src/assets/audio/sound/spawn/Ghoul Beast, Vocalization, Moan, Growl, Scary 05.wav",
    ghoulBeast6:
      "src/assets/audio/sound/spawn/Ghoul Beast, Vocalization, Moan, Growl, Scary 06.wav",
    undeadClassic1: "src/assets/audio/sound/spawn/Undead, Classic 1.wav",
    undeadClassic2: "src/assets/audio/sound/spawn/Undead, Classic 2.wav",
    undeadClassic2: "src/assets/audio/sound/spawn/Undead, Classic 3.wav",
  },
  // Humanoid death
  fightGrunt: {
    fightGrunt1: "src/assets/audio/sound/Fight Grunt 1.mp3",
    fightGrunt2: "src/assets/audio/sound/Fight Grunt 2.mp3",
    fightGrunt3: "src/assets/audio/sound/Fight Grunt 3.mp3",
    fightGrunt6: "src/assets/audio/sound/Fight Grunt 6.mp3",
  },
  // Skeleton death
  boneBreak: {
    boneBreak: "src/assets/audio/sound/Bone Break.mp3",
    boneBreak6: "src/assets/audio/sound/Bone Break 6.mp3",
    boneBreak7: "src/assets/audio/sound/Bone Break 7.mp3",
    boneBreak8: "src/assets/audio/sound/Bone Break 8.mp3",
    spineBoneBreak1: "src/assets/audio/sound/Spine Bone Break 1.mp3",
    spineBoneBreak2: "src/assets/audio/sound/Spine Bone Break 2.mp3",
  },
  item: {
    gulpingWater24: "src/assets/audio/sound/Gulping Water 24.mp3",
    chewCrackersMouth: "src/assets/audio/sound/Chew Crackers Mouth.mp3",
    skeletonKeyIn2: "src/assets/audio/sound/Skeleton Key In 2.mp3",
    flameLicks2: "src/assets/audio/sound/Flame Licks 2.mp3",
  },
  event: {
    // Poisonous Mist
    gasLeakHose3: "src/assets/audio/sound/Gas Leak Hose 3.mp3",
    metalSqueak21: "src/assets/audio/sound/Metal Squeak 21.mp3",
    // Laughin Coffin
    coinFlipLand: "src/assets/audio/sound/Coin Flip Land.mp3",
  },
  inventory: {
    cameraBag2: "src/assets/audio/sound/misc/Camera Bag 2.mp3",
  },
  misc: {
    // Continue arrow
    whooshLowAir: "src/assets/audio/sound/Whoosh Low Air.mp3",
    // RoomSummaryModal
    hitReverbDark4: "src/assets/audio/sound/misc/Hit Reverb Dark 4.mp3",
    // Choose a skill
    shimmerCrysta: "src/assets/audio/sound/misc/Shimmer Crysta.mp3",
    // Dungeon & Path title
    enterDungeon: "src/assets/audio/sound/misc/enter-dungeon.mp3",
    openCoffin: "src/assets/audio/sound/misc/open-coffin.mp3"
  },
  ui: {
    // Attunement
    magicStone: "src/assets/audio/sound/ui/Magic Stone.mp3",
    // Inc. Attribute
    medievalGUI1:
      "src/assets/audio/sound/ui/Medieval, GUI, Hover Over Menu Buttons 01.mp3",
    // Dec. Attribute
    medievalGUI2:
      "src/assets/audio/sound/ui/Medieval, GUI, Hover Over Menu Buttons 02.mp3",
    // Confirm enter
    GUIMenuButton:
      "src/assets/audio/sound/ui/GUI Menu Button, Select OK, Button, Start Game, Airy, Bright, Dark Reverb.mp3",
    //Modal open
    softs: "src/assets/audio/sound/ui/Softs.wav",
    //Modal close
    softs2: "src/assets/audio/sound/ui/Softs 2.wav",
  },
  skill: {
    coldWhoosh3: "src/assets/audio/sound/ui/Cold, Whoosh 03.mp3",
    coldWhoosh10: "src/assets/audio/sound/ui/Cold, Whoosh 10.mp3",
    coldWhoosh14: "src/assets/audio/sound/ui/Cold, Whoosh 14.mp3",
    coldWhoosh16: "src/assets/audio/sound/ui/Cold, Whoosh 16.mp3",
    coldWhoosh19: "src/assets/audio/sound/ui/Cold, Whoosh 19.mp3",
  },
};

// // ===============================
// //       Player Abilities
// // ===============================

// const playerAbilitySounds = {
//   ghostlyWhoosh: new Howl({
//     src: ["src/assets/audio/sound/Ghostly Whoosh.mp3"],
//   }),
// };

// // ===============================
// //        Enemy Sounds
// // ===============================

// const enemySounds = {
//   biteFleshCrunch1: new Howl({
//     src: ["src/assets/audio/sound/Bite Flesh Crunch 1.mp3"],
//   }),
//   biteFleshCrunch2: new Howl({
//     src: ["src/assets/audio/sound/Bite Flesh Crunch 2.mp3"],
//   }),
//   biteFleshCrunch4: new Howl({
//     src: ["src/assets/audio/sound/Bite Flesh Crunch 4.mp3"],
//   }),
//   spiderBiteFang3: new Howl({
//     src: ["src/assets/audio/sound/Spider Bite Fang 3.mp3"],
//   }),
//   spiderBiteFang4: new Howl({
//     src: ["src/assets/audio/sound/Spider Bite Fang 4.mp3"],
//   }),
//   spiderWebShoot7: new Howl({
//     src: ["src/assets/audio/sound/Spider Web Shoot 7.mp3"],
//   }),
//   larvaEggHatch4: new Howl({
//     src: ["src/assets/audio/sound/Larva Egg Hatch 4.mp3"],
//   }),
//   fleshRip1: new Howl({
//     src: ["src/assets/audio/sound/Flesh Rip 1.mp3"],
//   }),
//   bodyShove: new Howl({
//     src: ["src/assets/audio/sound/Body Shove.mp3"],
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
//     src: ["src/assets/audio/sound/Skull Hit Shovel.mp3"],
//   }),
//   whooshGhostBy1: new Howl({
//     src: ["src/assets/audio/sound/Whoosh Ghost By 1.mp3"],
//   }),
//   whooshGhostBy2: new Howl({
//     src: ["src/assets/audio/sound/Whoosh Ghost By 2.mp3"],
//   }),
//   whooshGhost: new Howl({
//     src: ["src/assets/audio/sound/Whoosh Ghost.mp3"],
//   }),
//   torchPassBy1: new Howl({
//     src: ["src/assets/audio/sound/Torch Pass By 1.mp3"],
//   }),
//   fleshStab3: new Howl({
//     src: ["src/assets/audio/sound/Flesh Stab 3.mp3"],
//   }),
// };

// // ===============================
// //         MONSTER DEATH
// // ===============================

// const enemyDeathSounds = {
//   alienSpiderWeb3: new Howl({
//     src: ["src/assets/audio/sound/Alien Spider Web 3.mp3"],
//   }),
//   insectsSpider3: new Howl({
//     src: ["src/assets/audio/sound/Insects Spider.mp3"],
//   }),
//   ghostHowl: new Howl({
//     src: ["src/assets/audio/sound/Ghost Howl.mp3"],
//   }),
//   ghostShriekWhoosh: new Howl({
//     src: ["src/assets/audio/sound/Ghost Shriek Whoosh.mp3"],
//   }),
//   monsterSnarl3: new Howl({
//     src: ["src/assets/audio/sound/Monster Snarl 38.mp3"],
//   }),
// };

// // ===============================
// //           ITEMS
// // ===============================

// const itemSounds = {
//   crystalWhoosh: new Howl({
//     src: ["src/assets/audio/sound/Whoosh Crystal.mp3"],
//   }),
//   // Wisp
//   ghostBreathWithReverb: new Howl({
//     src: ["src/assets/audio/sound/Ghostly Breath With Reverb.mp3"],
//   }),
//   // Whispering Skulls
//   evilSpell1: new Howl({
//     src: ["src/assets/audio/sound/Evil Spell 1.mp3"],
//   }),
//   // Demonic Grimoire
//   energyPresence4: new Howl({
//     src: ["src/assets/audio/sound/Energy Presence 4.mp3"],
//   }),
// };

// // ===============================
// //           EVENTS
// // ===============================

// const eventSounds = {
//   humanLaugh25: new Howl({
//     src: ["src/assets/audio/sound/Human Laugh 25.mp3"],
//   }),
//   ratsSqueak: new Howl({
//     src: ["src/assets/audio/sound/Rats Squeak.mp3"],
//   }),
//   crashRockStone: new Howl({
//     src: ["src/assets/audio/sound/Crash Rock Stone.mp3"],
//   }),
// };

// // ===============================
// //           MISC
// // ===============================

// const miscSounds = {
//   cameraBag2: new Howl({
//     src: ["src/assets/audio/sound/misc/Camera Bag 2.mp3"],
//   }),
//   cameraIntoBag: new Howl({
//     src: ["src/assets/audio/sound/misc/Camera Into Bag.mp3"],
//   }),
//   cauldronLargeBoil: new Howl({
//     src: ["src/assets/audio/sound/misc/Cauldron Large Boil.mp3"],
//   }),
//   evilSpellVoice1: new Howl({
//     src: ["src/assets/audio/sound/misc/Evil Spell Voice 1.mp3"],
//   }),
//   feedbackSwell4: new Howl({
//     src: ["src/assets/audio/sound/misc/Feedback Swell 4.mp3"],
//   }),
//   ghostEncounter: new Howl({
//     src: ["src/assets/audio/sound/misc/Ghost Encounter.mp3"],
//   }),
//   ghostlyDemonic: new Howl({
//     src: ["src/assets/audio/sound/misc/Ghostly Demonic.mp3"],
//   }),
//   ghostlyMagic: new Howl({
//     src: ["src/assets/audio/sound/misc/Ghostly Magic.mp3"],
//   }),
//   voiceClipMale226: new Howl({
//     src: ["src/assets/audio/sound/misc/Voice Clip Male 226.mp3"],
//   }),
//   magicMetallic: new Howl({
//     src: ["src/assets/audio/sound/misc/Magical Metallic.mp3"],
//   }),
//   pitchforkBody: new Howl({
//     src: ["src/assets/audio/sound/Pitchfork Body.mp3"],
//   }),
//   splashSubmerge2: new Howl({
//     src: ["src/assets/audio/sound/misc/Splash Submerge 2.mp3"],
//   }),
//   bloodDrips: new Howl({
//     src: ["src/assets/audio/sound/misc/Blood Drips.mp3"],
//   }),
//   ominousPresence: new Howl({
//     src: ["src/assets/audio/sound/misc/Ominous Presence.mp3"],
//   }),
//   doorSecretPassage1: new Howl({
//     src: ["src/assets/audio/sound/misc/Door Secret Passage 1.mp3"],
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
