

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


const move_green = (v, setCounter) =>{
    let z = v.player1 + v.diceVal;
    let c = check(z);
    if(!v.turn || !v.enterEnabled) return;

    if(z<=100){ 
      v.setPlayer1(z);
      if(z===100){
        setTimeout(() => {
          alert("Green has won the match!! Refresh to Restart.");
        }, v.speed);
      }
      if(c){
        setTimeout(() => {
          v.setPlayer1(c);
          setCounter(c);
        }, v.speed);
      }
    }
    
    v.setEnterEnabled(false);
    v.setSpaceEnabled(true);
    v.setTurn(false);
    v.setDiceVal("...");
}


const move_red = (v, setCounter) =>{
    let z = v.player2 + v.diceVal;
    let c = check(z);
    if(v.turn || !v.enterEnabled)return;
    if(z<=100){
      v.setPlayer2(z);
      if(z===100){
        setTimeout(() => {
          alert("Red has won the match!! Refresh to Restart.");
        }, v.speed);
      }
      if(c){
        setTimeout(() => {
          v.setPlayer2(c);
          setCounter(c);
        }, v.speed);
      }
    } 
    v.setEnterEnabled(false);
    v.setSpaceEnabled(true);
    v.setTurn(true);
    v.setDiceVal("...");
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


export  {x_val,y_val, check, move_green, move_red};