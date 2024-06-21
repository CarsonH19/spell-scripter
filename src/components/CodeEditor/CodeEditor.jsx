import classes from "./CodeEditor.module.css";

import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";

import Output from "./Output";

import { executeCode } from "../../util/code-editor";
import { useToast } from "@chakra-ui/react";

import { Button } from "@chakra-ui/react";

export default function CodeEditor({ code }) {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const toast = useToast();

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(sourceCode);
      setOutput(result.output);
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
      toast({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={classes["editor-container"]}>
      <div className={classes["editor-header"]}>
        <p>JS</p>
        <div>
          {/* <p>Output</p> */}
          <Button isLoading={isLoading} onClick={runCode}>
            Run Code
          </Button>
        </div>
      </div>
      <div className={classes["editor-columns"]}>
        <Editor
          height="100%"
          width="50%"
          theme="vs-dark"
          defaultLanguage="javascript"
          defaultValue={code}
          onMount={onMount}
          value={value}
          onChange={(value) => setValue(value)}
        />
        <Output output={output} isError={isError} />
      </div>
    </div>
  );
}
