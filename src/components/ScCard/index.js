import React, { Fragment } from "react";
import "./sccard.css"

const ScCard = ({card, handleClickCard, awardsValues, imgArrayLessSpecial}) => { // card from "1"
  const cardIndex = card - 1;
  return(
    <Fragment>
      <div className="card" id={`cardSC${card}`} onClick={()=>handleClickCard(card, awardsValues[cardIndex])}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={imgArrayLessSpecial[cardIndex]} alt={`Carte ${card}`} />
            <img src={imgArrayLessSpecial[cardIndex]} alt={`Carte ${card}`} className="img-reflet" />
            <div className="hidden-value">X<span>{awardsValues[cardIndex]}</span></div>
          </div>
          <div className="flip-card-back">
            <div className="award-value">X <span>{awardsValues[cardIndex]}</span></div>
          </div>
        </div>
      </div> 
      <div className="card-ghost" id={`cardGhost${card}`}>
        <img src={imgArrayLessSpecial[cardIndex]} alt={`Carte ${card}`} />
      </div>
    </Fragment>
  )
}

export default React.memo(ScCard);