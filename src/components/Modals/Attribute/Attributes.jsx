import classes from "./AttributeModal.module.css";

import store from "../../../store/index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";

import { playerActions } from "../../../store/player-slice";
import updateStatTotals from "../../../store/stats-actions";

import { useDispatch, useSelector } from "react-redux";
import playSoundEffect from "../../../util/audio-util";

export default function Attributes() {
  const dispatch = useDispatch();
  let player;
  const isInventoryOpen = useSelector((state) => state.ui.modal.inventoryModal);
  const dashboard = store.getState().ui.dashboardIsVisible;

  if (!dashboard) {
    const order = store.getState().combat.order;
    player = order.find((char) => char.id === "Player");
  } else {
    player = useSelector((state) => state.player);
  }

  const handleChangeAttribute = (change, attribute) => {
    dispatch(playerActions.changeAttributes({ change, attribute }));
    updateStatTotals(dispatch, "Player");

    if (change === "INCREASE") playSoundEffect(false, "ui", "medievalGUI1");
    if (change === "DECREASE") playSoundEffect(false, "ui", "medievalGUI2");
  };
  return (
    <div className={classes["attributes-container"]}>
      {!isInventoryOpen && (
        <div
          className={classes.cubes}
          style={{
            color: player.attributePoints > 0 ? "var(--accent)" : "var(--text)",
          }}
        >
          <FontAwesomeIcon icon={faCubes} />

          <h4>{player.attributePoints}</h4>
        </div>
      )}

      <div className={classes.stats}>
        <div className={classes.attribute}>
          <h4>Strength</h4>
          <div>
            {!isInventoryOpen && (
              <FontAwesomeIcon
                icon={faCaretLeft}
                className={classes["arrow-icon"]}
                onClick={() => handleChangeAttribute("DECREASE", "STRENGTH")}
              />
            )}
            <p className={classes["points"]}>
              {player.stats.strength.totalStrength}
            </p>

            {!isInventoryOpen && (
              <FontAwesomeIcon
                icon={faCaretRight}
                className={classes["arrow-icon"]}
                onClick={() => handleChangeAttribute("INCREASE", "STRENGTH")}
              />
            )}
          </div>
        </div>
        <p className={classes.stat}>
          Max HP: {player.stats.strength.maxHealth}
        </p>
        <p className={classes.stat}>
          Attack: {Math.floor(player.stats.strength.attack / 2)} -{" "}
          {player.stats.strength.attack}
        </p>
        <p className={classes.stat}>
          HP Regeneration: {player.stats.strength.healthRegen}
        </p>
      </div>

      <div className={classes.stats}>
        <div className={classes.attribute}>
          <h4>Agility</h4>
          <div>
            {!isInventoryOpen && (
              <FontAwesomeIcon
                icon={faCaretLeft}
                className={classes["arrow-icon"]}
                onClick={() => handleChangeAttribute("DECREASE", "AGILITY")}
              />
            )}

            <p className={classes["points"]}>
              {player.stats.agility.totalAgility}
            </p>

            {!isInventoryOpen && (
              <FontAwesomeIcon
                icon={faCaretRight}
                className={classes["arrow-icon"]}
                onClick={() => handleChangeAttribute("INCREASE", "AGILITY")}
              />
            )}
          </div>
        </div>
        <p className={classes.stat}>Defense: {player.stats.agility.defense}</p>
        <p className={classes.stat}>
          Hit Chance Bonus: +{player.stats.agility.hitChance}
        </p>
        <p className={classes.stat}>
          Speed Bonus: +{player.stats.agility.speed}
        </p>
      </div>

      <div className={classes.stats}>
        <div className={classes.attribute}>
          <h4>Arcana</h4>
          <div>
            {!isInventoryOpen && (
              <FontAwesomeIcon
                icon={faCaretLeft}
                className={classes["arrow-icon"]}
                onClick={() => handleChangeAttribute("DECREASE", "ARCANA")}
              />
            )}
            <p className={classes["points"]}>
              {player.stats.arcana.totalArcana}
            </p>
            {!isInventoryOpen && (
              <FontAwesomeIcon
                icon={faCaretRight}
                className={classes["arrow-icon"]}
                onClick={() => handleChangeAttribute("INCREASE", "ARCANA")}
              />
            )}
          </div>
        </div>
        <p className={classes.stat}>Max MP: {player.stats.arcana.maxMana}</p>
        <p className={classes.stat}>
          Spell Power: {player.stats.arcana.spellPower}
        </p>
        <p className={classes.stat}>
          MP Regeneration: {player.stats.arcana.manaRegen}
        </p>
      </div>
    </div>
  );
}

export function calculateAttributePoints() {
  const player = store.getState().player;
  console.log(player);
  return (
    player.level +
    2 -
    player.stats.baseStrength -
    player.stats.baseAgility -
    player.stats.baseArcana
  );
}
