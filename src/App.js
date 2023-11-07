import { useState } from "react";
import * as Blockly from "blockly/core";
import locale from "blockly/msg/en";
import "blockly/blocks";

import "./Blocks/dom";
import "./Blocks/cyf";
import useBlockly from "./Blockly/useBlockly";

import "./styles.css";

Blockly.setLocale(locale);

export default function App() {
  const { BlocklyComponent, generate } = useBlockly({
    initialBlock: {
      kind: "on_start",
      x: 10,
      y: 10
    },
    toolbox: {
      kind: "categoryToolbox",
      contents: [
        {
          kind: "category",
          name: "Control",
          contents: [
            {
              kind: "block",
              type: "controls_if"
            }
          ]
        },
        {
          kind: "category",
          name: "Logic",
          contents: [
            {
              kind: "block",
              type: "logic_compare"
            },
            {
              kind: "block",
              type: "logic_operation"
            },
            {
              kind: "block",
              type: "logic_boolean"
            }
          ]
        },
        {
          kind: "category",
          name: "Custom",
          contents: [
            {
              kind: "block",
              type: "on_start"
            },
            {
              kind: "block",
              type: "with_element_by_id"
            },
            {
              kind: "block",
              type: "set_content",
              contents: [
                {
                  kind: "value",
                  name: "VALUE",
                  contents: [
                    {
                      kind: "shadow",
                      type: "text"
                    }
                  ]
                }
              ]
            },
            {
              kind: "block",
              type: "get_randomWord"
            }
          ]
        }
      ]
    }
  });

  const [generated, setGenerated] = useState("");

  function handleGenerate() {
    setGenerated(generate());
  }

  return (
    <div className="page">
      <h1 className="title">Blockly tester</h1>

      <div className="blockly-wrapper">
        <BlocklyComponent />
      </div>

      <div className="output">
        <button onClick={handleGenerate}>Generate</button>
        <code>{generated}</code>
      </div>
    </div>
  );
}
