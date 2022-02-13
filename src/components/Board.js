import React,{ useState } from "react";
import './Board.css'
import Coin from "./Coin";

const Board = (props) => {

    const board_color = [{border:"2px solid rgb(11, 236, 67)"},
                        {border:"2px solid rgb(241, 34, 34)"},
                        {border:"2px solid rgb(34, 158, 241)"}, 
                        {border:"2px solid hsl(60, 63%, 53%)"}];

    let N = props.N;
   
    const filteredCoins = props.coins.filter((coin) => { 
        return coin.id < N;
    });

    
    return (
        <div className="container" id="board_container">
            <div id="board" style={board_color[props.turn]}>  
                {filteredCoins.map((coin)=>(
                    <Coin 
                        key={coin.id}
                        coin={coin}
                        position={props.positions[coin.id]}
                        available={props.available}
                        enterEnabled={props.enterEnabled}
                        turn={coin.id===props.turn}
                        move={props.move}
                        diceVal={props.diceVal}
                        speed = {props.speed}

                    /> 
                ))}       
            </div>
        </div>
    );
}

export default Board;