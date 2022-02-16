import React from "react";
import './Intro.css'

const Intro = (props) =>{
    
    const colors =['Green', 'Red', 'Blue', 'Yellow'];
    
    return (
    <div className="intro">
        <h3 className={colors[props.turn]}>
            TURN:{' '}
            <span>{colors[props.turn]}</span> 
            DICE-VALUE:{' '}
            <span>{props.diceVal}</span>
        </h3>
        <h3 className={colors[props.turn]}>Welcome to Snakes and Ladders !</h3>
    </div>
    )
}

export default Intro;