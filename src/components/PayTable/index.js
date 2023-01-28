import { useState } from 'react';
import { FaRegWindowClose } from 'react-icons/fa';
import { numberFormat } from '../../helper/helper';
import './paytable.css';

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

import imgFig1 from '../../img/rules/fig1.jpg';
import imgFig2 from '../../img/rules/fig2.jpg';
import imgFig3 from '../../img/rules/fig3.jpg';
import imgFig4 from '../../img/rules/fig4.jpg';
import imgFig5 from '../../img/rules/fig5.jpg';
import imgFig6 from '../../img/rules/fig6.jpg';
import imgFig7 from '../../img/rules/fig7.jpg';
import imgFig8 from '../../img/rules/fig8.jpg';
import imgFig9 from '../../img/rules/fig9.jpg';
import imgFig10 from '../../img/rules/fig10.jpg';
import imgFig11 from '../../img/rules/fig11.jpg';
import imgFig12 from '../../img/rules/fig12.jpg';
import imgFig13 from '../../img/rules/fig13.jpg';
import imgFig14 from '../../img/rules/fig14.jpg';
import imgFig15 from '../../img/rules/fig15.jpg';
import imgFig16 from '../../img/rules/fig16.jpg';
import imgFig17 from '../../img/rules/fig17.jpg';
import imgFig18 from '../../img/rules/fig18.jpg';
import imgFig19 from '../../img/rules/fig19.jpg';
import imgFig20 from '../../img/rules/fig20.jpg';
import imgFig21 from '../../img/rules/fig21.jpg';
import imgFig22 from '../../img/rules/fig22.jpg';
import imgFig23 from '../../img/rules/fig23.jpg';
import imgFig24 from '../../img/rules/fig24.jpg';
import imgFig25 from '../../img/rules/fig25.jpg';
import imgFig26 from '../../img/rules/fig26.jpg';
import imgFig27 from '../../img/rules/fig27.jpg';
import imgFig28 from '../../img/rules/fig28.jpg';
import imgFig29 from '../../img/rules/fig29.jpg';
import imgFig30 from '../../img/rules/fig30.jpg';
import imgFig31 from '../../img/rules/fig31.jpg';
import imgFig32 from '../../img/rules/fig32.jpg';
import imgFig33 from '../../img/rules/fig33.jpg';
import imgFig34 from '../../img/rules/fig34.jpg';
import imgFig35 from '../../img/rules/fig35.jpg';
import imgFig36 from '../../img/rules/fig36.jpg';
import imgFig37 from '../../img/rules/fig37.jpg';
import imgFig38 from '../../img/rules/fig38.jpg';
import imgFig39 from '../../img/rules/fig39.jpg';
import imgFig40 from '../../img/rules/fig40.jpg';
import imgFig41 from '../../img/rules/fig41.jpg';
import imgFig42 from '../../img/rules/fig42.jpg';
import imgFig43 from '../../img/rules/fig43.jpg';


