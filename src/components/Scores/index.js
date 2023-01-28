import { useState, useEffect } from 'react';
import { numberFormat } from '../../helper/helper';
import './scores.css';

const ScoresPage = () => {

  const [totalBankLoans, setTotalBankLoans] = useState(0);
  const [favoriteMachine, setFavoriteMachine] = useState('');
  const [totalSpinsEgy, setTotalSpinsEgy] = useState(0);
  const [totalSpinsNum, setTotalSpinsNum] = useState(0);
  const [totalSpinsFoot, setTotalSpinsFoot] = useState(0);
  const [totalSpinsWest, setTotalSpinsWest] = useState(0);
  const [winningsSpins, setWinningsSpins] = useState(0);
  const [bestWinningSpin, setBestWinningSpin] = useState(0);
  const [gotSC, setGotSC] = useState(0);
  const [wonSC, setWonSC] = useState(0);
  const [actualPlayerSolde, setActualPlayerSolde] = useState(0);

  const [deleteActionVisible, setDeleteActionVisible] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('playerSolde')){
      setActualPlayerSolde(Number(localStorage.getItem('playerSolde')));
    }
    if(localStorage.getItem('nbBankLoans')){
      setTotalBankLoans(Number(localStorage.getItem('nbBankLoans')));
    }
    if(localStorage.getItem('nbTotalSpinsForEgyptianTales')){
      setTotalSpinsEgy(Number(localStorage.getItem('nbTotalSpinsForEgyptianTales')));
      console.log('egy', totalSpinsEgy);
    }
    if(localStorage.getItem('nbTotalSpinsForNumbersCocktails')){
      setTotalSpinsNum(Number(localStorage.getItem('nbTotalSpinsForNumbersCocktails')));
      console.log('num', totalSpinsNum);
    }
    if(localStorage.getItem('nbTotalSpinsForFootballClub')){
      setTotalSpinsFoot(Number(localStorage.getItem('nbTotalSpinsForFootballClub')));
      console.log('foot', totalSpinsFoot);
    }
    if(localStorage.getItem('nbTotalSpinsForPayrollValley')){
      setTotalSpinsWest(Number(localStorage.getItem('nbTotalSpinsForPayrollValley')));
      console.log('west', totalSpinsWest);
    }
    if(totalSpinsEgy > 0 || totalSpinsNum > 0 || totalSpinsFoot > 0 || totalSpinsWest > 0 ){
      const playedMachine = {
        "Egyptian Tales" : totalSpinsEgy,
        "Numbers Cocktails" : totalSpinsNum,
        "Football Club" : totalSpinsFoot,
        "Payroll Valley" : totalSpinsWest
      };
      const highestSpins = Math.max(...Object.values(playedMachine));
      const favMachine = Object.keys(playedMachine).find(key => playedMachine[key] === highestSpins);
      setFavoriteMachine(favMachine);
    }
    if(localStorage.getItem('nbTotalWinningsSpins')){
      setWinningsSpins(Number(localStorage.getItem('nbTotalWinningsSpins')));
    }
    if(localStorage.getItem('bestAwardStandardWin')){
      setBestWinningSpin(Number(localStorage.getItem('bestAwardStandardWin')));
    }
    if(localStorage.getItem('nbTotalGotSpecialChance')){
      setGotSC(Number(localStorage.getItem('nbTotalGotSpecialChance')));
    }
    if(localStorage.getItem('nbTotalEarnedSpecialChance')){
      setWonSC(Number(localStorage.getItem('nbTotalEarnedSpecialChance')));
    }

  }, [totalBankLoans, totalSpinsEgy, totalSpinsNum, totalSpinsFoot, totalSpinsWest, winningsSpins]);

  const handleShowDeleteAction = () => {
    setDeleteActionVisible(!deleteActionVisible);
  }

  const handleDeleteStats = () => {
    setActualPlayerSolde(0);
    localStorage.getItem('playerSolde') && localStorage.setItem('playerSolde', 0);
    setTotalBankLoans(0);
    localStorage.getItem('nbBankLoans') && localStorage.setItem('nbBankLoans', 0);
    setTotalSpinsEgy(0);
    localStorage.getItem('nbTotalSpinsForEgyptianTales') && localStorage.setItem('nbTotalSpinsForEgyptianTales', 0);
    setTotalSpinsNum(0);
    localStorage.getItem('nbTotalSpinsForNumbersCocktails') && localStorage.setItem('nbTotalSpinsForNumbersCocktails', 0);
    setTotalSpinsFoot(0);
    localStorage.getItem('nbTotalSpinsForFootballClub') && localStorage.setItem('nbTotalSpinsForFootballClub', 0);
    setTotalSpinsWest(0);
    localStorage.getItem('nbTotalSpinsForPayrollValley') && localStorage.setItem('nbTotalSpinsForPayrollValley', 0);
    setWinningsSpins(0);
    localStorage.getItem('nbTotalWinningsSpins') && localStorage.setItem('nbTotalWinningsSpins', 0);
    setBestWinningSpin(0);
    localStorage.getItem('bestAwardStandardWin') && localStorage.setItem('bestAwardStandardWin', 0);
    setGotSC(0);
    localStorage.getItem('nbTotalGotSpecialChance') && localStorage.setItem('nbTotalGotSpecialChance', 0);
    setWonSC(0);
    localStorage.getItem('nbTotalEarnedSpecialChance') && localStorage.setItem('nbTotalEarnedSpecialChance', 0);
    setFavoriteMachine('');
    setDeleteActionVisible(false);
  }


  return(
    <section className="scores-page">
      <div className="header-home">
        <div className="bg-vignetage">
          <div className="welcome-message">
            <h2 className="welcome-title lobster bold">Scores</h2>
            <p>Vos scores et statistiques sont stockés sur votre navigateur. Ils seront réinitialisés à la suppression des cookies et des données des sites ou si vous les supprimez manuellement.</p>
          </div>
        </div>
      </div>
      
      <div className="gradient-carpet-black">
        <div className="scores-stats">

          <div className="stat-container">
            <p className='stat'>Votre solde actuel</p>
            <p className='result'>{numberFormat(actualPlayerSolde, 2, ',', ' ')} cr.</p>
          </div>

          <div className="stat-container">
            <p className='stat'>Machine préférée</p>
            <p className='result'>{favoriteMachine}</p>
          </div>

          <div className="stat-container">
            <p className='stat'>{totalBankLoans > 1 ? 'Emprunts banquaires' : 'Emprunt banquaire'}</p>
            <p className='result'>{totalBankLoans}</p>
          </div>

          <div className="stat-container">
            <p className='stat'>Total de spins joués</p>
            <p className='result'>{totalSpinsEgy + totalSpinsFoot + totalSpinsNum + totalSpinsWest}</p>
          </div>

          <div className="stat-container">
            <p className='stat'>Total de spins gagnants</p>
            <p className='result'>{winningsSpins}</p>
          </div>

          <div className="stat-container">
            <p className='stat'>Meilleur spin gagnant</p>
            <p className='result'>{numberFormat(bestWinningSpin, 2, ',', ' ')} cr.</p>
          </div>

          <div className="stat-container">
            <p className='stat'>"Special Chance" obtenus</p>
            <p className='result'>{gotSC}</p>
          </div>

          <div className="stat-container">
            <p className='stat'>"Special Chance" gagnés</p>
            <p className='result'>{wonSC}</p>
          </div>

          <div className="stat-main">
            {totalBankLoans !== 0 && <p className={(totalBankLoans * 500) > actualPlayerSolde ? "red-stat" : "green-stat"}>{(totalBankLoans * 500) > actualPlayerSolde ? 'Vous êtes en négatif...' : 'Vous êtes en positif !'}</p>}
            <div className="stat-balance">
              <p className='actual-balance'>Vos gains actuels</p>
              <p className='result-balance'>{numberFormat((actualPlayerSolde - (totalBankLoans* 500)), 2, ',', ' ')} cr.</p>
            </div>
          </div>

        </div>
        <div className="delete-stats">
          
          {deleteActionVisible 
          ? (<div className='delete-action'>
            <p>Attention, vous êtes sur le point d'effacer votre solde, vos scores et statistiques de jeu. Continuer ?</p>
            <button onClick={handleShowDeleteAction} className='btn-jl btn-white my-2'>Retour</button>
            <button onClick={handleDeleteStats} className='btn-jl btn-red my-2'>Oui, j'efface</button>
            </div>) 
          : (<div><button onClick={handleShowDeleteAction} className='btn-jl my-2'>Effacer</button></div>)}
        </div>
      </div>
    </section>
  )
}

export default ScoresPage;