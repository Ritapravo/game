import React,{ useState } from "react";
import './Button.css'

const Button = (props) => {
    // const Clicked2 = (a) => {
    //     console.log('you clicked',a);
    //     //setTurn(false);
    //   }
    return(
        <div className="button_container">
            <button id='roll_button' className={props.turn?"button":"button red"} onClick={()=>props.onClickRollDice()}>
                Roll Dice: <span className={props.turn?"dice_val_button":"dice_val_button red"}>{props.diceVal}</span>
            </button>
            
        </div>
    );
}

export default Button;