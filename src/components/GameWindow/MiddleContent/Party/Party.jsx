import classes from "./Party.module.css";

import { useSelector } from "react-redux";

export default function Party() {
  const heroes = useSelector((state) => state.hero.party);
  console.log(heroes);

  return (
    <div className={classes.party}>
      {heroes.map((hero) => (
        <div key={hero.name}>{hero.name}</div>
      ))}
    </div>
  );
}
