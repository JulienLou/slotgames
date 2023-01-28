import React from 'react';
import SunRotateBg from '../sunRotateBg';

import nbr1 from '../../img/slots/numbers/1.png';
import nbr2 from '../../img/slots/numbers/2.png';
import nbr3 from '../../img/slots/numbers/3.png';
import nbr4 from '../../img/slots/numbers/4.png';
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
import numSpecial from '../../img/slots/numbers/special.png';

import egy1 from '../../img/slots/egypt/1.png';
import egy2 from '../../img/slots/egypt/2.png';
import egy3 from '../../img/slots/egypt/3.png';
import egy4 from '../../img/slots/egypt/4.png';
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
import egySpecial from '../../img/slots/egypt/special.png';

import foot1 from '../../img/slots/football/1.png';
import foot2 from '../../img/slots/football/2.png';
import foot3 from '../../img/slots/football/3.png';
import foot4 from '../../img/slots/football/4.png';
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
import footSpecial from '../../img/slots/football/special.png';

import west1 from '../../img/slots/western/1.png';
import west2 from '../../img/slots/western/2.png';
import west3 from '../../img/slots/western/3.png';
import west4 from '../../img/slots/western/4.png';
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
import westSpecial from '../../img/slots/western/special.png';


const SlotCol = ({rollerArray, colName, winningCase, slotMachineName}) => {

  let slotSquares = null;
  let imgArray = [];

  if(slotMachineName === 'Egyptian Tales'){
    imgArray = [egy1, egy2, egy3, egy4, egy5, egy6, egy7, egy8, egy9, egy10, egy11, egy12, egy13, egy14, egy15, egy16, egySpecial];
  }else if(slotMachineName === 'Numbers Cocktails'){
    imgArray = [nbr1, nbr2, nbr3, nbr4, nbr5, nbr6, nbr7, nbr8, nbr9, nbr10, nbr11, nbr12, nbr13, nbr14, nbr15, nbr16, numSpecial]; 
  }else if(slotMachineName === 'Football Club'){
    imgArray = [foot1, foot2, foot3, foot4, foot5, foot6, foot7, foot8, foot9, foot10, foot11, foot12, foot13, foot14, foot15, foot16, footSpecial]; 
  }else if(slotMachineName === 'Payroll Valley'){
    imgArray = [west1, west2, west3, west4, west5, west6, west7, west8, west9, west10, west11, west12, west13, west14, west15, west16, westSpecial]; 
  }

  if(rollerArray){ // LightFX: (index <= 2) to avoid light effect under the main visible table slot
    slotSquares = rollerArray.map((roller, index) => {
    return <div key={index} className={`lightFX ${index <= 2 && winningCase === rollerArray[index] ? 'lightActive' : ''}`}>
              <div className='sunRotateContainer'>
                <SunRotateBg />
              </div>
              <div key={index} 
              className={`slot-square ${(winningCase === 17 && (winningCase === rollerArray[index]) ? 'special-chance-square' : '')} ${winningCase === rollerArray[index] ? 'celebration-square' : ''}`} 
              style={{ backgroundImage:`url(${imgArray[rollerArray[index]-1]})` }}>
              </div>
            </div>
  });
    
  }
    
  return rollerArray &&(
    <div className={`slot-col ${colName}`}>
      <div className="slot-square-blank"></div>
      <div className="slot-square-blank"></div>
      <div className="slot-square-blank"></div>
      <div className="slot-moving-col-main">
        {slotSquares}
      </div>
    </div>
  )
}

export default React.memo(SlotCol);






































/* <div className="slot-square" style={{ backgroundImage:`url(${imgArray[rollerArray[0]-1]})` }}></div>
        <div className="slot-square" style={{ backgroundImage:`url(${imgArray[rollerArray[1]-1]})` }}></div>
        <div className="slot-square" style={{ backgroundImage:`url(${imgArray[rollerArray[2]-1]})` }}></div>
        <div className="slot-square" style={{ backgroundImage:`url(${imgArray[rollerArray[3]-1]})` }}></div>
        <div className="slot-square" style={{ backgroundImage:`url(${imgArray[rollerArray[4]-1]})` }}></div>
        <div className="slot-square" style={{ backgroundImage:`url(${imgArray[rollerArray[5]-1]})` }}></div>
        <div className="slot-square" style={{ backgroundImage:`url(${imgArray[rollerArray[6]-1]})` }}></div>
        <div className="slot-square" style={{ backgroundImage:`url(${imgArray[rollerArray[7]-1]})` }}></div>
        <div className="slot-square" style={{ backgroundImage:`url(${imgArray[rollerArray[8]-1]})` }}></div>
        <div className="slot-square" style={{ backgroundImage:`url(${imgArray[rollerArray[9]-1]})` }}></div>

        <div className="slot-square" style={{ backgroundImage:`url(${imgArray[rollerArray[10]-1]})` }}></div>
        <div className="slot-square" style={{ backgroundImage:`url(${imgArray[rollerArray[11]-1]})` }}></div>
        <div className="slot-square" style={{ backgroundImage:`url(${imgArray[rollerArray[12]-1]})` }}></div>
        <div className="slot-square" style={{ backgroundImage:`url(${imgArray[rollerArray[13]-1]})` }}></div>
        <div className="slot-square" style={{ backgroundImage:`url(${imgArray[rollerArray[14]-1]})` }}></div>
        <div className="slot-square" style={{ backgroundImage:`url(${imgArray[rollerArray[15]-1]})` }}></div>
        <div className="slot-square" style={{ backgroundImage:`url(${imgArray[rollerArray[16]-1]})` }}></div>
        <div className="slot-square" style={{ backgroundImage:`url(${imgArray[rollerArray[17]-1]})` }}></div>
        <div className="slot-square" style={{ backgroundImage:`url(${imgArray[rollerArray[18]-1]})` }}></div>
        <div className="slot-square" style={{ backgroundImage:`url(${imgArray[rollerArray[19]-1]})` }}></div>

        <div className="slot-square" style={{ backgroundImage:`url(${imgArray[rollerArray[20]-1]})` }}></div>
        <div className="slot-square" style={{ backgroundImage:`url(${imgArray[rollerArray[21]-1]})` }}></div>
        <div className="slot-square" style={{ backgroundImage:`url(${imgArray[rollerArray[22]-1]})` }}></div>
        <div className="slot-square" style={{ backgroundImage:`url(${imgArray[rollerArray[23]-1]})` }}></div>
        <div className="slot-square" style={{ backgroundImage:`url(${imgArray[rollerArray[24]-1]})` }}></div>
        <div className="slot-square" style={{ backgroundImage:`url(${imgArray[rollerArray[25]-1]})` }}></div>
        <div className="slot-square" style={{ backgroundImage:`url(${imgArray[rollerArray[26]-1]})` }}></div>
        <div className="slot-square" style={{ backgroundImage:`url(${imgArray[rollerArray[27]-1]})` }}></div>
        <div className="slot-square" style={{ backgroundImage:`url(${imgArray[rollerArray[28]-1]})` }}></div>
        <div className="slot-square" style={{ backgroundImage:`url(${imgArray[rollerArray[29]-1]})` }}></div> */