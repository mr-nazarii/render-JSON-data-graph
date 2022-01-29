import React, { useState } from "react";

import output from "../output";

const NodeListElement = (props) => {
  const [showNodeList, setShow] = useState(true);

  const showNL = () => {
    if (showNodeList) {
      setShow(false);
      props.showChildren();
    } else {
      setShow(true);
      props.showChildren();
    }
  };

  const list = {
    margin: `${props.margin}px`,
    paddingLeft: `${props.left - 30}px`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    pseudoClass: "",
  };

  return (
    <>
      {showNodeList ? (
        <div style={list} className={"nodeList"}>
          {output(props.response, showNL, props.left)}
        </div>
      ) : null}
    </>
  );
};

export default NodeListElement;
