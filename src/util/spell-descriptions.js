const spellDescriptions = {
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
};

export default spellDescriptions;
