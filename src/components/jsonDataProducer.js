const jsonDataProducer = (depth, children) => {
  let standardObject = { name: "String" };

  if (depth === 0 && children === 0) {
    return standardObject;
  } else if (depth === 0 && children > 0) {
    let newObject = { name: "String" };

    let childrenArray = [];
    for (let i = 0; i < children; i++) {
      let newObject = { name: "String" };

      childrenArray.push(newObject);
    }
    newObject["children"] = childrenArray;

    return [newObject];
  } else if (depth > 0 && children > 0) {
    let newObject = { name: "String" };
    let childrenArray = [];
    for (let i = 0; i < children; i++) {
      let newObject = { name: "String" };
      let subArray = [];
      for (let i = 0; i < children; i++) {
        let newObject = { name: "String" };

        subArray.push(newObject);
      }
      newObject["children"] = subArray;
      childrenArray.push(newObject);
    }
    newObject["children"] = childrenArray;

    return [newObject];
  }
};

export default jsonDataProducer;
