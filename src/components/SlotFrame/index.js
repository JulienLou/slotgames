import React, { useEffect, useState, Fragment, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './slotframe.css';
import SlotCol from '../SlotCol';
import SlotDashboard from '../SlotDashboard';
import LoseCelebrations from "../LoseCelebration"
import EarningsSummary from '../EarningsSummary';
import SpecialChance from '../SpecialChance';
import Gamble from '../Gamble';
import PayTable from '../PayTable';
import makeWins from '../../wins/makewins';
import checkIfPlayerWinsWithIds from '../../wins/checkwins';
import { randomIntFromInterval, losingArray, numberFormat, playSound, addBankLoan, addOneSpinToTotalSpins, addWinningSpin, addGotSpecialChance, addEarnedSpecialChance, checkIfNewBestAwardStandardWin } from '../../helper/helper';
import numbers from '../../machines/numbers.json';
import egyptian from '../../machines/egyptian.json';
import football from '../../machines/football.json';
import western from '../../machines/western.json';
import halloween from '../../machines/halloween.json';
import jungle from '../../machines/jungle.json';
import arena from '../../machines/arena.json';
import animals from '../../machines/animals.json';
import dragon from '../../machines/dragon.json'


//numbers
import numbersImgThemeBackground from '../../img/slots/numbers/numbersbg10.jpg';
import numbersImgThemeFrame from '../../img/slots/numbers/numbersframe.png';
import musicNumbers from '../../audio/music/musicnumbers.mp3';

//egypt
import egyptImgThemeFrame from '../../img/slots/egypt/egyptframe.png';
import egyptImgThemeBackground from '../../img/slots/egypt/egyptbg.jpg';
import soundRolStartEgypt from '../../audio/egypt/rollerstart.mp3';
import musicEgypt from '../../audio/music/musicegypt.mp3';

//football
import footballImgThemeBackground from '../../img/slots/football/footballbg.jpg';
import footballImgThemeFrame from '../../img/slots/football/footballframe.png';
import musicFootball from '../../audio/music/musicfootball.mp3';
import soundFootballStar from '../../audio/football/star.mp3';

//western
import westernImgThemeBackground from '../../img/slots/western/westernbg.jpg';
import westernImgThemeFrame from '../../img/slots/western/westernframe.png';
import musicWestern from '../../audio/music/musicwestern.mp3';
import soundRolStartWestern from '../../audio/western/rollerstartwestern.mp3';
import soundWesternStar from '../../audio/western/soundstarwestern.mp3';

//halloween
import halloweenImgThemeBackground from '../../img/slots/halloween/halloweenbg.jpg';
import halloweenImgThemeFrame from '../../img/slots/halloween/halloweenframe.png';
import musicHalloween from '../../audio/music/musichalloween.mp3';
import soundRolStartHalloween from '../../audio/halloween/rollerstarthalloween.mp3';
import soundHalloweenStar from '../../audio/halloween/halloweenstar.mp3';

//jungle
import jungleImgThemeBackground from '../../img/slots/jungle/junglebg.jpg';
import jungleImgThemeFrame from '../../img/slots/jungle/jungleframe.png';
import musicJungle from '../../audio/music/musicjungle.mp3';

//arena
import arenaImgThemeBackground from '../../img/slots/arena/arenabg.jpg';
import arenaImgThemeFrame from '../../img/slots/arena/arenaframe.png';
import musicArena from '../../audio/music/musicarena.mp3';
import soundRolStartArena from '../../audio/arena/arenarollerstart.mp3';

//jungle
import animalsImgThemeBackground from '../../img/slots/animals/animalsbg.jpg';
import animalsImgThemeFrame from '../../img/slots/animals/animalsframe.png';
import musicAnimals from '../../audio/music/musicanimals.mp3';

//dragon
import dragonImgThemeBackground from '../../img/slots/dragon/dragonbg.jpg';
import dragonImgThemeFrame from '../../img/slots/dragon/dragonframe.png';
import musicDragon from '../../audio/music/musicdragon5.mp3';

// audio
import soundRollerStartGlobal from '../../audio/machineGlobal/rollerStart.mp3';
import soundRollerStop from '../../audio/machineGlobal/rollerStop.mp3';
import soundSpecialChanceEnabled from '../../audio/machineGlobal/specialChanceEnabled.mp3';
import soundstarStandard from '../../audio/egypt/winstar.mp3';
import soundmega from '../../audio/machineGlobal/winmega.mp3';
import soundbigwin from '../../audio/machineGlobal/winbigwin.mp3';
import soundwinner from '../../audio/machineGlobal/winwinner.mp3';
import loseWithCard from '../../audio/machineGlobal/losewithcard.mp3';
import gambleEnabledSound from '../../audio/gamble/gambleEnabled.mp3';


const SlotFrame = () => {
  
  let machineItems = null;
  let slotMachineName = '?';
  let imgThemeFrame = '';
  let musicThemeMachine = null;
  let soundRollerStart = null;
  let soundstar = null;
  let imgThemeBackground = null;
  const params = useParams();
  const navigate = useNavigate();

  if(params.machine === "numbers-cocktails"){
    machineItems = numbers.items;
    slotMachineName = numbers.game;
    imgThemeFrame = numbersImgThemeFrame;
    imgThemeBackground = numbersImgThemeBackground;
    musicThemeMachine = musicNumbers;
    soundRollerStart = soundRollerStartGlobal;
    soundstar = soundstarStandard;
  }
  else if(params.machine === "egyptian-tales"){
    machineItems = egyptian.items;
    slotMachineName = egyptian.game;
    imgThemeFrame = egyptImgThemeFrame;
    imgThemeBackground = egyptImgThemeBackground;
    musicThemeMachine = musicEgypt;
    soundRollerStart = soundRolStartEgypt;
    soundstar = soundstarStandard;
  }
  else if(params.machine === "football-club"){
    machineItems = football.items;
    slotMachineName = football.game;
    imgThemeFrame = footballImgThemeFrame;
    imgThemeBackground = footballImgThemeBackground;
    musicThemeMachine = musicFootball;
    soundRollerStart = soundRollerStartGlobal;
    soundstar = soundFootballStar;
  }
  else if(params.machine === "payroll-valley"){
    machineItems = western.items;
    slotMachineName = western.game;
    imgThemeFrame = westernImgThemeFrame;
    imgThemeBackground = westernImgThemeBackground;
    musicThemeMachine = musicWestern;
    soundRollerStart = soundRolStartWestern;
    soundstar = soundWesternStar;
  }
  else if(params.machine === "halloween-shadows"){
    machineItems = halloween.items;
    slotMachineName = halloween.game;
    imgThemeFrame = halloweenImgThemeFrame;
    imgThemeBackground = halloweenImgThemeBackground;
    musicThemeMachine = musicHalloween;
    soundRollerStart = soundRolStartHalloween;
    soundstar = soundHalloweenStar;
  }
  else if(params.machine === "jungle-treasure-hunters"){
    machineItems = jungle.items;
    slotMachineName = jungle.game;
    imgThemeFrame = jungleImgThemeFrame;
    imgThemeBackground = jungleImgThemeBackground;
    musicThemeMachine = musicJungle;
    soundRollerStart = soundRollerStartGlobal;
    soundstar = soundstarStandard;
  }
  else if(params.machine === "medieval-arena"){
    machineItems = arena.items;
    slotMachineName = arena.game;
    imgThemeFrame = arenaImgThemeFrame;
    imgThemeBackground = arenaImgThemeBackground;
    musicThemeMachine = musicArena;
    soundRollerStart = soundRolStartArena;
    soundstar = soundstarStandard;
  }
  else if(params.machine === "proudly-animals"){
    machineItems = animals.items;
    slotMachineName = animals.game;
    imgThemeFrame = animalsImgThemeFrame;
    imgThemeBackground = animalsImgThemeBackground;
    musicThemeMachine = musicAnimals;
    soundRollerStart = soundRollerStartGlobal;
    soundstar = soundstarStandard;
  }
  else if(params.machine === "dragon-blue-lantern"){
    machineItems = dragon.items;
    slotMachineName = dragon.game;
    imgThemeFrame = dragonImgThemeFrame;
    imgThemeBackground = dragonImgThemeBackground;
    musicThemeMachine = musicDragon;
    soundRollerStart = soundRollerStartGlobal;
    soundstar = soundstarStandard;
  }
  

  // setting machine
  const chanceToWinPercent = 35;  // percentage chance of winning (helper) // default: 35
  const balanceRatioMoney = 0.4;  // balance profits collected // default: 0.5
  const limitEvenSC = 19;         // lauch specialChance if all played spin < limitEvenSC // default: 19 (for 20)
  const nbChanceHelpToWin = 520;  // refer back to wins/makewins.js
  const maxGamblingRounds = 5;    // maximium gambling rounds

  const nbSpecialItemsByTheme = 1;
  const nbItemsInRollerA = 42;
  const nbItemsInRollerB = 48;
  const nbItemsInRollerC = 54;
  const nbItemsInRollerD = 60;
  const nbItemsInRollerE = 66;
  const [arraysGame, setArraysGame] = useState([]);
  const [rollersInMove, setRollersInMove] = useState(false);
  const [playerIsPlaying, setPlayerIsPlaying] = useState(false);
  const [playerWinsWithId, setPlayerWinsWithId] = useState(false);
  const [playerJustArrived, setPlayerJustArrived] = useState(true);
  const [numberHelpToWin, setNumberHelpToWin] = useState(null);
  const [winValue, setWinValue] = useState(null);
  const [typeOfWin, setTypeOfWin] = useState(null);
  const [moreWinId, setMoreWinId] = useState(null);
  const [paytableVisible, setPaytableVisible] = useState(false);
  const [earningsSummaryVisible, setEarningsSummaryVisible] = useState(false);
  const [specialChanceVisible, setSpecialChanceVisible] = useState(false);
  const [specialChanceEnabled, setSpecialChanceEnabled] = useState(false);
  const [gambleVisible, setGambleVisible] = useState(false);
  const [takePurpose, setTakePurpose] = useState(0);
  const [countSpinsSinceSC, setCountSpinsSinceSC] = useState(0); // SpecialChance
  const [freezeBtnDashboard, setFreezeBtnDashboard] = useState(false);
  const [nbGamlingRoundAvailable, setNbGamblingRoundAvailable] = useState(1);
  
  const [playerCredits, setPlayerCredits] = useState(0);
  const [playerBet, setPlayerBet] = useState(1);
  const [playerWasPaid, setPlayerWasPaid] = useState(true);
  const [lastGain, setLastGain] = useState(0);

  const [audioActive, setAudioActive] = useState(true);
  const [musicActive, setMusicActive] = useState(true);


  // ---------------------------- MachineSlot -------------------------
  // handleArrays
  const handleArrays = () => {

    let allRollers = [];
    setNumberHelpToWin(null);
    setWinValue(null);
    setMoreWinId(null);
    setEarningsSummaryVisible(false);

    // new hasard shuffle
    for(let rol = 0; rol < 5 ; rol++){
      let shuffledArray = [];
      let nbItemsToPrintInRoller = nbItemsInRollerA;
      if(rol === 1){nbItemsToPrintInRoller = nbItemsInRollerB;}
      else if(rol === 2){nbItemsToPrintInRoller = nbItemsInRollerC;}
      else if(rol === 3){nbItemsToPrintInRoller = nbItemsInRollerD;}
      else if(rol === 4){nbItemsToPrintInRoller = nbItemsInRollerE;}
      for(let i = 0; i < nbItemsToPrintInRoller; i++){
        shuffledArray[i] = (randomIntFromInterval(1, machineItems.length - nbSpecialItemsByTheme));
      } 
      allRollers[rol] = shuffledArray;
    }

    // force the chance to win (with another random)
    const basicLosingArray = losingArray(machineItems.length - nbSpecialItemsByTheme);
    const lucky = Math.ceil(nbChanceHelpToWin * (100/chanceToWinPercent));
    let randNum = countSpinsSinceSC < limitEvenSC ? randomIntFromInterval(1, lucky) : 421; // 421 to get the SpecialChance (/wins/makewins.js)
    
    if((randNum > 420 && randNum <= 520) && countSpinsSinceSC < 5){ // No special chance repeat under 5 times
      randNum = nbChanceHelpToWin + 1;
    }

    setNumberHelpToWin(randNum);
    if(randNum <= nbChanceHelpToWin){
      allRollers = makeWins(allRollers, randNum, basicLosingArray);
    }

    /*---*/ //TESTS
    // const basicLosingArray = losingArray(machineItems.length - nbSpecialItemsByTheme);
    // const lucky = Math.ceil(nbChanceHelpToWin * (100/chanceToWinPercent));
    // // console.log('lucky', lucky);
    // // console.log('limitEvenSC', limitEvenSC);
    // const randNum = 150//randomIntFromInterval(161, 165); //const randNum = randomIntFromInterval(1, lucky);
    // setNumberHelpToWin(randNum);
    // if(randNum <= 421){ //if(randNum <= nbChanceHelpToWin){
    //   allRollers = makeWins(allRollers, randNum, basicLosingArray);
    // }
    /*---*/

    if(arraysGame.length){ // To get 3 last id at the end of the new array game (visual when spin)
      allRollers[0].splice(nbItemsInRollerA - 3, 3, arraysGame[0][0], arraysGame[0][1], arraysGame[0][2]);
      allRollers[1].splice(nbItemsInRollerB - 3, 3, arraysGame[1][0], arraysGame[1][1], arraysGame[1][2]);
      allRollers[2].splice(nbItemsInRollerC - 3, 3, arraysGame[2][0], arraysGame[2][1], arraysGame[2][2]);
      allRollers[3].splice(nbItemsInRollerD - 3, 3, arraysGame[3][0], arraysGame[3][1], arraysGame[3][2]);
      allRollers[4].splice(nbItemsInRollerE - 3, 3, arraysGame[4][0], arraysGame[4][1], arraysGame[4][2]);
    }
    
    setArraysGame(allRollers); // print the new main arrayGame
  }


  // handlespin
  const handleSpin = () => {
    if(!rollersInMove){
      setCountSpinsSinceSC(countSpinsSinceSC+1);
      setRollersInMove(true);
      setPlayerIsPlaying(true);
      playerJustArrived && setPlayerJustArrived(false);
      setPlayerWinsWithId(false);
      setEarningsSummaryVisible(false);
      handleArrays();
      snatchCreditsByBet(playerBet);
      setPlayerWasPaid(false);
      setTypeOfWin(null);
      addOneSpinToTotalSpins(slotMachineName);
      setNbGamblingRoundAvailable(0); //force to refrech when restart gambling
      
      const slotCols = document.querySelectorAll(".slot-col");
      slotCols.forEach(slotcol => slotcol.classList.add("fallingMove"));

      const slotSquares = document.querySelectorAll(".slot-square");
      slotSquares.forEach(square => square.classList.remove("celebration-square"));

      setTimeout(() => {
        slotCols.forEach(slotcol => slotcol.classList.remove("fallingMove"));
      }, 3200);
      setTimeout(() => {
        setRollersInMove(false);
      }, 3250); // + 50ms (to be sure css ".fallingMove" has been removed);
      
      if(audioActive){
        playSound(soundRollerStart);
        setTimeout(() => playSound(soundRollerStop), 1980); // real delay 5 rollers : 2000/2300/2600/2900/3200
        setTimeout(() => playSound(soundRollerStop), 2280);
        setTimeout(() => playSound(soundRollerStop), 2580);
        setTimeout(() => playSound(soundRollerStop), 2880);
        setTimeout(() => playSound(soundRollerStop), 3180);
      }
    }
  }

  useEffect(() => {    
    if(machineItems === null){
      navigate('/error-machine');
    }
    if(!arraysGame.length && machineItems !== null){
      handleArrays();
    }
  });

  useEffect(() => { // Check if Player wins
    if(arraysGame.length && !rollersInMove){
      const line1 = [arraysGame[0][0], arraysGame[1][0], arraysGame[2][0], arraysGame[3][0], arraysGame[4][0]];
      const line2 = [arraysGame[0][1], arraysGame[1][1], arraysGame[2][1], arraysGame[3][1], arraysGame[4][1]];
      const line3 = [arraysGame[0][2], arraysGame[1][2], arraysGame[2][2], arraysGame[3][2], arraysGame[4][2]];
      if(!playerJustArrived) {
        const chkWins = checkIfPlayerWinsWithIds(line1, line2, line3);
        setPlayerWinsWithId(chkWins.winningID);
        setWinValue(chkWins.valueWin);
        setMoreWinId(chkWins.moreWinId);
        if(chkWins !== false && chkWins.winningID !== 17 && chkWins.winningID !== 16 && chkWins.winningID !== 15 && chkWins.winningID !== 14 && chkWins.winningID !== 13 && chkWins.winningID !== 12 && chkWins.winningID !== 11 && chkWins.winningID !== 10) {
          addWinningSpin(); // scores & stats
          setEarningsSummaryVisible(true);
          setFreezeBtnDashboard(true);
          setTimeout(() => {
            setPlayerIsPlaying(false);
            setFreezeBtnDashboard(false);
          }, 3000); // duration earning summary
        }else if(chkWins !== false && chkWins.winningID !== 17 && (chkWins.winningID === 16 || chkWins.winningID === 15 || chkWins.winningID === 14 || chkWins.winningID ===  13 || chkWins.winningID === 12 || chkWins.winningID === 11 || chkWins.winningID === 10)) {
          setFreezeBtnDashboard(true);
          setNbGamblingRoundAvailable(randomIntFromInterval(1, maxGamblingRounds)); //setNbGamblingRoundAvailable(5); 
        }else if(chkWins !== false && chkWins.winningID === 17) {
          addGotSpecialChance(); // scores & stats
          setSpecialChanceEnabled(true);
          setTimeout(() => {
            setSpecialChanceVisible(true);
          }, 1000); // delay lauching component SpecialChance
        }else{
          setPlayerIsPlaying(false);
        }
        
      } 
    }
  }, [arraysGame, playerJustArrived, rollersInMove]);

  const useWatch =  useEffect;

  // Sounds
  useWatch(() => {
    if(audioActive){
      specialChanceEnabled && playSound(soundSpecialChanceEnabled);
      
      if(typeOfWin === 'winner'){
        playSound(soundwinner);
      }
      else if(typeOfWin === 'mega'){
        playSound(soundmega);
      }
      else if(typeOfWin === 'bigwin'){
      playSound(soundbigwin);
      }
      else if(typeOfWin === 'star'){
        playSound(soundstar);
      }
    }
  }, [specialChanceEnabled, typeOfWin]);

  // ---------------- Credits/Solde ----------------------
  useEffect(() => {
    if(localStorage.getItem('playerSolde')){
      setPlayerCredits(Number(localStorage.getItem('playerSolde')));
    }
  }, [playerCredits]);

  const snatchCreditsByBet = (valueOfBet) => {
    setPlayerCredits(playerCredits - valueOfBet);
    localStorage.setItem('playerSolde', playerCredits - valueOfBet);
  }

  const handleBetMax = () => {
    playerCredits >= 25 ? setPlayerBet(25) : setPlayerBet(Math.floor(playerCredits));    
  }
  const handleBetMin = () => {
    setPlayerBet(1);
  }

  
  // Long Press For Bet buttons More & Less
  const timerForBetMore = useRef(null);
  const timerForBetLess = useRef(null);
  const handleMouseDownForMore = () => {
    let count = playerBet;//timer
    if(count < 25 && count < Math.floor(playerCredits)){
      setPlayerBet(prev => prev + 1);
    }
    timerForBetMore.current = setInterval(() => {
      if(count < 24 && count < Math.floor(playerCredits - 1)){
        setPlayerBet(prev => prev + 1);
        count++;
      }else{
        clearInterval(timerForBetMore.current);
      }
    }, 150);
    
    if(playerCredits <= playerBet && playerBet <= 25){
      clearInterval(timerForBetMore.current);
    }
  };
  const handleMouseDownForLess = () => {
    let count = playerBet;
    if(count > 1){
      setPlayerBet(prev => prev - 1);
    }
    timerForBetLess.current = setInterval(() => {
      if(count > 2 && playerBet > 2){
        setPlayerBet(prev => prev - 1);
        count--;
      }else{
        clearInterval(timerForBetLess.current);
      }
    }, 150);
    
    if(count <= 2 && playerBet <= 2){
      clearInterval(timerForBetLess.current);
    }
  };
  const handleMouseUpForBet = () => {
    clearInterval(timerForBetMore.current);
    clearInterval(timerForBetLess.current);
  }

  const handleShowhideSC = () => {
    setSpecialChanceVisible(!specialChanceVisible);
  }

  const handleShowhideGamble = () => {
    setGambleVisible(!gambleVisible);
  }

  const specialChanceResults = (awardValue) => {
    const durationAnimationAfterChooseCard = 5500; //default 6500ms
    const scWinValue = document.querySelector(".sc-winvalue");
    const scGains = document.querySelector(".sc-gains");
    if(scWinValue !== null && scGains !== null){
      scWinValue.innerHTML = awardValue;
      scGains.innerHTML = numberFormat((awardValue * playerBet), 2, ',', ' ');
    }

    if(awardValue !== 0){ // Player wins (special win Id17)
      setTimeout(() => {
        const playerGain = playerBet * awardValue;
        setLastGain(playerGain);
        const newPlayerSolde = parseFloat((playerCredits + playerGain).toFixed(2));
        setPlayerCredits(newPlayerSolde);
        localStorage.setItem('playerSolde', newPlayerSolde);
        setPlayerWasPaid(true);
        addEarnedSpecialChance(); // scores & stats
      }, durationAnimationAfterChooseCard);
    }
    
    //remove classes flying, active, show-hidden-value 
    setTimeout(() => {
      setSpecialChanceVisible(false);
      setSpecialChanceEnabled(false);
      setPlayerIsPlaying(false);
      setCountSpinsSinceSC(0);
      const cardFlying = document.querySelector(".card.flying");
      cardFlying && cardFlying.classList.remove("flying");
      const cardGhost = document.querySelector(".card-ghost.active");
      cardGhost && cardGhost.classList.remove("active");
      const hiddenValue = document.querySelectorAll(".hidden-value");
      hiddenValue && hiddenValue.forEach(item => item.classList.remove("show-hidden-value"));
    }, durationAnimationAfterChooseCard);

  }// /specialChanceResults

  const gambleResults = () => {
    setGambleVisible(false);
  }

  const takeMoneyAndCloseGamble = (gamblingGains) => {
    setGambleVisible(false);
    
    const playerGain = Number(gamblingGains.toFixed(2));
    if(playerGain > 0 && Number(gamblingGains) > 0){
      let kindWin = 'star';
      if(playerGain >= (playerBet * 20)){
        kindWin = 'winner';
      }else if((playerGain >= (playerBet * 7)) && (playerGain < (playerBet * 20))){
        kindWin = 'mega';
      }else if((playerGain >= (playerBet * 3)) && (playerGain < (playerBet * 7))){
        kindWin = 'bigwin';
      }
      setTypeOfWin(kindWin);
      setLastGain(playerGain);
      const newPlayerSolde = parseFloat((playerCredits + playerGain).toFixed(2));
      setPlayerCredits(newPlayerSolde);
      localStorage.setItem('playerSolde', newPlayerSolde);
      setPlayerWasPaid(true);
      setEarningsSummaryVisible(true)
      checkIfNewBestAwardStandardWin(playerGain); // scores & stats
      addWinningSpin(); // scores & stats
      setTimeout(() => {
        setFreezeBtnDashboard(false);
        setPlayerIsPlaying(false);
      }, 3000); // duration earning summary
    }else{
      // losing case
      const loseCelebrations = document.querySelector(".lose-celebrations");
      loseCelebrations.classList.add("lose-celebrations-active");
      audioActive && playSound(loseWithCard);
      setTimeout(() => {
        setFreezeBtnDashboard(false);
        setEarningsSummaryVisible(false);
        loseCelebrations.classList.remove("lose-celebrations-active");
        setPlayerIsPlaying(false);
      }, 1500); // duration earning summary
    }
  }

  useEffect(() => {
    gambleVisible && audioActive && playSound(gambleEnabledSound);
  }, [audioActive, gambleVisible])

  useEffect(() => { // Player wins (standard win)
    if(playerWinsWithId && playerWinsWithId !== 17 && !playerWasPaid && playerIsPlaying){
      const itemValue = machineItems[playerWinsWithId - 1].value;
      const playerGain = parseFloat((((winValue * (moreWinId + 1)) * playerBet) * balanceRatioMoney * itemValue).toFixed(2));
      if(playerWinsWithId === 16  || playerWinsWithId === 15 || playerWinsWithId === 14 || playerWinsWithId === 13 || playerWinsWithId === 12 || playerWinsWithId === 11 || playerWinsWithId === 10){
        setTimeout(()=>{
          setGambleVisible(true);
        }, 50)
        setTakePurpose(parseFloat(playerGain.toFixed(2)));
      }else{
        let kindWin = 'star';
        if(playerGain >= (playerBet * 20)){
          kindWin = 'winner';
        }else if((playerGain >= (playerBet * 7)) && (playerGain < (playerBet * 20))){
          kindWin = 'mega';
        }else if((playerGain >= (playerBet * 3)) && (playerGain < (playerBet * 7))){
          kindWin = 'bigwin';
        }
        setTypeOfWin(kindWin);
        setLastGain(playerGain);
        const newPlayerSolde = parseFloat((playerCredits + playerGain).toFixed(2));
        setPlayerCredits(newPlayerSolde);
        localStorage.setItem('playerSolde', newPlayerSolde);
        setPlayerWasPaid(true);
        checkIfNewBestAwardStandardWin(playerGain); // scores & stats
      }
    }
  }, [playerWinsWithId, playerCredits, winValue, moreWinId, playerBet, playerWasPaid, machineItems, playerIsPlaying]);

  const reloadCredits = () => {
    const totalNewCredits = 500 + playerCredits
    localStorage.setItem('playerSolde', totalNewCredits);
    setPlayerCredits(totalNewCredits);
    addBankLoan();
  }

  const messageAlertCredits = (((playerCredits < 1) || (playerCredits < playerBet)) && !rollersInMove && !specialChanceEnabled && !earningsSummaryVisible && !playerIsPlaying ) && (
    <div className="message-alert-credits">
      <div className="bg-alert-credits">
        <h3>Crédits insuffisants</h3>
        {playerCredits < 1 && (<Fragment>
          <p>Vous devez emprunter à la <Link to="/bank" className="bold turquoise">banque</Link></p>
          <button className='btn-jl' onClick={reloadCredits}>Recharger crédits</button>
        </Fragment>)}
        {((playerCredits > 1) && (playerCredits < playerBet)) && (<p>Vous devez réduire votre mise</p>)}
      </div>
    </div>
  );


  const handleAudio = () => {
    setAudioActive(!audioActive);
  }

  const handleMusic = () => {
    setMusicActive(!musicActive);
  }

  const handlePaytableVisible = () => {
    setPaytableVisible(!paytableVisible);
  }
  

  return(
    <Fragment>
      <section className="slotgame-bg" style={{ backgroundImage:`url(${imgThemeBackground})` }}>

        {musicActive && <audio src={musicThemeMachine} loop={true} autoPlay></audio>}

        <div className="tests-board">
          <p>Slot Machine: <span>{slotMachineName}</span></p>
          <p>playerJustArrived: <span>{playerJustArrived ? 'true' : 'false'}</span></p>
          <p>rollersInMove: <span>{rollersInMove ? 'true' : 'false'}</span></p>
          <p>numberHelpToWin: <span>{numberHelpToWin}</span></p>
          <p>playerWinsWithId: <span>{playerWinsWithId ? playerWinsWithId : 'You lose'}</span></p>
          <p>typeOfWin <span>{typeOfWin === null ? 'null' : typeOfWin}</span></p>
          <p>winValue: <span>{winValue === null ? 'null' : winValue}</span></p>
          <p>moreWinId: <span>{moreWinId === null ? 'null' : moreWinId}</span></p>
          <p>playerWasPaid: <span>{playerWasPaid ? 'true' : 'false'}</span></p>
          <p>earningsSummaryVisible: <span>{earningsSummaryVisible ? 'true' : 'false'}</span></p>
          <p>specialChanceVisible: <span>{specialChanceVisible ? 'true' : 'false'}</span></p>
          <p>gambleVisible: <span>{gambleVisible ? 'true' : 'false'}</span></p>
          <p>countSpinsSinceSC: <span>{countSpinsSinceSC}</span></p>
          <p>audioActive: <span>{audioActive ? 'true' : 'false'}</span></p>
          <p>musicActive: <span>{musicActive ? 'true' : 'false'}</span></p>
          <p>nbGamlingRoundAvailable: <span>{nbGamlingRoundAvailable}</span></p>
          <p>playerIsPlaying: <span>{playerIsPlaying ? 'true' : 'false'}</span></p>
        </div>

        {paytableVisible && <PayTable handlePaytableVisible={handlePaytableVisible} slotMachineName={slotMachineName} balanceRatioMoney={balanceRatioMoney} playerBet={playerBet} />}
        
        <div className="deco-frame" style={{ backgroundImage:`url(${imgThemeFrame})` }}>
          <div className={`slot-frame ${earningsSummaryVisible ? 'slot-frame-winning' : ''}`}>
            {messageAlertCredits}
            <Gamble audioActive={audioActive} gambleVisible={gambleVisible} nbGamlingRoundAvailable={nbGamlingRoundAvailable} gambleResults={gambleResults} takeMoneyAndCloseGamble={takeMoneyAndCloseGamble} takePurpose={takePurpose}></Gamble>
            <SpecialChance specialChanceVisible={specialChanceVisible} slotMachineName={slotMachineName} specialChanceResults={specialChanceResults} audioActive={audioActive} />
            <LoseCelebrations/>
            <EarningsSummary isVisible={earningsSummaryVisible} typeOfWin={typeOfWin} moreWinId={moreWinId} lastGain={lastGain} />
            <SlotCol rollerArray={arraysGame[0]} colName="slot-col-A" winningCase={playerWinsWithId} slotMachineName={slotMachineName} />
            <SlotCol rollerArray={arraysGame[1]} colName="slot-col-B" winningCase={playerWinsWithId} slotMachineName={slotMachineName} />
            <SlotCol rollerArray={arraysGame[2]} colName="slot-col-C" winningCase={playerWinsWithId} slotMachineName={slotMachineName} />
            <SlotCol rollerArray={arraysGame[3]} colName="slot-col-D" winningCase={playerWinsWithId} slotMachineName={slotMachineName} />
            <SlotCol rollerArray={arraysGame[4]} colName="slot-col-E" winningCase={playerWinsWithId} slotMachineName={slotMachineName} />
          </div>
        </div>
        
        <SlotDashboard
          handleMouseDownForMore={handleMouseDownForMore}
          handleMouseDownForLess={handleMouseDownForLess}
          handleMouseUpForBet={handleMouseUpForBet}
          handleSpin={handleSpin} 
          rollersInMove={rollersInMove} 
          playerCredits={playerCredits} 
          playerBet={playerBet} 
          handleBetMax={handleBetMax}
          handleBetMin={handleBetMin}
          lastGain={lastGain} 
          handleShowhideSC={handleShowhideSC}
          handleShowhideGamble={handleShowhideGamble}
          handlePaytableVisible={handlePaytableVisible}
          specialChanceEnabled={specialChanceEnabled}
          freezeBtnDashboard={freezeBtnDashboard}
          handleAudio={handleAudio}
          handleMusic={handleMusic}
          audioActive={audioActive}
          musicActive={musicActive}
        />
      </section>
    </Fragment>
  )
}

export default React.memo(SlotFrame);