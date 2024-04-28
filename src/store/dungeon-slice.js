import { createSlice } from "@reduxjs/toolkit";

const dungeonSlice = createSlice({
  name: "dungeon",
  initialState: {
    roomName: "",
    image: null,
    music: null,
    contents: {
      enemies: [],
      items: [],
      event: null,
    },
  },
  reducers: {
    updateRoom(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    addEnemy(state, action) {
      // action: enemy.id
      state.contents.enemies.push(action.payload);
    },
    updateHealth(state, action) {
      const id = action.payload.id;
      const change = action.payload.change;
      let value = action.payload.value;

      const findEnemyById = (id) => {
        const enemies = state.contents.enemies;
        return enemies.find((enemy) => enemy.id === id);
      };

      const enemy = findEnemyById(id);

      if (change === "DAMAGE") {
        enemy.currentHealth = enemy.currentHealth - value;
      }

      // Prevents Falling Below 0
      if (enemy.currentHealth < 0) {
        enemy.currentHealth = 0;
      }

      if (change === "HEAL") {
        enemy.currentHealth = enemy.currentHealth + value;
      }

      // Prevents Healing Above Max
      if (enemy.currentHealth > enemy.stats.strength.maxHealth) {
        enemy.currentHealth = enemy.stats.strength.maxHealth;
      }
    },
    updateStats(state, action) {
      // Strength
      const id = action.payload.id;

      const findEnemyById = (id) => {
        const enemies = state.contents.enemies;
        return enemies.find((enemy) => enemy.id === id);
      };

      const enemy = findEnemyById(id);

      enemy.stats.strength.totalStrength = action.payload.totalStrength;
      enemy.stats.strength.maxHealth = action.payload.maxHealth;
      enemy.stats.strength.attack = action.payload.attack;

      // Check if current HP is greater than max HP
      if (state.currentHealth > enemy.stats.strength.maxHealth) {
        state.currentHealth = enemy.stats.strength.maxHealth;
      }

      // Agility
      enemy.stats.agility.totalAgility = action.payload.totalAgility;
      enemy.stats.agility.defense = action.payload.defense;
      enemy.stats.agility.speed = action.payload.speed;
      enemy.stats.agility.hitChance = action.payload.hitChance;

      // Arcana
      enemy.stats.arcana.totalArcana = action.payload.totalArcana;
      enemy.stats.arcana.spellPower = action.payload.spellPower;
      enemy.stats.arcana.maxMana = action.payload.maxMana;
    },
    updateStatusEffects(state, action) {
      const id = action.payload.id;
      const change = action.payload.change;
      const statusEffect = action.payload.statusEffect;

      const findEnemyById = (id) => {
        const enemies = state.contents.enemies;
        return enemies.find((enemy) => enemy.id === id);
      };

      const enemy = findEnemyById(id);

      if (enemy) {
        switch (change) {
          case "ADD":
            enemy.statusEffects.push(statusEffect);
            break;
          case "REMOVE":
            {
              const statusIndex = enemy.statusEffects.findIndex(
                (effect) => effect.name === statusEffect.name
              );

              if (statusIndex !== -1) {
                enemy.statusEffects.splice(statusIndex, 1);
              }
            }
            break;
        }
      }
    },
    changeEnemies(state, action) {
      const enemy = action.payload.enemy;
      const change = action.payload.change;

      const enemies = state.contents.enemies;

      if (change === "ADD") {
        enemies.push(enemy);
      }

      if (change === "REMOVE") {
        const enemyIndex = state.contents.enemies.findIndex(
          (char) => char.id === enemy.id
        );

        if (enemyIndex !== -1) {
          // Remove the enemy if it exists
          enemies.splice(enemyIndex, 1);
        }
      }
    },
    addItem(state, action) {
      // action: item object
      state.contents.items.push(action.payload);
    },
    removeItem(state, action) {
      const itemName = action.payload;
      state.contents.items = state.contents.items.filter(
        (item) => item.name !== itemName
      );
    },
    // addMonster(state, action) {},
    // removeMonster(state, action) {},
  },
});

export const dungeonActions = dungeonSlice.actions;

export default dungeonSlice;
