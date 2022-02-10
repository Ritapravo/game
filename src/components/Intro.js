import React, { useState } from "react";
import './Intro.css'

const Intro = (props) =>{
    
    // console.log(props.turn);
    

    return (
    <div className="intro">
        <h3>
            TURN:{' '}
            <span id="turn">{props.turn ? 'Green':'Red'}</span> 
            DICE-VALUE:{' '}
            <span id="dice_val">{props.diceVal}</span>
        </h3>
        <h3><span id="roller">Welcome to Snakes and Ladders !</span></h3>
    </div>
    )
}

export default Intro;