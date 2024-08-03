import { Howl } from "howler";

export const guardSounds = {
  severMetalHit2: new Howl({
    src: ["src/assets/audio/sound/guard/Sever Metal Hit 2.mp3"],
    volume: 1.0,
  }),
  swordImpactRock1: new Howl({
    src: ["src/assets/audio/sound/guard/Sword Impact Rock 1.mp3"],
    volume: 1.0,
  }),
  swordHit4: new Howl({
    src: ["src/assets/audio/sound/guard/Sword Hit 4.mp3"],
    volume: 1.0,
  }),
  swordSwingWhoosh: new Howl({
    src: ["src/assets/audio/sound/guard/Sword Swing Whoosh.mp3"],
    volume: 1.0,
  }),
  swordHit7: new Howl({
    src: ["src/assets/audio/sound/guard/Sword Hit 7.mp3"],
    volume: 1.0,
  }),
};

const fleshHitSounds = {
  fleshHit1: new Howl({
    src: ["src/assets/audio/sound-effects/enemy/Flesh Hit 1.mp3"],
    volume: 1.0,
  }),
  fleshHit3: new Howl({
    src: ["src/assets/audio/sound-effects/enemy/Flesh Hit 3.mp3"],
    volume: 1.0,
  }),
  fleshHit4: new Howl({
    src: ["src/assets/audio/sound-effects/enemy/Flesh Hit 4.mp3"],
    volume: 1.0,
  }),
  fleshHit5: new Howl({
    src: ["src/assets/audio/sound-effects/enemy/Flesh Hit 5.mp3"],
    volume: 1.0,
  }),
  fleshHit11: new Howl({
    src: ["src/assets/audio/sound-effects/enemy/Flesh Hit 11.mp3"],
    volume: 1.0,
  }),
};

const heavyWeaponSounds = {
  // Heavy Weapon
  axeChopFlesh1: new Howl({
    src: ["src/assets/audio/sound-effects/heavy/Axe Chop Flesh 1.mp3"],
    volume: 1.0,
  }),
  axeChopFlesh2: new Howl({
    src: ["src/assets/audio/sound-effects/heavy/Axe Chop Flesh 2.mp3"],
    volume: 1.0,
  }),
  axeChopFlesh8: new Howl({
    src: ["src/assets/audio/sound-effects/heavy/Axe Chop Flesh 8.mp3"],
    volume: 1.0,
  }),
  axeChopFlesh10: new Howl({
    src: ["src/assets/audio/sound-effects/heavy/Axe Chop Flesh 10.mp3"],
    volume: 1.0,
  }),
  battleAxeStrike2: new Howl({
    src: ["src/assets/audio/sound-effects/heavy/Battle Axe Strike 2.mp3"],
    volume: 1.0,
  }),
  battleAxeStrike3: new Howl({
    src: ["src/assets/audio/sound-effects/heavy/Battle Axe Strike 3.mp3"],
    volume: 1.0,
  }),
  battleAxeThrow: new Howl({
    src: ["src/assets/audio/sound-effects/heavy/Battle Axe Throw.mp3"],
    volume: 1.0,
  }),
  axeThrowIntoBody2: new Howl({
    src: ["src/assets/audio/sound-effects/heavy/Axe Throw Into Body 2.mp3"],
    volume: 1.0,
  }),
  axeThrowIntoBody3: new Howl({
    src: ["src/assets/audio/sound-effects/heavy/Axe Throw Into Body 3.mp3"],
    volume: 1.0,
  }),
};

const punchSounds = {
  impactPunchFace8: new Howl({
    src: ["src/assets/audio/sound-effects/enemy/Impact Punch Face 8.mp3"],
    volume: 1.0,
  }),
  impactPunchHard: new Howl({
    src: ["src/assets/audio/sound-effects/enemy/Impact Punch Hard.mp3"],
    volume: 1.0,
  }),
  punch1: new Howl({
    src: ["src/assets/audio/sound-effects/enemy/Punch 1.mp3"],
    volume: 1.0,
  }),
  punchFaceMeatyFlesh: new Howl({
    src: ["src/assets/audio/sound-effects/enemy/Punch Face Meaty Flesh 3.mp3"],
    volume: 1.0,
  }),
  impactPunchBody2: new Howl({
    src: ["src/assets/audio/sound-effects/enemy/Impact Punch Body 2.mp3"],
    volume: 1.0,
  }),
};

