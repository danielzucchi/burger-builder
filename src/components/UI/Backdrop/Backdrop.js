import React from "react";
import classes from "./Backdrop.css";

const backdrop = props =>
  props.show ? <div class={classes.Backdrop} onClick={props.clicked} /> : null;

export default backdrop;
