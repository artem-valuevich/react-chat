import React from "react"
import {render} from "react-dom"
import App from "./App"
import "./materialize.css"
// import "./materialize"

const sender = prompt("Your nickname?");
render(<App sender={sender}/>, document.getElementById("root"))