export function getPunchSound() {
  let sounds = [
    punchSounds.impactPunchBody2,
    punchSounds.impactPunchFace8,
    punchSounds.impactPunchHard,
    punchSounds.punch1,
    punchSounds.punchFaceMeatyFlesh,
  ];
  let index = Math.floor(Math.random() * sounds.length);
  return sounds[index];
}

const lightWeaponSounds = {
  // Light Weapon
  knifeSliceFace: new Howl({
    src: ["src/assets/audio/sound-effects/light/Knife Slice Face.mp3"],
    volume: 1.0,
  }),
  knifeStab1: new Howl({
    src: ["src/assets/audio/sound-effects/light/Knife Stab 1.mp3"],
    volume: 1.0,
  }),
  knifeStab: new Howl({
    src: ["src/assets/audio/sound-effects/light/Knife Stab.mp3"],
    volume: 1.0,
  }),
  knifeStabFleshWet: new Howl({
    src: ["src/assets/audio/sound-effects/light/Knife Stab Flesh Wet.mp3"],
    volume: 1.0,
  }),
  knifeThrowFlesh: new Howl({
    src: ["src/assets/audio/sound-effects/light/Knife Throw Flesh.mp3"],
    volume: 1.0,
  }),
  swordSlice: new Howl({
    src: ["src/assets/audio/sound-effects/light/Sword Slice.mp3"],
    volume: 1.0,
  }),
  swordDraw2: new Howl({
    src: ["src/assets/audio/sound-effects/light/Sword Draw 2.mp3"],
    volume: 1.0,
  }),
  swordThrow: new Howl({
    src: ["src/assets/audio/sound-effects/light/Sword Throw.mp3"],
    volume: 1.0,
  }),
};

export function getLightWeaponSound() {
  let sounds = [
    lightWeaponSounds.knifeSliceFace,
    lightWeaponSounds.knifeStab,
    lightWeaponSounds.knifeStab1,
    lightWeaponSounds.knifeStabFleshWet,
    lightWeaponSounds.knifeThrowFlesh,
    lightWeaponSounds.swordDraw2,
    lightWeaponSounds.swordSlice,
    lightWeaponSounds.swordThrow,
  ];
  let index = Math.floor(Math.random() * sounds.length);
  return sounds[index];
}

export const magicSounds = {
  // Magic Sounds
  magicSpellFire1: new Howl({
    src: ["audio/sound-effects/magic/Magic Spell Fire 1.mp3"],
  }),
  magicSpellFire2: new Howl({
    src: ["audio/sound-effects/magic/Magic Spell Fire 2.mp3"],
  }),
  magicSpellHit2: new Howl({
    src: ["audio/sound-effects/magic/Magic Spell Hit 2.mp3"],
  }),
  magicSpellHit4: new Howl({
    src: ["audio/sound-effects/magic/Magic Spell Hit 4.mp3"],
  }),
  magicSpellImpact: new Howl({
    src: ["audio/sound-effects/magic/Magic Spell Impact.mp3"],
  }),
  magicWandCast8: new Howl({
    src: ["audio/sound-effects/magic/Magic Wand Cast 8.mp3"],
  }),
  magicWandCast14: new Howl({
    src: ["audio/sound-effects/magic/Magic Wand Cast 14.mp3"],
  }),
  magicSpellPassBy28: new Howl({
    src: ["audio/sound-effects/magic/Magic Spell Pass By 28.mp3"],
  }),
  magicSpellWhoosh2: new Howl({
    src: ["audio/sound-effects/magic/Magic Spell Whoosh 2.mp3"],
  }),
  magicSpellWhoosh4: new Howl({
    src: ["audio/sound-effects/magic/Magic Spell Whoosh 4.mp3"],
  }),
  magicSpellWhoosh9: new Howl({
    src: ["audio/sound-effects/magic/Magic Spell Whoosh 9.mp3"],
  }),
  magicSpellWhoosh14: new Howl({
    src: ["audio/sound-effects/magic/Magic Spell Whoosh 14.mp3"],
  }),
  magicSpellWhoosh22: new Howl({
    src: ["audio/sound-effects/magic/Magic Spell Whoosh 22.mp3"],
  }),
};

