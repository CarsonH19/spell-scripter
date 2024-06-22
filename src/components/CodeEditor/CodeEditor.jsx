import classes from "./CodeEditor.module.css";

import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";

import Output from "./Output";

import { executeCode } from "../../util/code-editor";
import { useToast } from "@chakra-ui/react";

import { Button } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";

export default function CodeEditor({ code }) {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

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
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
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

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={
        isExpanded ? classes["expanded-editor"] : classes["editor-container"]
      }
    >
      <FontAwesomeIcon
        icon={faUpRightAndDownLeftFromCenter}
        className={classes.expand}
        onClick={handleExpand}
      />
      <h3>Code Editor</h3>
      <div className={classes["editor-header"]}>
        <p>JS</p>
        <div>
          <Button isLoading={isLoading} onClick={runCode}>
            Run Code
          </Button>
        </div>
      </div>
      <div className={classes["editor-columns"]}>
        <Editor
          height="100%"
          width="50%"
          cursor="pointer"
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
