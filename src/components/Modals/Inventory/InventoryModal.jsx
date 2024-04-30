import classes from "./InventoryModal.module.css";

import { useState } from "react";

// import Tooltip from "../../UI/Tooltip";

export default function InventoryModal({ player }) {
  const [active, setActive] = useState(1);

  const handleButtonClick = (index) => {
    setActive(index);
    console.log(index);
  };

  console.log(active);

  return (
    <div className={classes.inventory}>
      <h1>Inventory</h1>
      <div className={classes.container}>
        <div className={classes.left}>
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
                Health: {player.currentHealth} /{" "}
                {player.stats.strength.maxHealth}
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
          {/* <div className={classes.party}>
            <h3>Party</h3>
            <hr />

          </div> */}
        </div>
        {/* <div className={classes.vertical}></div> */}
        <div className={classes.right}>
          <div className={classes.buttons}>
            <button
              className={active === 1 ? classes.active : ""}
              onClick={() => handleButtonClick(1)}
            >
              Equipment
            </button>
            <button
              className={active === 2 ? classes.active : ""}
              onClick={() => handleButtonClick(2)}
            >
              Consumables
            </button>
            <button
              className={active === 3 ? classes.active : ""}
              onClick={() => handleButtonClick(3)}
            >
              Quest Items
            </button>
          </div>
          <div className={classes.items}>Items (map items)</div>
          <div className={classes.attuned}>
            <h3>Attuned</h3>
            <ul>{/* Map array of attuned items (5 max) */}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}
