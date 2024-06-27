const spellDescriptions = {
  // =======================================
  //                EVOCATION
  // =======================================
  FIREBOLT: (spellPower) => {
    return `Shoot a bolt of flame at an enemy, dealing 6 - ${
      spellPower + 6
    } Fire damage.`;
  },
  FROSTBITE: (spellPower) => {
    return `Envelope an enemy in frost, dealing 8 - ${
      spellPower + 8
    } Ice damage.`;
  },
  SHOCK: (spellPower) => {
    return `Shock an enemy with electricity, dealing 10 - ${
      spellPower + 10
    } Lightning damage.`;
  },
  FIREBALL: (spellPower) => {
    return `Shoot a ball of fire that explodes, dealing 8 to ${
      spellPower + 8
    } Fire damage to all enemies.`;
  },
  CHAIN_LIGHTNING: (spellPower) => {
    return `Shoot a bolt of lighting which has a chance to leap to additional targets, dealing 14 to ${
      spellPower + 14
    } Lightning damage to each target it hits.`;
  },
  BLIZZARD: () => {
    return `Evoke a frigid snowstorm, inflicting the Chilled condition on all enemies.`;
  },
  STORM_SPHERE: (spellPower) => {
    return `Surround yourself in a sphere of lightning, dealing ${Math.round(
      spellPower / 2
    )} Lightning damage to all enemies who Attack you for 1 room.`;
  },
  METEOR: (spellPower) => {
    return `Rain down cataclysmic fire, inflicting the Burning condition and dealing 18 to ${
      spellPower + 18
    } Fire damage to all enemies.`;
  },
  // =======================================
  //                ABJURATION
  // =======================================
  BARK_SKIN: () => {
    return `Give a target the durability of bark, increasing the target's Defense +1 for 3 rounds.`;
  },
  BARRIER: () => {
    return `Place a magical barrier around a target. The next instance of damage received by the target is halved and the spell ends.`;
  },
  BOUNDLESS: () => {
    return `Protect a target from being Restrained. The target gains immunity to the Restrained condition for 3 rounds.`;
  },
  DEATH_WARD: () => {
    return `Place a ward on a target protecting it from death. If the target falls below 0HP, it instead retains 1HP and the spell ends.`;
  },
  DISPEL_MAGIC: () => {
    return `Dispel a random magical effect on a target that is making it more powerful.`;
  },
  WARD_FROM_EVIL: () => {
    return `Place a ward on a target protecting it from evil. Undead creatures that attack the target will have an increased chance to miss their attacks.`;
  },
  STONE_SKIN: () => {
    return `Give a target the durability of stone, increasing the target's Defense +2 for 3 rounds.`;
  },
  STEEL_SKIN: () => {
    return `Give a target the durability of steel, increasing the target's Defense +3 for 3 rounds.`;
  },
  SHELL: () => {
    return `Place a magical shell around a target. All instances of damage received by the target are halved for 3 rounds.`;
  },
  INVULNERABILITY: () => {
    return `Grant a target invulnerability. The target cannot be damaged for 3 rounds.`;
  },
};

export default spellDescriptions;
