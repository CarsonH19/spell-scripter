const spellDescriptions = {
  FIREBOLT: (spellPower) => {
    return `Shoot a bolt of flame towards an enemy, dealing 6 - ${
      spellPower + 6
    } Fire damage.`;
  },
};

export default spellDescriptions;
