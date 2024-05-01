import classes from "./InventoryModal.module.css";

import { useSelector } from "react-redux";

export default function Stats() {
  const order = useSelector((state) => state.combat.order);
  const index = order.findIndex((char) => char.id === "Player");
  const player = order[index];

  return (
    <div className={classes.stats}>
      <h3>Stats</h3>
      <hr />
      <div>
        <h4>{player.name}</h4>
        <p>Level: {player.level}</p>
      </div>

      <div>
        <h4>Strength: {player.stats.strength.totalStrength}</h4>
        <p>
          {" "}
          Health: {player.currentHealth} / {player.stats.strength.maxHealth}
        </p>
        <p> Attack: {player.stats.strength.attack}</p>
      </div>

      <div>
        <h4>Agility: {player.stats.agility.totalAgility}</h4>
        <p>Defense: {player.stats.agility.defense}</p>
        <p>Hit Chance: +{player.stats.agility.hitChance}</p>
        <p>Speed: {player.stats.agility.speed}</p>
      </div>

      <div>
        <h4>Arcana: {player.stats.arcana.totalArcana}</h4>
        <p>
          Mana: {player.currentMana} / {player.stats.arcana.maxMana}
        </p>
        <p>Spell Power: {player.stats.arcana.spellPower}</p>
      </div>
    </div>
  );
}
