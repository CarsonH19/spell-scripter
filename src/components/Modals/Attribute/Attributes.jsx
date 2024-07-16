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
  const inDungeon = useSelector((state) => state.ui.gameWindowIsVisible);

  const handleChangeAttribute = (change, attribute) => {
    dispatch(playerActions.changeAttributes({ change, attribute }));
    updateStatTotals(dispatch, "Player");
  };
  return (
    <div className={classes["attributes-container"]}>
      {inDungeon && <h4>Stats</h4>}
      {!inDungeon && (
        <div className={classes.cubes}>
          <FontAwesomeIcon icon={faCubes} />

          <h4>{player.attributePoints}</h4>
        </div>
      )}

      <div className={classes.stats}>
        <div className={classes.attribute}>
          <h4>Strength</h4>
          {!inDungeon && (
            <FontAwesomeIcon
              icon={faCaretLeft}
              className={classes["arrow-icon"]}
              onClick={() => handleChangeAttribute("DECREASE", "STRENGTH")}
            />
          )}

          {/* <Tooltip
            title={"Strength Attribute:"}
            detailOne={
              "Strength determines your Max HP, HP Regeneration, and Attack."
            }
          > */}
          <p className={classes["points"]}>{player.stats.baseStrength}</p>

          {/* </Tooltip> */}
          {!inDungeon && (
            <FontAwesomeIcon
              icon={faCaretRight}
              className={classes["arrow-icon"]}
              onClick={() => handleChangeAttribute("INCREASE", "STRENGTH")}
            />
          )}

          {/* <FontAwesomeIcon
            icon={faHandFist}
            className={classes["attribute-icon"]}
          /> */}
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
          {!inDungeon && (
            <FontAwesomeIcon
              icon={faCaretLeft}
              className={classes["arrow-icon"]}
              onClick={() => handleChangeAttribute("DECREASE", "AGILITY")}
            />
          )}
          {/* <Tooltip
            title={"Agility Attribute:"}
            detailOne={
              "Agility determines your Defense, Hit Chance, and Speed."
            }
          > */}
          <p className={classes["points"]}>{player.stats.baseAgility}</p>

          {/* </Tooltip> */}
          {!inDungeon && (
            <FontAwesomeIcon
              icon={faCaretRight}
              className={classes["arrow-icon"]}
              onClick={() => handleChangeAttribute("INCREASE", "AGILITY")}
            />
          )}
          {/* <FontAwesomeIcon
            icon={faPersonRunning}
            className={classes["attribute-icon"]}
          /> */}
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
          {!inDungeon && (
            <FontAwesomeIcon
              icon={faCaretLeft}
              className={classes["arrow-icon"]}
              onClick={() => handleChangeAttribute("DECREASE", "ARCANA")}
            />
          )}
          {/* <Tooltip
            title={"Arcana Attribute:"}
            detailOne={
              "Arcana determines your Max MP, MP Regeneration, and Spell Power."
            }
          > */}
          <p className={classes["points"]}>{player.stats.baseArcana}</p>

          {/* </Tooltip> */}
          {!inDungeon && (
            <FontAwesomeIcon
              icon={faCaretRight}
              className={classes["arrow-icon"]}
              onClick={() => handleChangeAttribute("INCREASE", "ARCANA")}
            />
          )}
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
