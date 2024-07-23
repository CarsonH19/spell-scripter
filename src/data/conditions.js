const CONDITIONS = {
  BURNING: {
    name: "Burning",
    display: true,
    image: "",
    type: "DEBUFF",
    description:
      "The target takes Fire damage at the start of each of its turns.",
    effect: [""],
    durationType: "ROUND",
    duration: 3,
    reset: 3,
    stats: {},
    function: "BURNING",
    when: "START TURN",
  },
  POISONED: {
    name: "Poisoned",
    display: true,
    image: "",
    type: "DEBUFF",
    stack: 1,
    get effect() {
      return [
        `The target takes ${this.stack} damage at the end of each of its turns.`,
      ];
    },
    durationType: "ROOM",
    duration: 10,
    reset: 10,
    stats: {},
    function: "POISONED",
    when: "END TURN",
  },
  CHILLED: {
    name: "Chilled",
    display: true,
    image: "",
    type: "DEBUFF",
    stack: 1,
    get effect() {
      return [`Agility -${this.stack}`];
    },
    durationType: "ROUND",
    duration: 3,
    reset: 3,
    get stats() {
      return {
        agility: {
          agilityChange: -1 * this.stack,
        },
      };
    },
  },
  STUNNED: {
    name: "Stunned",
    display: true,
    image: "",
    type: "DEBUFF",
    effect: ["The target can't take an action on its turn."],
    durationType: "ROUND",
    duration: 1,
    reset: 1,
    stats: {},
  },
  RESTRAINED: {
    name: "Restrained",
    display: true,
    image: "",
    type: "DEBUFF",
    description: "The target is unable to move freely.",
    effect: ["The target can only take the Guard action."],
    durationType: "ROUND",
    duration: 1,
    reset: 1,
    stats: {},
  },
  GUARD: {
    name: "Guarding",
    display: true,
    image: "",
    type: "BUFF",
    description: "Guarding from incoming attacks.",
    effect: ["Defense +50%"],
    durationType: "ROUND",
    duration: 1,
    reset: 1,
    stats: {},
  },
};

export default CONDITIONS;
