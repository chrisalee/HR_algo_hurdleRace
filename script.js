/*
 * Complete the 'hurdleRace' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY height
 */

// below does not work for all cases
// const hurdleRace = (k, height) => {
    
//     let minHeight = Math.min.apply(Math, height);
//     console.log("minHeight ", minHeight);
//     const heightFilter = height.filter((item) => item > (k + minHeight));
//     console.log('heightFilter ', heightFilter);
//     if(heightFilter.length === 0) {
//         return 0;
//     }
    
//     const potionsNeededJump = heightFilter.map(item => item - k);
//     console.log('potionsNeededJump ', potionsNeededJump);
//     let potionsConsumed = potionsNeededJump.reduce((sum, total) => sum + total, 0);
    
//     console.log('potionsConsumed', potionsConsumed);
//     return potionsConsumed;
// }

const hurdleRace = (k, height) => {
    
  const numOfDrinks = height.reduce((acc, cur) => Math.max(acc, cur), height[0]) - k;
  return Math.max(0, numOfDrinks);
  
}

