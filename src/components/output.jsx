import Node from "./node/Node";
import React from "react";

const output = (array, setFunc, left) => {
  if (!array) {
    return;
  } else {
    return array.map((element) => {
      let children;
      let name;
      let lastChild = false;

      if (array.length === 0) {
        for (const val of Object.values(element)) {
          if (Array.isArray(val)) {
            children = val;
          } else {
            name = val;
          }
        }
      } else {
        if (array.indexOf(element) === array.length - 1) {
          for (const val of Object.values(element)) {
            if (Array.isArray(val)) {
              children = val;
            } else {
              name = val;
              lastChild = true;
            }
          }
        } else {
          for (const val of Object.values(element)) {
            if (Array.isArray(val)) {
              children = val;
            } else {
              name = val;
            }
          }
        }
      }

      const time = Date.now().toString() * Math.random();

      return (
        <Node
          name={name}
          children={children}
          lastChild={lastChild}
          key={time}
          setFunc={setFunc}
          left={left}
        />
      );
    });
  }
};

export default output;