export function magicAttackSounds() {
  let sounds = [
    magicSounds.magicSpellFire1,
    magicSounds.magicSpellFire2,
    magicSounds.magicSpellHit2,
    magicSounds.magicSpellHit4,
    magicSounds.magicSpellImpact,
    magicSounds.magicSpellPassBy28,
    magicSounds.magicSpellWhoosh14,
    magicSounds.magicSpellWhoosh2,
    magicSounds.magicSpellWhoosh22,
    magicSounds.magicSpellWhoosh4,
    magicSounds.magicSpellWhoosh9,
  ];
  let index = Math.floor(Math.random() * sounds.length);
  return sounds[index];
}

export function magicGuardSounds() {
  let sounds = [
    magicSounds.magicSpellPassBy28,
    magicSounds.magicSpellWhoosh14,
    magicSounds.magicSpellWhoosh2,
    magicSounds.magicSpellWhoosh22,
    magicSounds.magicSpellWhoosh4,
    magicSounds.magicSpellWhoosh9,
  ];
  let index = Math.floor(Math.random() * sounds.length);
  return sounds[index];
}

// ===============================
//        Armor Clanking
// ===============================

export const armorSounds = {
  armorMetalClanksToTheGround: new Howl({
    src: ["audio/sound-effects/enemy/Armor Metal Clanks to Ground.mp3"],
  }),
  armorMetalClanksToTheGround2: new Howl({
    src: ["audio/sound-effects/enemy/Armor Metal Clanks to Ground 2.mp3"],
  }),
  armorMetalClanksToTheGround3: new Howl({
    src: ["audio/sound-effects/enemy/Armor Metal Clanks to Ground 3.mp3"],
  }),
};

export function getArmorSound() {
  let sounds = [
    armorSounds.armorMetalClanksToTheGround,
    armorSounds.armorMetalClanksToTheGround2,
    armorSounds.armorMetalClanksToTheGround3,
  ];
  let index = Math.floor(Math.random() * sounds.length);
  return sounds[index];
}

// ===============================
//       Player Abilities
// ===============================

const playerAbilitySounds = {
  ghostlyWhoosh: new Howl({
    src: ["audio/sound-effects/Ghostly Whoosh.mp3"],
  }),
};

// ===============================
//        Enemy Sounds
// ===============================

const enemySounds = {
  biteFleshCrunch1: new Howl({
    src: ["audio/sound-effects/enemy/Bite Flesh Crunch 1.mp3"],
  }),
  biteFleshCrunch2: new Howl({
    src: ["audio/sound-effects/enemy/Bite Flesh Crunch 2.mp3"],
  }),
  biteFleshCrunch4: new Howl({
    src: ["audio/sound-effects/enemy/Bite Flesh Crunch 4.mp3"],
  }),
  spiderBiteFang3: new Howl({
    src: ["audio/sound-effects/enemy/Spider Bite Fang 3.mp3"],
  }),
  spiderBiteFang4: new Howl({
    src: ["audio/sound-effects/enemy/Spider Bite Fang 4.mp3"],
  }),
  boneBreak: new Howl({
    src: ["audio/sound-effects/enemy/Bone Break.mp3"],
  }),
  boneBreak6: new Howl({
    src: ["audio/sound-effects/enemy/Bone Break 6.mp3"],
  }),
  boneBreak7: new Howl({
    src: ["audio/sound-effects/enemy/Bone Break 7.mp3"],
  }),
  boneBreak8: new Howl({
    src: ["audio/sound-effects/enemy/Bone Break 8.mp3"],
  }),
  boneCrunchCrack1: new Howl({
    src: ["audio/sound-effects/enemy/Bone Crunch Crack 1.mp3"],
  }),
  spineBoneBreak1: new Howl({
    src: ["audio/sound-effects/enemy/Spine Bone Break 1.mp3"],
  }),
  spineBoneBreak2: new Howl({
    src: ["audio/sound-effects/enemy/Spine Bone Break 2.mp3"],
  }),
  fightGrunt1: new Howl({
    src: ["audio/sound-effects/enemy/Fight Grunt 1.mp3"],
  }),
  fightGrunt2: new Howl({
    src: ["audio/sound-effects/enemy/Fight Grunt 2.mp3"],
  }),
  fightGrunt3: new Howl({
    src: ["audio/sound-effects/enemy/Fight Grunt 3.mp3"],
  }),
  fightGrunt6: new Howl({
    src: ["audio/sound-effects/enemy/Fight Grunt 6.mp3"],
  }),
  spiderWebShoot7: new Howl({
    src: ["audio/sound-effects/Spider Web Shoot 7.mp3"],
  }),
  larvaEggHatch4: new Howl({
    src: ["audio/sound-effects/Larva Egg Hatch 4.mp3"],
  }),
  iceCrackFreeze: new Howl({
    src: ["audio/sound-effects/Ice Crack Freeze.mp3"],
  }),
  fleshRip1: new Howl({
    src: ["audio/sound-effects/Flesh Rip 1.mp3"],
  }),
  bodyShove: new Howl({
    src: ["audio/sound-effects/Body Shove.mp3"],
  }),
};

