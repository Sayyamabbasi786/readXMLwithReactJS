import React from "react";
import { postofficeTrack } from "./Files/testXML";

var parseString = require("xml2js").parseString;

function Test() {
  const getData = () => {
    parseString(postofficeTrack, function (err, result) {
      console.dir(result);
    });
  };

  return (
    <div>
      <button onClick={getData}>Read XML</button>
    </div>
  );
}

export default Test;
