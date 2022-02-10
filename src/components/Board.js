import React,{ useState } from "react";
import './Board.css'
import Red from "./Red";
import Green from "./Green";

const Board = (props) => {

    const board_green = {
        border:"2px solid rgb(11, 236, 67)"
    };
    const board_red = {
        border:"2px solid rgb(241, 34, 34)"
    };

    
    return (
        <div className="container" id="board_container">
            <div id="board" style={props.turn?board_green:board_red }>
                <Green 
                    position={props.player1} 
                    enterEnabled={props.enterEnabled}
                    turn={props.turn}
                    move={props.move}
                    diceVal={props.diceVal}
                    speed = {props.speed}
                />
                <Red 
                    position={props.player2}
                    enterEnabled={props.enterEnabled}
                    turn={!props.turn}
                    move={props.move}
                    diceVal={props.diceVal}
                    speed = {props.speed}
                />
            </div>
        </div>
    );
}

export default Board;