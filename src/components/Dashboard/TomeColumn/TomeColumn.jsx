import classes from "./TomeColumn.module.css";

import { tomes } from "../../../data/tomes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react";
// import uiActions from ''

export default function TomeColumn() {
  const dispatch = useDispatch();

  const handleOpenTome = (tome) => {
    // updateTome 
    dispatch()
  };

  return (
    <div className={classes.column}>
      <h1>Tomes</h1>
      <p>Mastery Points: 0</p>
      <div className={classes.filter}>
        {/* Add a filter button logic */}
        <button>All</button>
        <button>Mastered</button>
        <button>Incomplete</button>
      </div>
      <div className={classes.tomes}>
        {/* Map each tome into a div element  */}
        {tomes.map((tome) => {
          if (tome.unlocked) {
            let status;
            if (tome.complete) {
              status = (
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className={classes.complete}
                />
              );
            } else {
              status = (
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className={classes.incomplete}
                />
              );
            }
            return (
              <div
                key={tome.name}
                className={classes.tome}
                onClick={() => handleOpenTome(tome.name)}
              >
                <h3>{tome.name}</h3>
                <progress></progress>
                {status}
              </div>
            );
          }
        })}
        {/* Add text into each div (Name) (Mastery %) */}
        {/* Allow overflow scrollbar */}
      </div>
    </div>
  );
}
