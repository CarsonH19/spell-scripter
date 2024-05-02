import classes from "./InventoryModal.module.css";

import { useSelector } from "react-redux";

import store from "../../../store/index";

export default function Stats() {
  let player;
  const dashboard = useSelector((state) => state.ui.dashboardIsVisible);
  if (!dashboard) {
    const order = store.getState().combat.order;
    player = order.find((char) => char.id === "Player");
  } else if (dashboard) {
    player = store.getState().player;
    console.log("PLAYER", player);
  }

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