const PayTable = ({handlePaytableVisible, slotMachineName, balanceRatioMoney, playerBet}) => {

  const [itemChosen, setItemChosen] = useState(15); // index (add 1 to get ID);

  const handleImgChosen = (index) => {
    setItemChosen(index)
  }

  let slotSquares = null;
  let imgArray = [];
  let specialItem = '';
  const valueItem = [1, 1.1, 1.2, 1.3, 2, 2.1,2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3, 3.5];
  if(slotMachineName === 'Egyptian Tales'){
    imgArray = [egy1, egy2, egy3, egy4, egy5, egy6, egy7, egy8, egy9, egy10, egy11, egy12, egy13, egy14, egy15, egy16];
    specialItem = egySpecial;
  }else if(slotMachineName === 'Numbers Cocktails'){
    imgArray = [nbr1, nbr2, nbr3, nbr4, nbr5, nbr6, nbr7, nbr8, nbr9, nbr10, nbr11, nbr12, nbr13, nbr14, nbr15, nbr16]; 
    specialItem = numSpecial;
  }else if(slotMachineName === 'Football Club'){
    imgArray = [foot1, foot2, foot3, foot4, foot5, foot6, foot7, foot8, foot9, foot10, foot11, foot12, foot13, foot14, foot15, foot16];
    specialItem = footSpecial; 
  }else if(slotMachineName === 'Payroll Valley'){
    imgArray = [west1, west2, west3, west4, west5, west6, west7, west8, west9, west10, west11, west12, west13, west14, west15, west16];
    specialItem = westSpecial; 
  }

  if(imgArray){
    slotSquares = imgArray.map((img, index) => {
      return <div key={index} className={`item ${itemChosen === index ? 'chosenitem' : ''}`} onClick={()=>{handleImgChosen(index)}}><img src={img} alt={`Symbole ${index + 1}`} /></div>
    });
  }

  return(
    <div className="paytable">
      <div className="paytable-header">
        <button className="close-paytable" onClick={handlePaytableVisible}><FaRegWindowClose /></button>
        <h2>Paytable <span>({slotMachineName})</span></h2>
      </div>

        <div className="items-container">
          {slotSquares}
        </div>


        <div className="rules-container">

          <div className="rules">
            <table>
              <thead>
                  <tr>
                      <th colSpan="2">Symboles et multiplicateur</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td className='leftside-col'><img className='table-img' src={imgArray[itemChosen]} alt="Figure 1" /></td>
                      <td className='rightside-col'>
                        <p className="rules-award">Valeur : <span>{valueItem[itemChosen]}</span></p>
                        <p>Chaque symbole possède sa propre valeur, selectionnez en une pour calculer les récompenses et gains sur les différentes combinaisons gagnantes du tableau.</p>
                      </td>
                  </tr>
                  <tr>
                      <td className='leftside-col'><img className='table-img' src={specialItem} alt="Special Chance" /></td>
                      <td className='rightside-col'>
                        <p>Le "special chance" permet de multiplier sa mise jusqu'à 15. Lorsqu'il est actif, il vous suffit de choisir une carte parmi les 7 proposées. Ainsi vous disposez de 6/7 chances de gagner. Le "special chance" apparaitra au moins tout les 31 tours (spins) si il n'a pas déjà été activé.</p>
                      </td>
                  </tr>
                  <tr>
                      <td className='leftside-col'><h2 className="title-multiplier lobster">Multiplicateur</h2></td>
                      <td className='rightside-col'>
                        <p>Le multiplicateur s'active si un ou plusieurs autres mêmes symboles (composants une combinaison gagnante) sont présents dans le tableau.</p>
                        <p>1 symbole de plus (gains x2), 2 symboles de plus (gains x3), 3 symboles de plus (gains x4) etc...</p>
                      </td>
                  </tr>
              </tbody>
            </table>
          </div>

          <div className="rules">
            <table>
              <thead>
                  <tr>
                      <th colSpan="2">5 Symboles ou plus</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td className='leftside-col'><img className='table-img' src={imgFig1} alt="Figure 1" /></td>
                      <td className='rightside-col'>
                        <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 100), 2, ',', ' ')}</span> crédits</p>
                        <p>5 symboles en position ligne centrale. Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                      </td>
                  </tr>
                  <tr>
                      <td className='leftside-col'><img className='table-img' src={imgFig2} alt="Figure 2" /></td>
                      <td className='rightside-col'>
                        <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 50), 2, ',', ' ')}</span> crédits</p>
                        <p>5 symboles en position ligne haute. Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                      </td>
                  </tr>
                  <tr>
                      <td className='leftside-col'><img className='table-img' src={imgFig3} alt="Figure 3" /></td>
                      <td className='rightside-col'>
                        <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 50), 2, ',', ' ')}</span> crédits</p>
                        <p>5 symboles en position ligne basse. Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                      </td>
                  </tr>
                  <tr>
                      <td className='leftside-col'><img className='table-img' src={imgFig4} alt="Figure 4" /></td>
                      <td className='rightside-col'>
                        <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 12), 2, ',', ' ')}</span> crédits</p>
                        <p>5 symboles en position de "V". Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                      </td>
                  </tr>
                  <tr>
                      <td className='leftside-col'><img className='table-img' src={imgFig5} alt="Figure 5" /></td>
                      <td className='rightside-col'>
                        <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 12), 2, ',', ' ')}</span> crédits</p>
                        <p>5 symboles en position de "V" retournée. Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                      </td>
                  </tr>
                  <tr>
                      <td className='leftside-col'><img className='table-img' src={imgFig6} alt="Figure 6" /></td>
                      <td className='rightside-col'>
                        <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 9), 2, ',', ' ')}</span> crédits</p>
                        <p>5 symboles en position "Z". Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                      </td>
                  </tr>
                  <tr>
                      <td className='leftside-col'><img className='table-img' src={imgFig7} alt="Figure 7" /></td>
                      <td className='rightside-col'>
                        <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 9), 2, ',', ' ')}</span> crédits</p>
                        <p>5 symboles en position "S". Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                      </td>
                  </tr>
                  <tr>
                      <td className='leftside-col'><img className='table-img' src={imgFig8} alt="Figure 8" /></td>
                      <td className='rightside-col'>
                        <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 7), 2, ',', ' ')}</span> crédits</p>
                        <p>5 symboles en position d'arche haute. Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                      </td>
                  </tr>
                  <tr>
                      <td className='leftside-col'><img className='table-img' src={imgFig9} alt="Figure 9" /></td>
                      <td className='rightside-col'>
                        <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 7), 2, ',', ' ')}</span> crédits</p>
                        <p>5 symboles en position d'arche basse retournée. Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                      </td>
                  </tr>
                  <tr>
                      <td className='leftside-col'><img className='table-img' src={imgFig10} alt="Figure 10" /></td>
                      <td className='rightside-col'>
                        <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 7), 2, ',', ' ')}</span> crédits</p>
                        <p>5 symboles en position d'arche haute retournée. Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                      </td>
                  </tr>
                  <tr>
                      <td className='leftside-col'><img className='table-img' src={imgFig11} alt="Figure 11" /></td>
                      <td className='rightside-col'>
                        <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 7), 2, ',', ' ')}</span> crédits</p>
                        <p>5 symboles en position d'arche basse. Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                      </td>
                  </tr>

                  <tr>
                      <td className='leftside-col'><img className='table-img' src={imgFig12} alt="Figure 12" /></td>
                      <td className='rightside-col'>
                        <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 6), 2, ',', ' ')}</span> crédits</p>
                        <p>5 symboles en position "W" haute. Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                      </td>
                  </tr>
                  <tr>
                      <td className='leftside-col'><img className='table-img' src={imgFig13} alt="Figure 13" /></td>
                      <td className='rightside-col'>
                        <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 6), 2, ',', ' ')}</span> crédits</p>
                        <p>5 symboles en position "M" basse. Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                      </td>
                  </tr>
                  <tr>
                      <td className='leftside-col'><img className='table-img' src={imgFig14} alt="Figure 14" /></td>
                      <td className='rightside-col'>
                        <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 6), 2, ',', ' ')}</span> crédits</p>
                        <p>5 symboles en position "M" haute. Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                      </td>
                  </tr>
                  <tr>
                      <td className='leftside-col'><img className='table-img' src={imgFig15} alt="Figure 15" /></td>
                      <td className='rightside-col'>
                        <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 6), 2, ',', ' ')}</span> crédits</p>
                        <p>5 symboles en position "W" basse. Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                      </td>
                  </tr>
                  <tr>
                      <td className='leftside-col'><img className='table-img' src={imgFig16} alt="Figure 16" /></td>
                      <td className='rightside-col'>
                        <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 5), 2, ',', ' ')}</span> crédits</p>
                        <p>5 symboles en position "Birdy" haute et retournée. Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                      </td>
                  </tr>
                  <tr>
                      <td className='leftside-col'><img className='table-img' src={imgFig17} alt="Figure 17" /></td>
                      <td className='rightside-col'>
                        <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 5), 2, ',', ' ')}</span> crédits</p>
                        <p>5 symboles en position "Birdy" basse. Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                      </td>
                  </tr>

                  <tr>
                      <td className='leftside-col'><img className='table-img' src={imgFig18} alt="Figure 18" /></td>
                      <td className='rightside-col'>
                        <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 5), 2, ',', ' ')}</span> crédits</p>
                        <p>5 symboles en position "Birdy" haute. Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                      </td>
                  </tr>
                  <tr>
                      <td className='leftside-col'><img className='table-img' src={imgFig19} alt="Figure 19" /></td>
                      <td className='rightside-col'>
                        <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 5), 2, ',', ' ')}</span> crédits</p>
                        <p>5 symboles en position "Birdy" basse et retournée. Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                      </td>
                  </tr>
                  <tr>
                      <td className='leftside-col'><img className='table-img' src={imgFig20} alt="Figure 20" /></td>
                      <td className='rightside-col'>
                        <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 4), 2, ',', ' ')}</span> crédits</p>
                        <p>5 symboles en position "U". Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                      </td>
                  </tr>
                  <tr>
                      <td className='leftside-col'><img className='table-img' src={imgFig21} alt="Figure 21" /></td>
                      <td className='rightside-col'>
                        <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 4), 2, ',', ' ')}</span> crédits</p>
                        <p>5 symboles en position "U" retournée. Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                      </td>
                  </tr>

                  <tr>
                    <td className='leftside-col'><img className='table-img' src={imgFig30} alt="Figure 30" /></td>
                    <td className='rightside-col'>
                      <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 1), 2, ',', ' ')}</span> crédits</p>
                      <p>5 symboles en position désordonée. Si un ou plusieurs symboles apparaissent en plus des cinq, les gains sont multipliés suivant le schéma du multiplicateur. La figure est à titre d'exemple, de nombreuses combinaisons sont possibles.</p>
                    </td>
                  </tr>
              </tbody>
            </table>

            <table>
              <thead>
                  <tr>
                      <th colSpan="2">4 Symboles ou plus</th>
                  </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='leftside-col'><img className='table-img' src={imgFig22} alt="Figure 22" /></td>
                  <td className='rightside-col'>
                    <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 2.5), 2, ',', ' ')}</span> crédits</p>
                    <p>4 symboles en position ligne centrale (à partir de la première colonne). Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                  </td>
                </tr>
                <tr>
                    <td className='leftside-col'><img className='table-img' src={imgFig23} alt="Figure 23" /></td>
                    <td className='rightside-col'>
                      <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 2), 2, ',', ' ')}</span> crédits</p>
                      <p>4 symboles en position ligne haute (à partir de la première colonne). Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                    </td>
                </tr>
                <tr>
                    <td className='leftside-col'><img className='table-img' src={imgFig24} alt="Figure 24" /></td>
                    <td className='rightside-col'>
                      <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 2), 2, ',', ' ')}</span> crédits</p>
                      <p>4 symboles en position ligne basse (à partir de la première colonne). Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                    </td>
                </tr>

                <tr>
                  <td className='leftside-col'><img className='table-img' src={imgFig31} alt="Figure 31" /></td>
                  <td className='rightside-col'>
                    <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 1.75), 2, ',', ' ')}</span> crédits</p>
                    <p>4 symboles en position ligne centrale (à partir de la deuxième colonne). Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                  </td>
                </tr>
                <tr>
                    <td className='leftside-col'><img className='table-img' src={imgFig32} alt="Figure 32" /></td>
                    <td className='rightside-col'>
                      <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 1.75), 2, ',', ' ')}</span> crédits</p>
                      <p>4 symboles en position ligne haute (à partir de la deuxième colonne). Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                    </td>
                </tr>
                <tr>
                    <td className='leftside-col'><img className='table-img' src={imgFig33} alt="Figure 33" /></td>
                    <td className='rightside-col'>
                      <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 1.75), 2, ',', ' ')}</span> crédits</p>
                      <p>4 symboles en position ligne basse (à partir de la deuxième colonne). Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                    </td>
                </tr>
              </tbody>
            </table>

            <table>
              <thead>
                  <tr>
                      <th colSpan="2">3 Symboles ou plus</th>
                  </tr>
              </thead>
              <tbody>
                <tr>
                    <td className='leftside-col'><img className='table-img' src={imgFig25} alt="Figure 25" /></td>
                    <td className='rightside-col'>
                      <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 1.5), 2, ',', ' ')}</span> crédits</p>
                      <p>3 symboles en position ligne centrale (à partir de la première colonne). Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                    </td>
                </tr>
                <tr>
                    <td className='leftside-col'><img className='table-img' src={imgFig26} alt="Figure 26" /></td>
                    <td className='rightside-col'>
                      <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 1.5), 2, ',', ' ')}</span> crédits</p>
                      <p>3 symboles en position ligne haute (à partir de la première colonne). Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                    </td>
                </tr>
                <tr>
                    <td className='leftside-col'><img className='table-img' src={imgFig27} alt="Figure 27" /></td>
                    <td className='rightside-col'>
                      <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 1.5), 2, ',', ' ')}</span> crédits</p>
                      <p>3 symboles en position ligne basse (à partir de la première colonne). Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                    </td>
                </tr>
                <tr>
                    <td className='leftside-col'><img className='table-img' src={imgFig28} alt="Figure 28" /></td>
                    <td className='rightside-col'>
                      <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 1.25), 2, ',', ' ')}</span> crédits</p>
                      <p>3 symboles en position ligne diagonale haute (à partir de la première colonne). Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                    </td>
                </tr>
                <tr>
                    <td className='leftside-col'><img className='table-img' src={imgFig29} alt="Figure 29" /></td>
                    <td className='rightside-col'>
                      <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 1.25), 2, ',', ' ')}</span> crédits</p>
                      <p>3 symboles en position ligne diagonale basse (à partir de la première colonne). Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                    </td>
                </tr>
                <tr>
                    <td className='leftside-col'><img className='table-img' src={imgFig34} alt="Figure 34" /></td>
                    <td className='rightside-col'>
                      <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 0.5), 2, ',', ' ')}</span> crédits</p>
                      <p>3 symboles en position ligne centrale (à partir de la deuxième colonne). Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                    </td>
                </tr>
                <tr>
                    <td className='leftside-col'><img className='table-img' src={imgFig35} alt="Figure 35" /></td>
                    <td className='rightside-col'>
                      <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 0.5), 2, ',', ' ')}</span> crédits</p>
                      <p>3 symboles en position ligne haute (à partir de la deuxième colonne). Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                    </td>
                </tr>
                <tr>
                    <td className='leftside-col'><img className='table-img' src={imgFig36} alt="Figure 36" /></td>
                    <td className='rightside-col'>
                      <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 0.5), 2, ',', ' ')}</span> crédits</p>
                      <p>3 symboles en position ligne basse (à partir de la deuxième colonne). Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                    </td>
                </tr>
                <tr>
                    <td className='leftside-col'><img className='table-img' src={imgFig37} alt="Figure 37" /></td>
                    <td className='rightside-col'>
                      <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 0.5), 2, ',', ' ')}</span> crédits</p>
                      <p>3 symboles en position ligne diagonale haute (à partir de la deuxième colonne). Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                    </td>
                </tr>
                <tr>
                    <td className='leftside-col'><img className='table-img' src={imgFig38} alt="Figure 38" /></td>
                    <td className='rightside-col'>
                      <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 0.5), 2, ',', ' ')}</span> crédits</p>
                      <p>3 symboles en position ligne diagonale basse (à partir de la deuxième colonne). Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                    </td>
                </tr>

                <tr>
                    <td className='leftside-col'><img className='table-img' src={imgFig39} alt="Figure 39" /></td>
                    <td className='rightside-col'>
                      <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 0.35), 2, ',', ' ')}</span> crédits</p>
                      <p>3 symboles en position ligne centrale (à partir de la troisième colonne). Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                    </td>
                </tr>
                <tr>
                    <td className='leftside-col'><img className='table-img' src={imgFig40} alt="Figure 40" /></td>
                    <td className='rightside-col'>
                      <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 0.35), 2, ',', ' ')}</span> crédits</p>
                      <p>3 symboles en position ligne haute (à partir de la troisième colonne). Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                    </td>
                </tr>
                <tr>
                    <td className='leftside-col'><img className='table-img' src={imgFig41} alt="Figure 41" /></td>
                    <td className='rightside-col'>
                      <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 0.35), 2, ',', ' ')}</span> crédits</p>
                      <p>3 symboles en position ligne basse (à partir de la troisième colonne). Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                    </td>
                </tr>
                <tr>
                    <td className='leftside-col'><img className='table-img' src={imgFig42} alt="Figure 42" /></td>
                    <td className='rightside-col'>
                      <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 0.35), 2, ',', ' ')}</span> crédits</p>
                      <p>3 symboles en position ligne diagonale haute (à partir de la troisième colonne). Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                    </td>
                </tr>
                <tr>
                    <td className='leftside-col'><img className='table-img' src={imgFig43} alt="Figure 43" /></td>
                    <td className='rightside-col'>
                      <p className="rules-award">Récompense : <span>{numberFormat(((valueItem[itemChosen]) * balanceRatioMoney * playerBet * 0.35), 2, ',', ' ')}</span> crédits</p>
                      <p>3 symboles en position ligne diagonale basse (à partir de la troisième colonne). Si un ou plusieurs symboles apparaissent en plus de la ligne gagnante, les gains sont multipliés suivant le schéma du multiplicateur.</p>
                    </td>
                </tr>

              </tbody>
            </table>

          </div>

          

        </div>{/* /rules-container */}
        



    </div>
  )
}

export default PayTable;