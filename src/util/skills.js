import store from "../store/index";

// Abjuration
export const createArcaneShield = () => {
  const abjuration = store.getState().spellbook.abjuration;
  const arcaneShield = abjuration.apprentice.find(
    (skill) => skill.name === "Arcane Shield"
  );
  const improvedArcaneShield = abjuration.adept.find(
    (skill) => skill.name === "Improved Arcane Shield"
  );

  return {
    name: "Arcane Shield",
    display: true,
    image: "src/assets/images/spellbook/abjuration/arcane-shield.png",
    type: "BUFF",
    description: "A magical shield empowered by Abjuration spells.",
    get currentHealth() {
      return improvedArcaneShield.points * 6;
    },
    get maxHealth() {
      return arcaneShield.points * 9 + 9;
    },
    get effect() {
      return [`${this.currentHealth}/${this.maxHealth}HP`];
    },
    reset: 1,
    stats: {},
  };
};
