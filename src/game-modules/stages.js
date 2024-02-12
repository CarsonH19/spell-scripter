import { ENEMIES } from "./enemies";

const STAGE_TYPES = {
  COMBAT: "COMBAT",
  CHALLENGE: "CHALLENGE",
  NPC: "NPC",
};

const stages = {
  // =====================================================================
  // IronJour Timberland Stages
  // =====================================================================

  ironjourTimberland: {
    area: "Ironjour Timberland",
    stage1: {
      name: "Fellwood",
      unlocked: true,
      description: "",
      background: null,
      music: null,
      type: STAGE_TYPES.COMBAT,
      ENEMIES: [ENEMIES.WITHERSAP_DRYAD, ENEMIES.WOOD_WOAD, ENEMIES.WOOD_WOAD],
    },
    stage2: {
      name: "Aboretum",
      unlocked: false,
      description: "",
      background: null,
      music: null,
      type: STAGE_TYPES.NPC,
    },
    stage3: {
      name: "Fellsaw Logging Camp",
      unlocked: false,
      description: "",
      background: null,
      music: null,
      type: STAGE_TYPES.COMBAT,
    },
    stage4: {
      name: "Fellsaw Lumbermill",
      unlocked: false,
      description: "",
      background: null,
      music: null,
      type: STAGE_TYPES.CHALLENGE,
    },
    stage5: {
      name: "Bristlepine Post",
      unlocked: false,
      description: "",
      background: null,
      music: null,
      type: STAGE_TYPES.COMBAT,
    },
    stage6: {
      name: "Eldijour, the First Tree",
      unlocked: false,
      description: "",
      background: null,
      music: null,
      type: STAGE_TYPES.NPC,
    },
  },
};
