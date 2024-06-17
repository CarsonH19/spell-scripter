const spellDescriptions = {
  // EVOCATION
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
    return `Evoke a frigid snowstorm for 3 rounds, potentially inflicting the Chilled condition on all enemies at the start of each of your turns.`;
  },
  STORM_SPHERE: (spellPower) => {
    return `Surround yourself in a sphere of lightning, dealing ${Math.round(
      spellPower / 2
    )} Lightning damage to all enemies who Attack you for 3 rounds.`;
  },
  METEOR: (spellPower) => {
    return `Rain down cataclysmic fire, inflicting the Burning condition and dealing 18 to ${
      spellPower + 18
    } Fire damage to all enemies.`;
  },
};

export default spellDescriptions;
