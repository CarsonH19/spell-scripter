import classes from "./CodeEditor.module.css";

export default function Output({ output }) {
  return (
    <div className={classes.output}>
      {output ? output : `Click "Run Code" to see the out put here!`}
    </div>
  );
}
