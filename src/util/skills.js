import store from "../store/index";

// Abjuration
export const createArcaneShield = () => {
  const abjuration = store.getState().spellbook.abjuration;
  const arcaneShield = abjuration.apprentice.find(
    (skill) => skill.name === "Arcane Shield"
  );
  const arcaneShieldPoints = arcaneShield.points;

  return {
    name: "Arcane Shield",
    display: true,
    image: "",
    type: "BUFF",
    description: "A magical shield empowered by Abjuration spells.",
    currentHealth: 0,
    get maxHealth() {
      return arcaneShieldPoints * 9 + 9;
    },
    get effect() {
      return [`${this.currentHealth}/${this.maxHealth}HP`];
    },
    reset: 1,
    stats: {},
  };
};
