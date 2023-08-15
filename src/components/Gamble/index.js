import React, {useEffect, useState} from "react";
import {randomIntFromInterval, numberFormat} from '../../helper/helper';
import gem1 from '../../img/gamble/g1.png';
import gem2 from '../../img/gamble/g2.png';
import "./gamble.css";
import { playSound } from "../../helper/helper";
import roundOkSound from '../../audio/gamble/roundOK.mp3';
import gemTaken from '../../audio/gamble/gemTaken.mp3'
import allRoundOkSound from '../../audio/gamble/allRoundOK.mp3';

const Gamble = ({audioActive, gambleVisible, takeMoneyAndCloseGamble, takePurpose, nbGamlingRoundAvailable}) => {

  const [gamblingTableVisible, setGamblingTableVisible] = useState(false);
  const [gemtoguess, setGemtoguess] = useState(randomIntFromInterval(0, 1));
  const [roundAvailable, setRoundAvailable] = useState(1);
  const [spentRound, setSpentRound] = useState(1); // is also the multiplier sent to SlotFrame.js takeMoneyAndCloseGamble(multiplier)
  const [gameIsUnderPlayingAndAnimation, setGameIsUnderPlayingAndAnimation] = useState(false)
  const [newTakePurpose, setNewTakePurpose] = useState(1);
  const [lamps, setlamps] = useState([]);

  useEffect(() => {    
    setRoundAvailable(nbGamlingRoundAvailable);
    buildLamps(nbGamlingRoundAvailable);
  }, [nbGamlingRoundAvailable]);

  useEffect(() => {    
    setNewTakePurpose(takePurpose);
  }, [takePurpose]);

  const buildLamps = (nbLamp) => {
    const arrayLamps = []
    for(let i = 0; i < Number(nbLamp); i++){
      arrayLamps.push({lamp: i+1, light: "off"});
    }
    setlamps(arrayLamps);
  }

  const refreshRound = () => {
    reinitializeGemsGame();
    hideGemtoguess();
    removeSecurityGlass();
  }
  
  const reinitializeGemsGame = () => {
    const gem0 = document.querySelector('.gem0');
    const gem1 = document.querySelector('.gem1');
    gem0.classList.remove("unactive", "active");
    gem1.classList.remove("unactive", "active");
    hideGemtoguess();
  }

  const showGambling = () => {
    setGamblingTableVisible(true);
  }

  const randomizeTheGemtoguessColor = () => {
    setGemtoguess(randomIntFromInterval(0, 1));
    console.log("radomizeTheGemtocolorColor() color: ", gemtoguess)
  }

  const gemSelected = (gemSelect) => {
    setGameIsUnderPlayingAndAnimation(true);
    activeSecurityGlass();
    audioActive && playSound(gemTaken);
    checkIfPlayerWinAtGambling(gemSelect);
    const gem0 = document.querySelector('.gem0');
    const gem1 = document.querySelector('.gem1');
    if(gemSelect === 0){
      gem0.classList.add("active");
      gem1.classList.add("unactive");
    }else{
      gem0.classList.add("unactive");
      gem1.classList.add("active");
    }
    setTimeout(() => {
      showGemtoguess();
    }, 1000);
  }

  const checkIfPlayerWinAtGambling = (selectedGem) => {
    let playerContinueToWins = false;
    if(Number(selectedGem) === gemtoguess){
      //Player wins at Gambling
      setRoundAvailable(roundAvailable - 1);
      setSpentRound(spentRound + 1);
      setNewTakePurpose(newTakePurpose * 2);
      playerContinueToWins = true;
      setTimeout(() => {
        audioActive && (roundAvailable > 1 ? playSound(roundOkSound) : playSound(allRoundOkSound) );
      }, 1450)
    }else{
      // Player lose at Gambling
      setSpentRound(spentRound + 1);
      playerContinueToWins = false;
      setTimeout(() => {
        setSpentRound(1);
        setRoundAvailable(1);
        takeMoneyAndCloseGamble(0);
      }, 2500);
      setTimeout(() => {
        setNewTakePurpose(null);
        setGamblingTableVisible(false);
      }, 3500);
    }
    setTimeout(() => {
      setGameIsUnderPlayingAndAnimation(false);
      randomizeTheGemtoguessColor();
      if(roundAvailable <= 1){
        // End of gambling - No more round Available
        reinitializeGemsGame();
        removeSecurityGlass();
        if(playerContinueToWins){
          takeMoneyAndCloseGamble(newTakePurpose * 2);
          setNewTakePurpose(null);
          setGamblingTableVisible(false);
        }
        setSpentRound(1);
        setRoundAvailable(1);
      }else{
        refreshRound();
      }
    }, 3500);
  }

  const playerTakeGainsAndLeave = () => {
    takeMoneyAndCloseGamble(newTakePurpose);
    setGamblingTableVisible(false);
    setSpentRound(1);
    setRoundAvailable(1);
    setNewTakePurpose(null);
    randomizeTheGemtoguessColor();
  }

  const showGemtoguess = () => {
    const gem = document.querySelector(".gemtoguess-card");
    const voletleft = document.querySelector(".volet-left");
    const voletright = document.querySelector(".volet-right");
    gem.classList.add("show");
    voletleft.classList.add("slide");
    voletright.classList.add("slide");
  }

  const hideGemtoguess = () => {
    const gem = document.querySelector(".gemtoguess-card");
    const voletleft = document.querySelector(".volet-left");
    const voletright = document.querySelector(".volet-right");
    gem.classList.remove("show");
    voletleft.classList.remove("slide");
    voletright.classList.remove("slide");
  }

  const activeSecurityGlass = () => {
    const securityGlass = document.querySelector(".security-glass")
    securityGlass.classList.add("security-glass-active");
  }

  const removeSecurityGlass = () => {
    const securityGlass = document.querySelector(".security-glass")
    securityGlass.classList.remove("security-glass-active");
  }

   
  const calculateHit = (nbGambleRoundAvailable) => {
    switch(nbGambleRoundAvailable){
      case 1: 
        return "x2";
      case 2:
        return "jusqu'à x4";
      case 3:
        return "jusqu'à x8";
      case 4:
        return "jusqu'à x16";
      case 5:
        return "jusqu'à x32";
      default:
        return 'augmentées'
    }
  }

  return(
    <div className={`h-100 gamble ${gambleVisible ? 'show': 'hide'}`}>
      <div className="security-glass"></div>
      <h2>Guess the color</h2>
      
      {!gamblingTableVisible ?
      (<div className="gambling-purpose-container d-flex justify-content-center">
          <div className="gambling-purpose">
            <p className="cinzel bold text-shadow message-gains-multiply">Chance de gains {calculateHit(Number(nbGamlingRoundAvailable))}</p>
            <p className="take-purpose text-shadow">{numberFormat(takePurpose, 2, ',', ' ')} cr.</p>
            <div className="actions-purpose-gamble">
              <button className="btn-bet yellow large" onClick={() => takeMoneyAndCloseGamble(takePurpose)}>Take</button>
              <button className="btn-bet pink large" onClick={() => showGambling()}><div className="scaler-heart-animate">Gamble</div></button>
            </div>
          </div>
      </div>) 
      : (
        <div className="gambling-game-container">
          <div className="d-flex justify-content-center">
            <div className="lamp-container">
              {lamps.map((lamp, i) => {
                  return <div className={`lamp ${spentRound - 1 >= Number(lamp.lamp) ? 'light-activated' : ''}`} obj={lamp} key={i} ></div>;
              })}
            </div>
          </div>
          <div className="color-gemtoguess" style={{marginBottom: !gameIsUnderPlayingAndAnimation? "-30px" : "0"}}>
            <div className="volet-left"></div>
            <div className="volet-right"></div>
            {gemtoguess === 0 ? (
              <div className="gemtoguess-card gemtoguess0">
                <img src={gem1} alt="Pierre Jaune" />
              </div>
            ) : (
              <div className="gemtoguess-card gemtoguess1">
                <img src={gem2} alt="Pierre Rouge" />
              </div>
            )}
          </div>
          <div className="d-flex justify-content-center">
            <div className="gem-card gem0">
              <img src={gem1} alt="Choix 1" onClick={() => gemSelected(0)} />
            </div>
            <div className="gem-card gem1">
              <img src={gem2} alt="Choix 2" onClick={() => gemSelected(1)} />
            </div>
          </div>
          <div className="options-choice">
            {!gameIsUnderPlayingAndAnimation &&
            <div className="actual-gains">
              <p>Tentez {numberFormat(Number(newTakePurpose) * 2, 2, ',', ' ')} cr.</p>
            </div>
            }
            {((spentRound > 1) && !gameIsUnderPlayingAndAnimation) &&
              <div className="take-gains">
                <p>Ou prenez {numberFormat(Number(newTakePurpose), 2, ',', ' ')}<span> cr.</span></p>
                <button className="btn-bet yellow extra-large" onClick={() => playerTakeGainsAndLeave()}>Take gain</button>
              </div>
            }
          </div>
          <div className="info">
            <p>nbGamlingRoundAvailable: {nbGamlingRoundAvailable}</p>
            <p>roundAvailable: {roundAvailable}</p>
            <p>spentRound: {spentRound}</p>
            <p>gemtoguess: {gemtoguess}</p>
            <p>newTakePurpose: {numberFormat(newTakePurpose, 2, ',', ' ')}</p>
          </div>
        </div>
      )}

    </div>
  )
}

export default React.memo(Gamble);