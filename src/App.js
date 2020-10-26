import React from "react";
import "./App.css";
import { parseString } from "xml2js";
import xml from "./Files/Demo.xml";
import axios from "axios";

function App() {
  const getPath = () => {
    axios
      .get(xml, {
        "Content-Type": "application/xml; charset=utf-8",
      })
      .then((response) => {
        parseString(response.data, function (err, result) {
          console.log(result);
        });
      });
  };

  return (
    <div>
      <button onClick={getPath}>Read XML</button>
    </div>
  );
}

export default App;
