import React from "react";
import ScCard from "../ScCard";
import ScCelebrations from "../ScCelebrations";
import { shuffleArray, playSound } from "../../helper/helper";
import "./specialchance.css";

import nbr5 from '../../img/slots/numbers/5.png';
import nbr6 from '../../img/slots/numbers/6.png';
import nbr7 from '../../img/slots/numbers/7.png';
import nbr8 from '../../img/slots/numbers/8.png';
import nbr9 from '../../img/slots/numbers/9.png';
import nbr10 from '../../img/slots/numbers/10.png';
import nbr11 from '../../img/slots/numbers/11.png';
import nbr12 from '../../img/slots/numbers/12.png';
import nbr13 from '../../img/slots/numbers/13.png';
import nbr14 from '../../img/slots/numbers/14.png';
import nbr15 from '../../img/slots/numbers/15.png';
import nbr16 from '../../img/slots/numbers/16.png';

import egy5 from '../../img/slots/egypt/5.png';
import egy6 from '../../img/slots/egypt/6.png';
import egy7 from '../../img/slots/egypt/7.png';
import egy8 from '../../img/slots/egypt/8.png';
import egy9 from '../../img/slots/egypt/9.png';
import egy10 from '../../img/slots/egypt/10.png';
import egy11 from '../../img/slots/egypt/11.png';
import egy12 from '../../img/slots/egypt/12.png';
import egy13 from '../../img/slots/egypt/13.png';
import egy14 from '../../img/slots/egypt/14.png';
import egy15 from '../../img/slots/egypt/15.png';
import egy16 from '../../img/slots/egypt/16.png';

import foot5 from '../../img/slots/football/5.png';
import foot6 from '../../img/slots/football/6.png';
import foot7 from '../../img/slots/football/7.png';
import foot8 from '../../img/slots/football/8.png';
import foot9 from '../../img/slots/football/9.png';
import foot10 from '../../img/slots/football/10.png';
import foot11 from '../../img/slots/football/11.png';
import foot12 from '../../img/slots/football/12.png';
import foot13 from '../../img/slots/football/13.png';
import foot14 from '../../img/slots/football/14.png';
import foot15 from '../../img/slots/football/15.png';
import foot16 from '../../img/slots/football/16.png';

import west5 from '../../img/slots/western/5.png';
import west6 from '../../img/slots/western/6.png';
import west7 from '../../img/slots/western/7.png';
import west8 from '../../img/slots/western/8.png';
import west9 from '../../img/slots/western/9.png';
import west10 from '../../img/slots/western/10.png';
import west11 from '../../img/slots/western/11.png';
import west12 from '../../img/slots/western/12.png';
import west13 from '../../img/slots/western/13.png';
import west14 from '../../img/slots/western/14.png';
import west15 from '../../img/slots/western/15.png';
import west16 from '../../img/slots/western/16.png';

import hall5 from '../../img/slots/halloween/5.png';
import hall6 from '../../img/slots/halloween/6.png';
import hall7 from '../../img/slots/halloween/7.png';
import hall8 from '../../img/slots/halloween/8.png';
import hall9 from '../../img/slots/halloween/9.png';
import hall10 from '../../img/slots/halloween/10.png';
import hall11 from '../../img/slots/halloween/11.png';
import hall12 from '../../img/slots/halloween/12.png';
import hall13 from '../../img/slots/halloween/13.png';
import hall14 from '../../img/slots/halloween/14.png';
import hall15 from '../../img/slots/halloween/15.png';
import hall16 from '../../img/slots/halloween/16.png';

import jung5 from '../../img/slots/jungle/5.png';
import jung6 from '../../img/slots/jungle/6.png';
import jung7 from '../../img/slots/jungle/7.png';
import jung8 from '../../img/slots/jungle/8.png';
import jung9 from '../../img/slots/jungle/9.png';
import jung10 from '../../img/slots/jungle/10.png';
import jung11 from '../../img/slots/jungle/11.png';
import jung12 from '../../img/slots/jungle/12.png';
import jung13 from '../../img/slots/jungle/13.png';
import jung14 from '../../img/slots/jungle/14.png';
import jung15 from '../../img/slots/jungle/15.png';
import jung16 from '../../img/slots/jungle/16.png';

import aren5 from '../../img/slots/arena/5.png';
import aren6 from '../../img/slots/arena/6.png';
import aren7 from '../../img/slots/arena/7.png';
import aren8 from '../../img/slots/arena/8.png';
import aren9 from '../../img/slots/arena/9.png';
import aren10 from '../../img/slots/arena/10.png';
import aren11 from '../../img/slots/arena/11.png';
import aren12 from '../../img/slots/arena/12.png';
import aren13 from '../../img/slots/arena/13.png';
import aren14 from '../../img/slots/arena/14.png';
import aren15 from '../../img/slots/arena/15.png';
import aren16 from '../../img/slots/arena/16.png';

// Sound
import winWithCard from '../../audio/machineGlobal/winwithcard.mp3';
import loseWithCard from '../../audio/machineGlobal/losewithcard.mp3';
import tokenCard from '../../audio/machineGlobal/cardtoken.mp3';

