import classes from "./AttributeModal.module.css";

import { uiActions } from "../../../store/ui-slice";
import Tooltip from "../../UI/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandFist,
  faPersonRunning,
  faHatWizard,
  faCaretLeft,
  faCaretRight,
  faCircleInfo,
  faCubes,
} from "@fortawesome/free-solid-svg-icons";

import { playerActions } from "../../../store/player-slice";
import updateStatTotals from "../../../store/stats-actions";

import { useDispatch, useSelector } from "react-redux";

export default function Attributes() {
  const dispatch = useDispatch();
  const player = useSelector((state) => state.player);
  const isInventoryOpen = useSelector((state) => state.ui.modal.inventoryModal);

  const handleChangeAttribute = (change, attribute) => {
    dispatch(playerActions.changeAttributes({ change, attribute }));
    updateStatTotals(dispatch, "Player");
  };
  return (
    <div className={classes["attributes-container"]}>
      {isInventoryOpen && <h4 className={classes.header}>Stats</h4>}
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
            <p className={classes["points"]}>{player.stats.baseStrength}</p>

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

            <p className={classes["points"]}>{player.stats.baseAgility}</p>

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
            <p className={classes["points"]}>{player.stats.baseArcana}</p>
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
