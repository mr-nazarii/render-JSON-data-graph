import { useEffect, useState } from "react";
import NodeListElement from "./body/NodeListElement";
import jsonDataProducer from "./jsonDataProducer";

const Main = (props) => {
  const [response, setResponse] = useState([]);

  const res = jsonDataProducer(2, 3);

  useEffect(() => {
    console.log(res);
    setResponse(res);
  }, []);

  return (
    <>
      <div style={{ overflow: "hidden", borderBottom: "3px solid #000000" }}>
        <NodeListElement response={response} left={props.left} margin={20} />
      </div>
    </>
  );
};

export default Main;
