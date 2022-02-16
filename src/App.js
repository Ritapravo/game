import React,{useState} from 'react';
import './App.css';
import Intro from './components/Intro';
import Board from './components/Board';
import Button from './components/Button';
import { dummyCoins, mover, pass_turn} from './functions';


function App() {

  React.useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  
  const handleBeforeUnload = (e) => {
    e.preventDefault();
    const message =
      "Are you sure you want to leave? All progress will be lost.";
    e.returnValue = message;
    return message;
  };

  const [N, setN] = useState(0);
  React.useEffect(() => {
    if(!N){
      let n = 0;
      while(n<2 || n>4)
        n = prompt("Enter the number of players from 2 to 4", "2");
        // n = 4;
      setN(n);
    }
  }, [N]);

  
  let speed = 200;
  const [turn, setTurn] = useState(0);
  const [diceVal, setDiceVal] = useState("...");
  const [spaceEnabled, setSpaceEnabled] = useState(true);
  const [enterEnabled, setEnterEnabled] = useState(false);
  const [positions, setPositions] = useState([1,10,91,100]);
  const [available, setAvailable] = useState([1,1,1,1]);

  let variables = {
    turn: turn,
    setTurn: setTurn,
    diceVal: diceVal,
    setDiceVal: setDiceVal,
    spaceEnabled: spaceEnabled,
    enterEnabled: enterEnabled,
    setEnterEnabled: setEnterEnabled,
    setSpaceEnabled: setSpaceEnabled,
    speed: speed, 
    N:N,
    positions: positions,
    setPositions: setPositions,
    available: available,
    setAvailable: setAvailable,
  }
  
  const rollDice = ()=>{
    let dice_value_temp = Math.round(1+(5)*Math.random());
    setDiceVal(dice_value_temp);
    if(positions[turn]+dice_value_temp<=100)
      setEnterEnabled(true);
    else
      pass_turn(variables);  
  }

  const move = (setCounter, id) => {
    mover(variables, setCounter, id);
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
        move = {move}
        diceVal={diceVal}
        speed = {speed}
        coins={dummyCoins}
        N = {N}
        positions={positions}
        available={available}
      />
      <Button turn={turn} diceVal={diceVal} onClickRollDice={Clicked}/>
    </div>
  );
}

export default App;