const SpecialChance = ({specialChanceVisible, slotMachineName, specialChanceResults, audioActive}) => {

  // No "balanceRatioMoney" for Special Chance
  
  let imgArrayLessSpecial = [];

  if(slotMachineName === 'Egyptian Tales'){
    imgArrayLessSpecial = [egy5, egy6, egy7, egy8, egy9, egy10, egy11, egy12, egy13, egy14, egy15, egy16];
  }else if(slotMachineName === 'Numbers Cocktails'){
    imgArrayLessSpecial = [nbr5, nbr6, nbr7, nbr8, nbr9, nbr10, nbr11, nbr12, nbr13, nbr14, nbr15, nbr16]; 
  }else if(slotMachineName === 'Football Club'){
    imgArrayLessSpecial = [foot5, foot6, foot7, foot8, foot9, foot10, foot11, foot12, foot13, foot14, foot15, foot16]; 
  }else if(slotMachineName === 'Payroll Valley'){
    imgArrayLessSpecial = [west5, west6, west7, west8, west9, west10, west11, west12, west13, west14, west15, west16]; 
  }else if(slotMachineName === 'Halloween Shadows'){
    imgArrayLessSpecial = [hall5, hall6, hall7, hall8, hall9, hall10, hall11, hall12, hall13, hall14, hall15, hall16]; 
  }else if(slotMachineName === 'Jungle Treasure Hunters'){
    imgArrayLessSpecial = [jung5, jung6, jung7, jung8, jung9, jung10, jung11, jung12, jung13, jung14, jung15, jung16]; 
  }else if(slotMachineName === 'Medieval Arena'){
    imgArrayLessSpecial = [aren5, aren6, aren7, aren8, aren9, aren10, aren11, aren12, aren13, aren14, aren15, aren16]; 
  }

  if(imgArrayLessSpecial !== []){
    imgArrayLessSpecial = shuffleArray(imgArrayLessSpecial);
  }

  let awardsValues = shuffleArray([0, 2, 2, 3, 5, 7, 15]);
  
  const handleClickCard = (cardNum, awardValue) =>{

    const scCelebrations = document.querySelector(".sc-celebrations");
    const winCase = document.querySelector(".win-case");
    const loseCase = document.querySelector(".lose-case");
    const securityGlass = document.querySelector(".security-glass");
    const cardID = document.getElementById(`cardSC${cardNum}`);
    const cardGhostID = document.getElementById(`cardGhost${cardNum}`);
    const hiddenValue = document.querySelectorAll(".hidden-value");
    const scCardInstruction = document.querySelector(".sc-card-instruction");

    securityGlass.classList.add("security-glass-active");
    cardID && cardID.classList.add("flying");
    cardGhostID && cardGhostID.classList.add("active");
    scCardInstruction.style.display = "none";
    audioActive && playSound(tokenCard);

    // lauch animations/classes
    setTimeout(() => {
      hiddenValue.forEach(item => item.classList.add("show-hidden-value"));
      scCelebrations.classList.add("sc-celebrations-active");
      if(awardValue > 0 && winCase !== null ){
        winCase.style.display = "block";
        audioActive && playSound(winWithCard);
      }else if(awardValue === 0 && loseCase !== null){
        loseCase.style.display = "block";
        audioActive && playSound(loseWithCard);
      }
    }, 2500);

    // remove classes 
    setTimeout(() => {
      securityGlass.classList.remove("security-glass-active");
      scCelebrations.classList.remove("sc-celebrations-active");
      scCardInstruction.style.display = "block";
      if(winCase !== null) {
        winCase.style.display = "none";
      }
      if(loseCase !== null){
        loseCase.style.display = "none";
      }
    }, 6500);

    // send datas to SlotFrame
    specialChanceResults(awardValue);

  }
  
  return(
    <div className={`special-chance ${specialChanceVisible ? 'show': 'hide'}`}>
      <div className="header-sc">
        <h2>Special Chance</h2>
      </div>
      <div className="cards-container">
        <ScCard card={1} handleClickCard={handleClickCard} awardsValues={awardsValues} imgArrayLessSpecial={imgArrayLessSpecial} />
        <ScCard card={2} handleClickCard={handleClickCard} awardsValues={awardsValues} imgArrayLessSpecial={imgArrayLessSpecial} />
        <ScCard card={3} handleClickCard={handleClickCard} awardsValues={awardsValues} imgArrayLessSpecial={imgArrayLessSpecial} />
        <ScCard card={4} handleClickCard={handleClickCard} awardsValues={awardsValues} imgArrayLessSpecial={imgArrayLessSpecial} />
        <ScCard card={5} handleClickCard={handleClickCard} awardsValues={awardsValues} imgArrayLessSpecial={imgArrayLessSpecial} />
        <ScCard card={6} handleClickCard={handleClickCard} awardsValues={awardsValues} imgArrayLessSpecial={imgArrayLessSpecial} />
        <ScCard card={7} handleClickCard={handleClickCard} awardsValues={awardsValues} imgArrayLessSpecial={imgArrayLessSpecial} />
      </div>
      <p className="sc-card-instruction">Retournez une carte</p>
      <div className="security-glass"></div>
      <ScCelebrations />
    </div>
  )
}

export default React.memo(SpecialChance);