import React from "react";
import { useState } from "react";
import { x_val, y_val } from "../functions";



const Red = (props) => {

    var speed = props.speed;
    var z = props.position + props.diceVal;
    const [counter, setCounter] = React.useState(props.position);
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
    
    const Red_marker = {
        margin:'35% 10% 15% 40%',
        backgroundColor: 'rgb(241, 34, 34)',
        borderRadius: '50%',
        border: '1px solid rgb(0, 0, 0)',
        gridRowStart: x_val(counter),
        gridColumnStart: y_val(counter),
    };
    
    
    return(
        <div 
            id='pos2'
            style={Red_marker}
            className={props.turn && props.enterEnabled ?"blinker2":""}
            onClick={slide}
        />
    );
}
export default Red