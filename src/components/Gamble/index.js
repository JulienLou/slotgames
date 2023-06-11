import React, {useEffect, useState} from "react";
import {randomIntFromInterval, numberFormat} from '../../helper/helper';
import gem1 from '../../img/gamble/g1.png';
import gem2 from '../../img/gamble/g2.png';
import "./gamble.css";

const Gamble = ({gambleVisible, takeMoneyAndCloseGamble, takePurpose, nbGamlingRoundAvailable}) => {

  const [gamblingTableVisible, setGamblingTableVisible] = useState(false);
  const [gemtoguess, setGemtoguess] = useState(0);
  const [roundAvailable, setRoundAvailable] = useState(1);
  const [spentRound, setSpentRound] = useState(1); // is also the multiplier sent to SlotFrame.js takeMoneyAndCloseGamble(multiplier)
  const [gameIsUnderPlayingAndAnimation, setGameIsUnderPlayingAndAnimation] = useState(false)
  const [newTakePurpose, setNewTakePurpose] = useState(1);

  useEffect(() => {    
    randomizeTheGemtoguessColor();
  }, []);

  useEffect(() => {    
    setRoundAvailable(nbGamlingRoundAvailable);
  }, [nbGamlingRoundAvailable]);

  useEffect(() => {    
    setNewTakePurpose(takePurpose);
  }, [takePurpose]);

  const refreshRound = () => {
    randomizeTheGemtoguessColor();
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
  }

  const gemSelected = (gemSelect) => {
    setGameIsUnderPlayingAndAnimation(true);
    activeSecurityGlass();
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
      console.log("Player wins at Gambling")
      setRoundAvailable(roundAvailable - 1);
      setSpentRound(spentRound + 1);
      setNewTakePurpose(newTakePurpose * 2);
      playerContinueToWins = true;
    }else{
      console.log("Player lose at Gambling")
      playerContinueToWins = false;
      setSpentRound(1);
      setRoundAvailable(1);
      // launch losing celebration
      setTimeout(() => {
        takeMoneyAndCloseGamble(0);
      }, 2500);
      setTimeout(() => {
        setNewTakePurpose(null);
        setGamblingTableVisible(false);
      }, 3500);
    }
    setTimeout(() => {
      console.log("roundAvailable - spentRound", roundAvailable - spentRound)
      setGameIsUnderPlayingAndAnimation(false);
      if(roundAvailable <= 1){
        // end of gambling
        console.log("on arrive à la fin des tours")
        reinitializeGemsGame();
        removeSecurityGlass();
        if(playerContinueToWins){
          console.log('playercontinuetowins -> takemoneyandclosegamble')
          takeMoneyAndCloseGamble(newTakePurpose);// <----------------------------- not sure about that
          setNewTakePurpose(null);
          setGamblingTableVisible(false);
        }
        setSpentRound(1);
        setRoundAvailable(1);
        console.log("No more round Available")
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
    const voletleft = document.querySelector(".volet-left");
    const voletright = document.querySelector(".volet-right");
    voletleft.classList.add("slide");
    voletright.classList.add("slide");
  }

  const hideGemtoguess = () => {
    const voletleft = document.querySelector(".volet-left");
    const voletright = document.querySelector(".volet-right");
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

  return(
    <div className={`h-100 gamble ${gambleVisible ? 'show': 'hide'}`}>
      <div className="security-glass"></div>
      <h2>Guess the color</h2>
      
      {!gamblingTableVisible ?
      (<div className="gambling-purpose-container d-flex justify-content-center">
          <div className="gambling-purpose">
            <p className="cinzel bold text-shadow message-gains-multiply">Chance de gains {Number(nbGamlingRoundAvailable) > 1 ? `jusqu'à x${Number(nbGamlingRoundAvailable) + 1}` : "x2" }</p>
            <p className="take-purpose text-shadow">{numberFormat(takePurpose, 2, ',', ' ')} cr.</p>
            <div className="actions-purpose-gamble">
              <button className="btn-bet yellow large" onClick={() => takeMoneyAndCloseGamble(takePurpose)}>Take</button>
              <button className="btn-bet pink large" onClick={() => showGambling()}><div className="scaler-heart-animate">Gamble</div></button>
            </div>
          </div>
      </div>) 
      : (
        <div className="gambling-game-container">
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
              <img src={gem1} alt="Pierre Jaune" onClick={() => gemSelected(0)} />
            </div>
            <div className="gem-card gem1">
              <img src={gem2} alt="Pierre Rouge" onClick={() => gemSelected(1)} />
            </div>
          </div>
          <div className="actual-gains">
            <p>Vous jouez pour {numberFormat(Number(newTakePurpose) * 2, 2, ',', ' ')} cr.</p>
          </div>
          {((spentRound > 1) && !gameIsUnderPlayingAndAnimation) &&
            <div>
              <p>Ou prenez {numberFormat(Number(newTakePurpose), 2, ',', ' ')} cr.</p>
              <button className="btn-bet yellow extra-large" onClick={() => playerTakeGainsAndLeave()}>Take gain</button>
            </div>
          }
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