import SunRotateBg from "../sunRotateBg";
import "./sccelebrations.css";

const ScCelebrations = ({chosenCardValue}) => {
  return(
    <div className="sc-celebrations">
    {/* <div className="sc-celebrations sc-celebrations-active"> */}
      <div className="win-case">
        <div className="sun-container">
          <SunRotateBg />
        </div>
        <div className="golden-shield">
          <div>
            <div className="sc-winvalue-container">X<span className="sc-winvalue">15{chosenCardValue}</span></div>
            <p className="sc-gains-container">Gains<span className="sc-gains"></span>Cr.</p>
          </div>
        </div>
      </div>
      <div className="lose-case">
        <div className="broken-glass"></div>
        <div className="black-shield">
          <p>Perdu</p>
        </div>
      </div>
    </div>
  )
}

export default ScCelebrations;