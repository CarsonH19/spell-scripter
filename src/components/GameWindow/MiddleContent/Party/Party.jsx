import classes from "./Party.module.css";

import Hero from "./Hero/Hero";

import { useSelector } from "react-redux";

export default function Party() {
  const heroes = useSelector((state) => state.hero.party);

  return (
    <div className={classes.party}>
      {heroes.map((hero) => (
        <Hero key={hero.id} hero={hero}/>
      ))}
    </div>
  );
}
