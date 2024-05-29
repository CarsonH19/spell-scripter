import classes from "./Threat.module.css";

import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkull } from "@fortawesome/free-solid-svg-icons";

import Tooltip from "../../../UI/Tooltip";

export default function Threat() {
  const threat = useSelector((state) => state.dungeon.threat);

  return (
    <div className={classes.container}>
      <Tooltip 
        title={"Threat:"} 
        position={"threat"}
        detailOne={"Threat determines the difficulty of the encounters you will face. Threat is raised after each cleared room, when a spell fails, and other specific instances."}
      >
        <FontAwesomeIcon icon={faSkull} className={classes.skull}/>
      </Tooltip>
      <p className={classes.number}>{threat}</p>
    </div>
  );
}
