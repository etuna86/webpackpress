import React from "react";
import ReactDOM from "react-dom";

function tick() {
  const element = <strong>It is {new Date().toLocaleTimeString()}.</strong>;
  ReactDOM.render(element, document.getElementById("impl"));
}

setInterval(tick, 1000);
