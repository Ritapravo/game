import React,{useState} from 'react';
import './App.css';
import Intro from './components/Intro';
import Board from './components/Board';
import Button from './components/Button';
import {x_val, y_val, check, move_green, move_red} from './functions';
import Counter from './components/Counter';

function App() {
  let speed = 200;
  const [turn, setTurn] = useState(true);
  const [diceVal, setDiceVal] = useState("...");
  const [spaceEnabled, setSpaceEnabled] = useState(true);
  const [enterEnabled, setEnterEnabled] = useState(false);
  const [player1, setPlayer1] = useState(1);
  const [player2, setPlayer2] = useState(1);

  let variables = {
    turn: turn,
    setTurn: setTurn,
    diceVal: diceVal,
    setDiceVal: setDiceVal,
    spaceEnabled: spaceEnabled,
    enterEnabled: enterEnabled,
    setEnterEnabled: setEnterEnabled,
    setSpaceEnabled: setSpaceEnabled,
    player1: player1,
    player2: player2,
    setPlayer1: setPlayer1,
    setPlayer2: setPlayer2,
    speed: speed
  }
  
  const rollDice = ()=>{
    setDiceVal(Math.round(1+(5)*Math.random()));
    // setDiceVal(6);
    setEnterEnabled(true);
  }

  const move = (setCounter) => {
    if(turn)
      move_green(variables, setCounter);
    else
      move_red(variables, setCounter);
  }

  const Clicked = () => {
    if(spaceEnabled){
      setSpaceEnabled(false);
      rollDice();      
    }
  }

  return (
    <div>
      <Intro turn={turn} diceVal={diceVal}/>
      <Board 
        turn={turn} 
        enterEnabled={enterEnabled} 
        player1={player1} 
        player2={player2}
        move = {move}
        diceVal={diceVal}
        speed = {speed}
      />
      <Button turn={turn} diceVal={diceVal} onClickRollDice={Clicked}/>
    </div>
  );
}

export default App;





// const move1 = (setCounter) =>{
//   let z = player1 + diceVal;
//   let c = check(z);
//   if(!turn || !enterEnabled) return;

//   if(z<=100){ 
//     setPlayer1(z);
//     if(z===100){
//       setTimeout(() => {
//         alert("Green has won the match!! Refresh to Restart.");
//       }, speed);
//     }
//     if(c){
//       setTimeout(() => {
//         setPlayer1(c);
//         setCounter(c);
//       }, speed);
//     }
//   }
  
//   setEnterEnabled(false);
//   setSpaceEnabled(true);
//   setTurn(false);
//   setDiceVal("...");
// }