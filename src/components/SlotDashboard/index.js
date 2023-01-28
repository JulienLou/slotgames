import React from 'react';
import { numberFormat } from '../../helper/helper';
import './slotDashboard.css';
import { RxSpeakerLoud, RxSpeakerOff } from 'react-icons/rx';
import { TbMusic, TbMusicOff } from 'react-icons/tb';

const SlotDashboard = ({freezeBtnDashboard, handleAudio, handleMusic, handleSpin, handleShowhideSC, handlePaytableVisible, rollersInMove, playerCredits, playerBet, handleBetLess, handleBetMore, handleBetMax, handleBetMin, lastGain, specialChanceEnabled, audioActive, musicActive}) => {

  // const [focusedBtn, setFocusedBtn] = useState(null);
  // const betMore = document.querySelector(".betmore");
  // const betLess = document.querySelector(".betless");
  // const betMax = document.querySelector(".betmax");
  // const betMin = document.querySelector(".betmin");
  // const spin = document.querySelector(".spin-button");

  // useEffect(() => {
  //   document.addEventListener('keydown', (e) => {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     console.log("keydown", e.key);
  //     if(focusedBtn === "btnBetMore" && e.key === 'ArrowLeft'){
  //       betMore.focus();
  //       setFocusedBtn("btnBetLess")
  //     }
  //     else if(focusedBtn === "btnBetMore" && e.key === 'ArrowRight'){
  //       betLess.focus();
  //       setFocusedBtn("btnBetMore");
  //     }
  //   });
  // }, [focusedBtn]);

  return(
    
      <div className="slot-dashboard">

        <div className="all-values">
          <div className="bet-value"><span>Mise: </span><span className='value'>{numberFormat(playerBet, 2, ',', ' ')}</span></div>
          <div className="credits"><span>Credits: </span><span className='value'>{numberFormat(playerCredits, 2, ',', ' ')}</span></div>
          <div className="win"><span>Dernier gain: </span><span className='value'>{numberFormat(lastGain, 2, ',', ' ')}</span></div>
        </div>

        {/* <div className="bet">
          <div className="min-max">
            <button className="btn-bet" onClick={handleShowhideSC}>SCC</button>
          </div>  
          <div className="min-max">
            <button className="btn-bet" onClick={handlePaytableVisible}>Pay</button>
          </div>
        </div>

        <div className="bet">
          <div className="more-less">
            <button className="btn-bet" onClick={handleAudio}><span className="d-flex justify-content-center align-items-center">{audioActive ? <RxSpeakerLoud /> : <RxSpeakerOff />}</span></button>
          </div>
          <div className="min-max">
            <button className="btn-bet" onClick={handleMusic}><span className="d-flex justify-content-center align-items-center">{musicActive ? <TbMusic /> : <TbMusicOff />}</span></button>
          </div>
        </div> */}

        <div className="bet-and-options">
          <div>
            <button className="btn-bet" onClick={handleShowhideSC}>SCC</button>
            <button className="btn-bet" onClick={handlePaytableVisible}>Pay</button>
          </div>
          <div>
            <button className="btn-bet" onClick={handleAudio}><span className="d-flex justify-content-center align-items-center">{audioActive ? <RxSpeakerLoud /> : <RxSpeakerOff />}</span></button>
            <button className="btn-bet" onClick={handleMusic}><span className="d-flex justify-content-center align-items-center">{musicActive ? <TbMusic /> : <TbMusicOff />}</span></button>
          </div>
        </div>

        <div className="bet-and-options">
          <div>
            <button className="btn-bet betless" disabled={(freezeBtnDashboard || specialChanceEnabled || playerBet <= 1) && 'disabled'} onClick={handleBetLess}>-</button>
            <button className="btn-bet betmore" disabled={(freezeBtnDashboard || specialChanceEnabled || (playerBet >= 25 || playerCredits <= playerBet)) && 'disabled'} onClick={handleBetMore}>+</button>
          </div>
          <div>
            <button className="btn-bet betmax" disabled={(freezeBtnDashboard || specialChanceEnabled || playerBet <= 1) && 'disabled'} onClick={handleBetMin}>Min</button>
            <button className="btn-bet betmin" disabled={(freezeBtnDashboard || specialChanceEnabled || (playerBet >= 25 || playerCredits <= playerBet)) && 'disabled'} onClick={handleBetMax}>Max</button>
          </div>
        </div>

        <div className="spin">
          <button className="spin-button" onClick={handleSpin} disabled={freezeBtnDashboard || specialChanceEnabled || rollersInMove || playerBet > playerCredits}>Spin</button>
        </div>
      </div>
    
  )
}

export default React.memo(SlotDashboard);