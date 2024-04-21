import classes from "./Party.module.css";

import Hero from "./Hero/Hero";

import { useSelector } from "react-redux";

export default function Party() {
  const heroes = useSelector((state) => state.hero.party);
  console.log(heroes);

  return (
    <div className={classes.party}>
      {heroes.map((hero, index) => (
        <Hero key={index} hero={hero}/>
      ))}
    </div>
  );
}
