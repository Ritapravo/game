import React from "react";
import { useState } from "react";
import './Board.css'
import { x_val, y_val } from "../functions";


const Coin = (props) => {

    var speed = props.speed;
    var z = props.position + props.diceVal;
    const [counter, setCounter] = useState(props.position);
    const [moveOn, setMoveOn] = useState(false);

    React.useEffect(() => {
        let interval = null;
        if (moveOn) {
            interval = setInterval(() => {
                setCounter((prevCounter) => prevCounter + 1);
            }, speed);
        }
        else {
            clearInterval(interval);
            props.move(setCounter, props.coin.id);
        }
        return () => {
            clearInterval(interval);
        };
    }, [moveOn]);

    if (moveOn && counter === z) {        
        setMoveOn(false);
    }

    const slide = () => {
        if (z > 100) { props.move(setCounter, props.coin.id); return; }
        
        if (props.turn && props.enterEnabled)
            setMoveOn(true);
    }

    const Coin_marker = {
        margin: props.coin.margin,
        backgroundColor: props.coin.backgroundColor,
        borderRadius: '80% 80% 0% 80%',
        transform: "rotate(45deg)",
        border: '1px solid rgb(0, 0, 0)',
        gridRowStart: x_val(counter),
        gridColumnStart: y_val(counter),
        // transition: "all 2s ease-in"
    };
    if(props.available[props.coin.id]===0){
        Coin_marker.backgroundColor="grey";
        Coin_marker.opacity="80%";
    }


    return (
        <div
            style={Coin_marker}
            className={props.turn && props.enterEnabled ? "blinker" : ""}
            onClick={slide}
        >
            <div className="circle"/>
        </div>
    );
}
export default Coin;