// ===============================
//        Enemy Spawn
// ===============================

const enemySpawnSounds = {
  ratSqueak30: new Howl({
    src: ["audio/sound-effects/Rat Squeaks 30.mp3"],
  }),
  ratSqueak9: new Howl({
    src: ["audio/sound-effects/Rat Squeaks 9.mp3"],
  }),
  swordFromSheath3: new Howl({
    src: ["audio/sound-effects/Sword From Sheath 3.mp3"],
  }),
  spiderDaddyLong1: new Howl({
    src: ["audio/sound-effects/Spider Daddy Long 1.mp3"],
  }),
  spiderDaddyLong2: new Howl({
    src: ["audio/sound-effects/Spider Daddy Long 2.mp3"],
  }),
  ghostAppearance1: new Howl({
    src: ["audio/sound-effects/Ghost Appearance 1.mp3"],
  }),
  enemySnarl4: new Howl({
    src: ["audio/sound-effects/enemy/Monster Snarl 41.mp3"],
  }),
};

// ===============================
//        Enemt Attacks
// ===============================

const monsterAttackSounds = {
  skullHitShovel: new Howl({
    src: ["audio/sound-effects/Skull Hit Shovel.mp3"],
  }),
  whooshGhostBy1: new Howl({
    src: ["audio/sound-effects/Whoosh Ghost By 1.mp3"],
  }),
  whooshGhostBy2: new Howl({
    src: ["audio/sound-effects/Whoosh Ghost By 2.mp3"],
  }),
  whooshGhost: new Howl({
    src: ["audio/sound-effects/Whoosh Ghost.mp3"],
  }),
  torchPassBy1: new Howl({
    src: ["audio/sound-effects/Torch Pass By 1.mp3"],
  }),
  fleshStab3: new Howl({
    src: ["audio/sound-effects/Flesh Stab 3.mp3"],
  }),
};

// ===============================
//         MONSTER DEATH
// ===============================

const enemyDeathSounds = {
  alienSpiderWeb3: new Howl({
    src: ["audio/sound-effects/Alien Spider Web 3.mp3"],
  }),
  insectsSpider3: new Howl({
    src: ["audio/sound-effects/Insects Spider.mp3"],
  }),
  ghostHowl: new Howl({
    src: ["audio/sound-effects/Ghost Howl.mp3"],
  }),
  ghostShriekWhoosh: new Howl({
    src: ["audio/sound-effects/Ghost Shriek Whoosh.mp3"],
  }),
  monsterSnarl3: new Howl({
    src: ["audio/sound-effects/enemy/Monster Snarl 38.mp3"],
  }),
};

// ===============================
//           ITEMS
// ===============================

