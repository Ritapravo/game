

const dummyCoins = [
  {
    id: 3,
    margin: '25% 10% 25% 40%',
    backgroundColor: 'hsl(60, 63%, 53%)',
  },
  {
    id: 2,
    margin: '25% 20% 25% 30%',
    backgroundColor: 'rgb(34, 158, 241)',
  },
  {
    id: 1,
    margin:'25% 30% 25% 20%',
    backgroundColor: 'rgb(241, 34, 34)',
  },
  {
    id: 0,
    margin: '25% 40% 25% 10%',
    backgroundColor: 'rgb(14, 221, 66)',
  },
  
];

const x_val = (z) => {
    // x_val(z) takes the z co-ordinate as input and returns its corresponding 
    // value of 'x'
    return 10-Math.floor((z-1)/10);
} 


const y_val = (z) => {
    // y_val(z) takes the z co-ordinate as input and returns its corresponding 
    // value of 'y'
    let temp = Math.floor((z-1)/10);
    if(temp%2===0){
        if(z%10===0)
            return 10;
        return z%10;
    }
    else{
        if(z%10===0)
            return 1;
        return 11-z%10;
    }
} 

  const colors = ["Green", "Red", "Blue", "Yellow"];

  const count = (array) => {
    let cnt = 0;
    array.forEach(element => {
      if (element===100)
        cnt++;
    });
    return cnt;
  }

  const mover = (v, setCounter, id) =>{
    
    let z = v.positions[v.turn] + v.diceVal;
    let c = check(z);
    if(v.turn!==id || !v.enterEnabled)return;
    if(z<=100){
      let temp = v.positions;
      temp[v.turn] = z;
      v.setPositions(temp);
      
      if(z===100){
        setTimeout(() => {
          alert("Congratulations!! "+colors[v.turn]+" has got Rank "+count(temp));
          if(count(temp)===v.N-1 || count(temp)===v.N)
            alert("Refresh to start a new game!");
        }, v.speed);
        
      }
      if(c){
        setTimeout(() => {
          temp[v.turn] = c;
          v.setPositions(temp);
          setCounter(c);
        }, v.speed);
      }
    } 
    
    v.setEnterEnabled(false);
    v.setSpaceEnabled(true);
    let t=(v.turn+1)%v.N;
    while(v.positions[t]===100 || v.available[t]===0)
      t = (t+1)%v.N;
    v.setTurn(t);
    v.setDiceVal("...");
  }

  const pass_turn = (v) => {
    setTimeout(() => {
      let t=(v.turn+1)%v.N;
      while(v.positions[t]===100 || v.available[t]===0)
        t = (t+1)%v.N;
      v.setTurn(t);
      v.setDiceVal("...");
      v.setSpaceEnabled(true);
    }, v.speed*4);
  }



const check_map = new Map([
    [7,25],
    [19,39],
    [41,18],
    [47,16],
    [46,68],
    [60,79],
    [72,13],
    [73,94],
    [87,56],
    [95,76],
    [99,27]
]);

const check = (z) =>{
    if(check_map.has(z))
        return check_map.get(z);
    else {
        return 0;
    }
}


export  {x_val,y_val, mover, dummyCoins, pass_turn};