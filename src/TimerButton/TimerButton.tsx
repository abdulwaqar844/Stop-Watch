import React from "react";
import "./TimerButton.css"
type buttonprop={
  buttonAction:()=>void,
  buttonValue:string
}
const TimerButton =(props:buttonprop)=>{
  return(
    <div className="button-container">
    <button  onClick={props.buttonAction}>{props.buttonValue}</button>
    </div>
  )

}
export default TimerButton;