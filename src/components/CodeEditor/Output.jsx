import classes from "./CodeEditor.module.css";

export default function Output({ output, isError }) {
  console.log(isError);
  return (
    <div className={`${classes.output} ${isError ? classes.error : ""}`}>
      {output ? output : `Click "Run Code" to see the out put here!`}
    </div>
  );
}
