/*
 * Complete the 'hurdleRace' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY height
 */

const hurdleRace = (k, height) => {
    
    let maxHeight = Math.max.apply(Math, height);
    console.log("maxHeight ", maxHeight);
    if(maxHeight < k) {
        return 0;
    }
    
    const potionsNeededJump = maxHeight - k;
    return potionsNeededJump;
    
}


// another solution //////////////////////////////////////////////////////////////////
// const hurdleRace = (k, height) => {
    
//   const numOfDrinks = height.reduce((acc, cur) => Math.max(acc, cur), height[0]) - k;
//   return Math.max(0, numOfDrinks);
  
// }

