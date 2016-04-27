/// <reference path="./typings/tsd.d.ts" />
import React = require("react")
import ReactDOM = require("react-dom")
import CP = require("./ColorPicker")

var abc = function(hexCode) { console.log(hexCode) }

ReactDOM.render(<CP onChange={abc}/>, document.querySelector("#content"))
ReactDOM.render(<CP/>, document.querySelector("#content1"))