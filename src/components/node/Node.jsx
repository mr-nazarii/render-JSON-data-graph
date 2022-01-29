import React, { useEffect, useState } from "react";
import "./Node.scss";
import NodeListElement from "../body/NodeListElement";

const Node = (props) => {
  const [show, setShow] = useState(false);

  const showChildren = (func) => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <>
      {props.children || !props.lastChild ? (
        <div
          className="node"
          onClick={(e) => {
            showChildren();
          }}
        >
          <h1 className="node__title">{props.name}</h1>
        </div>
      ) : (
        <>
          <div
            className="node"
            onClick={(e) => {
              props.setFunc();
            }}
          >
            <h1 className="node__title">{props.name}</h1>
          </div>
        </>
      )}

      {show ? (
        <NodeListElement
          left={100}
          response={props.children}
          showChildren={showChildren}
        />
      ) : null}
    </>
  );
};

export default Node;
