import React,{ useState } from "react";
import './Button.css'

const Button = (props) => {
    // const Clicked2 = (a) => {
    //     console.log('you clicked',a);
    //     //setTurn(false);
    //   }
    const button_class = ["button", "button red", "button blue", "button yellow"];
    const value_class = [" ", " red", " blue", " yellow"];
    return(
        <div className="button_container">
            <button id='roll_button' className={button_class[props.turn]} onClick={()=>props.onClickRollDice()}>
                Roll Dice: <span className={"dice_val_button"+value_class[props.turn]}>{props.diceVal}</span>
            </button>
            
        </div>
    );
}

export default Button;