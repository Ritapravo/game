import React,{useState} from 'react';
import './App.css';
import Intro from './components/Intro';
import Board from './components/Board';
import Button from './components/Button';
import { dummyCoins, mover} from './functions';




function App() {

  const [N, setN] = useState(0);
  React.useEffect(() => {
    if(!N){
      let n = 0;
      while((n!=2) && (n!=3) && (n!=4))
        n = prompt("Enter the number of players from 2 to 4", "2");
      setN(n);
    }
  }, [N]);

  
  let speed = 200;
  const [turn, setTurn] = useState(0);
  const [diceVal, setDiceVal] = useState("...");
  const [spaceEnabled, setSpaceEnabled] = useState(true);
  const [enterEnabled, setEnterEnabled] = useState(false);
  const [positions, setPositions] = useState([1,1,1,1]);

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
  }
  
  const rollDice = ()=>{
    setDiceVal(Math.round(1+(5)*Math.random()));
    // setDiceVal(2);
    setEnterEnabled(true);
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
      />
      <Button turn={turn} diceVal={diceVal} onClickRollDice={Clicked}/>
    </div>
  );
}

export default App;

