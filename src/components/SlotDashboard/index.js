import React from 'react';
import { numberFormat } from '../../helper/helper';
import './slotDashboard.css';
import { RxSpeakerLoud, RxSpeakerOff } from 'react-icons/rx';
import { TbMusic, TbMusicOff } from 'react-icons/tb';

const SlotDashboard = ({handleMouseDownForMore, handleMouseDownForLess, handleMouseUpForBet, freezeBtnDashboard, handleAudio, handleMusic, handleSpin, handleShowhideSC, handleShowhideGamble, handleShowDanfor, handlePaytableVisible, rollersInMove, playerCredits, playerBet, handleBetMax, handleBetMin, lastGain, specialChanceEnabled, audioActive, musicActive}) => {

  return(
      <div className="slot-dashboard">

        <div className="all-values">
          <div className="bet-value"><span>Mise: </span><span className='value'>{numberFormat(playerBet, 2, ',', ' ')}</span></div>
          <div className="credits"><span>Credits: </span><span className='value'>{numberFormat(playerCredits, 2, ',', ' ')}</span></div>
          <div className="win"><span>Dernier gain: </span><span className='value'>{numberFormat(lastGain, 2, ',', ' ')}</span></div>
        </div>

        <div className="bet-and-options">
          <div>
            {/* <button className="btn-bet" onClick={handleShowhideSC}>SCC</button> */}
            {/* <button className="btn-bet" onClick={handleShowhideGamble}>GAM</button> */}
            {/* <button className="btn-bet" onClick={handleShowDanfor}>DF</button> */}
            <button className="btn-bet" onClick={handlePaytableVisible}>Pay</button>
          </div>
          <div>
            <button className="btn-bet" onClick={handleAudio}><span className="d-flex justify-content-center align-items-center">{audioActive ? <RxSpeakerLoud /> : <RxSpeakerOff />}</span></button>
            <button className="btn-bet" onClick={handleMusic}><span className="d-flex justify-content-center align-items-center">{musicActive ? <TbMusic /> : <TbMusicOff />}</span></button>
          </div>
        </div>

        <div className="bet-and-options">
          <div>
            <button className="btn-bet betless" disabled={(rollersInMove || freezeBtnDashboard || specialChanceEnabled || playerBet <= 1) && 'disabled'} onMouseDown={handleMouseDownForLess} onMouseUp={handleMouseUpForBet} onMouseLeave={handleMouseUpForBet}>-</button>
            <button className="btn-bet betmore" disabled={(rollersInMove || freezeBtnDashboard || specialChanceEnabled || (playerBet >= 25 || playerCredits <= playerBet)) && 'disabled'}  onMouseDown={handleMouseDownForMore} onMouseUp={handleMouseUpForBet} onMouseLeave={handleMouseUpForBet}>+</button>
          </div>
          <div>
            <button className="btn-bet betmin" disabled={(rollersInMove || freezeBtnDashboard || specialChanceEnabled || playerBet <= 1) && 'disabled'} onClick={handleBetMin}>Min</button>
            <button className="btn-bet betmax" disabled={(rollersInMove || freezeBtnDashboard || specialChanceEnabled || (playerBet >= 25 || playerCredits <= playerBet)) && 'disabled'} onClick={handleBetMax}>Max</button>
          </div>
        </div>

        <div className="spin">
          <button className="spin-button" onClick={handleSpin} disabled={freezeBtnDashboard || specialChanceEnabled || rollersInMove || playerBet > playerCredits}>Spin</button>
        </div>
      </div>
    
  )
}

export default React.memo(SlotDashboard);