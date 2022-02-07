import React from "react";
import { useState } from "react";
import './Board.css'
import { x_val, y_val } from "../functions";


const Green = (props) => {

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
            props.move(setCounter);
        }
        return () => {
            clearInterval(interval);
        };
    }, [moveOn]);

    if (moveOn && counter === z) {        
        setMoveOn(false);
    }

    const slide = () => {
        if (z > 100) { props.move(); return; }
        
        if (props.turn && props.enterEnabled)
            setMoveOn(true);
    }

    const Green_marker = {
        margin: '35% 40% 15% 10%',
        backgroundColor: 'rgb(14, 221, 66)',
        borderRadius: '50%',
        border: '1px solid rgb(0, 0, 0)',
        gridRowStart: x_val(counter),
        gridColumnStart: y_val(counter),
        // transition: "all 2s ease-in"
    };


    return (
        <div
            id='pos1'
            style={Green_marker}
            className={props.turn && props.enterEnabled ? "blinker1" : ""}
            onClick={slide}
        />
    );
}
export default Green