const itemSounds = {
  flameLicks2: new Howl({
    src: ["audio/sound-effects/Flame Licks 2.mp3"],
  }),
  skeletonKeyIn2: new Howl({
    src: ["audio/sound-effects/Skeleton Key In 2.mp3"],
  }),
  coinFlipLand: new Howl({
    src: ["audio/sound-effects/Coin Flip Land.mp3"],
  }),
  crystalWhoosh: new Howl({
    src: ["audio/sound-effects/Whoosh Crystal.mp3"],
  }),
  // Food
  chewCrackersMouth: new Howl({
    src: ["audio/sound-effects/Chew Crackers Mouth.mp3"],
  }),
  // Drink
  gulpingWater24: new Howl({
    src: ["audio/sound-effects/Gulping Water 24.mp3"],
  }),
  // Wisp
  ghostBreathWithReverb: new Howl({
    src: ["audio/sound-effects/Ghostly Breath With Reverb.mp3"],
  }),
  // Whispering Skulls
  evilSpell1: new Howl({
    src: ["audio/sound-effects/Evil Spell 1.mp3"],
  }),
  // Demonic Grimoire
  energyPresence4: new Howl({
    src: ["audio/sound-effects/Energy Presence 4.mp3"],
  }),
};

// ===============================
//           EVENTS
// ===============================

const eventSounds = {
  humanLaugh25: new Howl({
    src: ["audio/sound-effects/Human Laugh 25.mp3"],
  }),
  ratsSqueak: new Howl({
    src: ["audio/sound-effects/Rats Squeak.mp3"],
  }),
  bulletsPassBy4: new Howl({
    src: ["audio/sound-effects/Bullets Pass By 4.mp3"],
  }),
  bulletsImpactFlesh26: new Howl({
    src: ["audio/sound-effects/Bullet Impact Flesh 26.mp3"],
  }),
  crashRockStone: new Howl({
    src: ["audio/sound-effects/Crash Rock Stone.mp3"],
  }),
  gasLeakHose3: new Howl({
    src: ["audio/sound-effects/Gas Leak Hose 3.mp3"],
  }),
  metalSqueak21: new Howl({
    src: ["audio/sound-effects/Metal Squeak 21.mp3"],
  }),
};

// ===============================
//           MISC
// ===============================

const miscSounds = {
  whooshLowAir: new Howl({
    src: ["audio/sound-effects/Whoosh Low Air.mp3"],
  }),
  cameraBag2: new Howl({
    src: ["audio/sound-effects/misc/Camera Bag 2.mp3"],
  }),
  cameraIntoBag: new Howl({
    src: ["audio/sound-effects/misc/Camera Into Bag.mp3"],
  }),
  cauldronLargeBoil: new Howl({
    src: ["audio/sound-effects/misc/Cauldron Large Boil.mp3"],
  }),
  evilSpellVoice1: new Howl({
    src: ["audio/sound-effects/misc/Evil Spell Voice 1.mp3"],
  }),
  feedbackSwell4: new Howl({
    src: ["audio/sound-effects/misc/Feedback Swell 4.mp3"],
  }),
  ghostEncounter: new Howl({
    src: ["audio/sound-effects/misc/Ghost Encounter.mp3"],
  }),
  ghostlyDemonic: new Howl({
    src: ["audio/sound-effects/misc/Ghostly Demonic.mp3"],
  }),
  ghostlyMagic: new Howl({
    src: ["audio/sound-effects/misc/Ghostly Magic.mp3"],
  }),
  hitReverbDark4: new Howl({
    src: ["audio/sound-effects/misc/Hit Reverb Dark 4.mp3"],
  }),
  shimmerCrystal: new Howl({
    src: ["audio/sound-effects/misc/Shimmer Crysta.mp3"],
  }),
  voiceClipMale226: new Howl({
    src: ["audio/sound-effects/misc/Voice Clip Male 226.mp3"],
  }),
  magicMetallic: new Howl({
    src: ["audio/sound-effects/misc/Magical Metallic.mp3"],
  }),
  pitchforkBody: new Howl({
    src: ["audio/sound-effects/Pitchfork Body.mp3"],
  }),
  splashSubmerge2: new Howl({
    src: ["audio/sound-effects/misc/Splash Submerge 2.mp3"],
  }),
  bloodDrips: new Howl({
    src: ["audio/sound-effects/misc/Blood Drips.mp3"],
  }),
  ominousPresence: new Howl({
    src: ["audio/sound-effects/misc/Ominous Presence.mp3"],
  }),
  doorSecretPassage1: new Howl({
    src: ["audio/sound-effects/misc/Door Secret Passage 1.mp3"],
  }),
};

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
