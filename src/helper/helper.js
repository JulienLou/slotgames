// Helper.js

import { Howl } from 'howler'; //{ Howl, Howler } Howler to set volume: Howler.volume(1)

export const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Check and count if other IDs are present in addition to the initial IDs. 
export const countMoreWinningIds = (line1, line2, line3, winningId, basicsWinningSquares) => {
  const fullArray = line1.concat(line2, line3);

  let winIdFound = 0;
  fullArray.forEach(id => {
    if(id === winningId){
      winIdFound++
    }
  });
  const result = winIdFound - basicsWinningSquares
  return result > 0 ? result : 0;

}

// to build a losing position in array
export const losingArray = (arrayLength) => {
  let array = [];
  for(let i = 1; i <= arrayLength; i++){
    array.push(i);
  }
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;

}

export const countMajorsIds = (line1, line2, line3) => {
  const fullArray = line1.concat(line2, line3);
  const count = {};

  fullArray.forEach(element => {
    count[element] = (count[element] || 0) + 1;
  }); // ex:{"1": 3, "2": 5, "3": 1}
   
  const highestRepeat = Math.max(...Object.values(count));
  const winID = Object.keys(count).find(key => count[key] === highestRepeat);

  return highestRepeat >= 5 ? winID : 0;
}


export const numberFormat = (number, decimals, dec_point, thousands_sep) => {
  // Strip all characters but numerical ones.
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
      prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
      sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
      dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
      s = '',
      toFixedFix = function (n, prec) {
          var k = Math.pow(10, prec);
          return '' + Math.round(n * k) / k;
      };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
      s[1] = s[1] || '';
      s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

export const playSound = (src) => {
    const sound = new Howl({src});
    sound.play();
}

// scores & stats
export const addBankLoan = () => {
  if(localStorage.getItem('nbBankLoans')){
    const nbBanksLoans = Number(localStorage.getItem('nbBankLoans'));
    const newNbBankLoans = nbBanksLoans + 1;
    localStorage.setItem('nbBankLoans', newNbBankLoans);
  }else{
    localStorage.setItem('nbBankLoans', 1);
  }
}

// scores & stats
export const addOneSpinToTotalSpins = (machineName) => {
  if(machineName === 'Egyptian Tales'){
    if(localStorage.getItem('nbTotalSpinsForEgyptianTales')){
      const nbSpins = Number(localStorage.getItem('nbTotalSpinsForEgyptianTales'));
      const newNbSpins = nbSpins + 1;
      localStorage.setItem('nbTotalSpinsForEgyptianTales', newNbSpins);
    }else{
      localStorage.setItem('nbTotalSpinsForEgyptianTales', 1);
    }
  }
  else if(machineName === 'Numbers Cocktails'){
    if(localStorage.getItem('nbTotalSpinsForNumbersCocktails')){
      const nbSpins = Number(localStorage.getItem('nbTotalSpinsForNumbersCocktails'));
      const newNbSpins = nbSpins + 1;
      localStorage.setItem('nbTotalSpinsForNumbersCocktails', newNbSpins);
    }else{
      localStorage.setItem('nbTotalSpinsForNumbersCocktails', 1);
    }
  }
  else if(machineName === 'Football Club'){
    if(localStorage.getItem('nbTotalSpinsForFootballClub')){
      const nbSpins = Number(localStorage.getItem('nbTotalSpinsForFootballClub'));
      const newNbSpins = nbSpins + 1;
      localStorage.setItem('nbTotalSpinsForFootballClub', newNbSpins);
    }else{
      localStorage.setItem('nbTotalSpinsForFootballClub', 1);
    }
  }
  else if(machineName === 'Payroll Valley'){
    if(localStorage.getItem('nbTotalSpinsForPayrollValley')){
      const nbSpins = Number(localStorage.getItem('nbTotalSpinsForPayrollValley'));
      const newNbSpins = nbSpins + 1;
      localStorage.setItem('nbTotalSpinsForPayrollValley', newNbSpins);
    }else{
      localStorage.setItem('nbTotalSpinsForPayrollValley', 1);
    }
  }
  else if(machineName === 'Halloween Shadows'){
    if(localStorage.getItem('nbTotalSpinsForHalloweenShadows')){
      const nbSpins = Number(localStorage.getItem('nbTotalSpinsForHalloweenShadows'));
      const newNbSpins = nbSpins + 1;
      localStorage.setItem('nbTotalSpinsForHalloweenShadows', newNbSpins);
    }else{
      localStorage.setItem('nbTotalSpinsForHalloweenShadows', 1);
    }
  }
  else if(machineName === 'Jungle Treasure Hunters'){
    if(localStorage.getItem('nbTotalSpinsForJungleTreasureHunters')){
      const nbSpins = Number(localStorage.getItem('nbTotalSpinsForJungleTreasureHunters'));
      const newNbSpins = nbSpins + 1;
      localStorage.setItem('nbTotalSpinsForJungleTreasureHunters', newNbSpins);
    }else{
      localStorage.setItem('nbTotalSpinsForJungleTreasureHunters', 1);
    }
  }
  else if(machineName === 'Medieval Arena'){
    if(localStorage.getItem('nbTotalSpinsForMedievalArena')){
      const nbSpins = Number(localStorage.getItem('nbTotalSpinsForMedievalArena'));
      const newNbSpins = nbSpins + 1;
      localStorage.setItem('nbTotalSpinsForMedievalArena', newNbSpins);
    }else{
      localStorage.setItem('nbTotalSpinsForMedievalArena', 1);
    }
  }
  else if(machineName === 'Proudly Animals'){
    if(localStorage.getItem('nbTotalSpinsForProudlyAnimals')){
      const nbSpins = Number(localStorage.getItem('nbTotalSpinsForProudlyAnimals'));
      const newNbSpins = nbSpins + 1;
      localStorage.setItem('nbTotalSpinsForProudlyAnimals', newNbSpins);
    }else{
      localStorage.setItem('nbTotalSpinsForProudlyAnimals', 1);
    }
  }
  else if(machineName === 'Dragon Blue Lantern'){
    if(localStorage.getItem('nbTotalSpinsForDragonBlueLantern')){
      const nbSpins = Number(localStorage.getItem('nbTotalSpinsForDragonBlueLantern'));
      const newNbSpins = nbSpins + 1;
      localStorage.setItem('nbTotalSpinsForDragonBlueLantern', newNbSpins);
    }else{
      localStorage.setItem('nbTotalSpinsForDragonBlueLantern', 1);
    }
  }
}


// scores & stats
export const addWinningSpin = () => {
  if(localStorage.getItem('nbTotalWinningsSpins')){
    const nbSpins = Number(localStorage.getItem('nbTotalWinningsSpins'));
    const newNbSpins = nbSpins + 1;
    localStorage.setItem('nbTotalWinningsSpins', newNbSpins);
  }else{
    localStorage.setItem('nbTotalWinningsSpins', 1);
  }
}

// scores & stats
export const addGotSpecialChance = () => {
  if(localStorage.getItem('nbTotalGotSpecialChance')){
    const nbGotSC = Number(localStorage.getItem('nbTotalGotSpecialChance'));
    const newNbGotSC = nbGotSC + 1;
    localStorage.setItem('nbTotalGotSpecialChance', newNbGotSC);
  }else{
    localStorage.setItem('nbTotalGotSpecialChance', 1);
  }
}

// scores & stats
export const addEarnedSpecialChance = () => {
  if(localStorage.getItem('nbTotalEarnedSpecialChance')){
    const nbEarnedSC = Number(localStorage.getItem('nbTotalEarnedSpecialChance'));
    const newNbEarnedSC = nbEarnedSC + 1;
    localStorage.setItem('nbTotalEarnedSpecialChance', newNbEarnedSC);
  }else{
    localStorage.setItem('nbTotalEarnedSpecialChance', 1);
  }
}

// scores & stats
export const checkIfNewBestAwardStandardWin = (playerGain) => {
  if(localStorage.getItem('bestAwardStandardWin')){
    const bestKnownAward = Number(localStorage.getItem('bestAwardStandardWin'));
    if(bestKnownAward < playerGain){
      localStorage.setItem('bestAwardStandardWin', playerGain);
    }
  }else{
    localStorage.setItem('bestAwardStandardWin', playerGain);
  }
}
