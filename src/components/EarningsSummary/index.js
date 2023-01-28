import React from "react";
import "./earningsSummary.css";
import { numberFormat } from '../../helper/helper';
import gains from "../../img/wins/gains.png";
import bigwin from "../../img/wins/bigwin.png";
import mega from "../../img/wins/mega.png";
import winner from "../../img/wins/winner.png";
import star from "../../img/wins/star.png";
import welldone from "../../img/wins/welldone.png";
import SunRotateBg from "../sunRotateBg";

const EarningsSummary = ({isVisible, typeOfWin, moreWinId, lastGain}) => {
  
  // let typeOfWin = star
  // if((winValue * playerBet) * balanceRatioMoney >= balanceRatioMoney * (playerBet * 300)){
  //   typeOfWin = winner
  // }else if((winValue * playerBet) * balanceRatioMoney < balanceRatioMoney * (playerBet * 300) && (winValue * playerBet) * balanceRatioMoney >= balanceRatioMoney * (playerBet * 20)){
  //   typeOfWin = mega
  // }else if((winValue * playerBet) * balanceRatioMoney < balanceRatioMoney * (playerBet * 15) && (winValue * playerBet) * balanceRatioMoney >= balanceRatioMoney * (playerBet * 10)){
  //   typeOfWin = bigwin
  // }

  let winningImgBg = star;
  if(typeOfWin === 'winner'){
    winningImgBg = winner;
  }else if(typeOfWin === 'mega'){
    winningImgBg = mega;
  }else if(typeOfWin === 'bigwin'){
    winningImgBg = bigwin;
  }

  const bonusGain = moreWinId > 0 
  ? <div className="bonus-gain fiesta-shadows">
      <img src={gains} alt={`gains X${moreWinId+1}`} className="imgGains" />
      <div className="gains-x">X</div>
      <div className="gains-multiplier">{moreWinId+1}</div>
    </div>
  : <div className="bonus-gain fiesta-shadows">
      <img src={welldone} alt="Bravo" className="imgwelldone" />
    </div>

  return(
    <div className={`earnings-summary ${isVisible && 'active-earnings-summary'}`}>
      <div className="earn-container">
        <SunRotateBg />
        <div className="bigwinimg-container">
          <img src={winningImgBg} alt="Big win" className="imgBigWin" />
        </div>
        {bonusGain}
      </div>
      <div className="gain-container">
        <div className="total-gain fiesta-shadows">{numberFormat(lastGain, 2, ',', ' ')}</div>
      </div>
    </div>
  )
}

export default React.memo(EarningsSummary);