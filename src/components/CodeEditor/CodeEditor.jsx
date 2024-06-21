import classes from "./CodeEditor.module.css";

import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";

import Output from "./Output";

import { executeCode } from "../../util/code-editor";

export default function CodeEditor({ code }) {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [output, setOutput] = useState(null);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      const { run: result } = await executeCode(sourceCode);
      setOutput(result.output);
    } catch (error) {}
  };

  return (
    <div className={classes["editor-container"]}>
      <div className={classes["editor-header"]}>
        <p>JS</p>
        <div>
          {/* <p>Output</p> */}
          <button onClick={runCode}>Run Code</button>
        </div>
      </div>
      <div className={classes["editor-columns"]}>
        <Editor
          height="90%"
          width="50%"
          theme="vs-dark"
          defaultLanguage="javascript"
          defaultValue={code}
          onMount={onMount}
          value={value}
          onChange={(value) => setValue(value)}
        />
        <Output output={output}/>
      </div>
    </div>
  );
}
