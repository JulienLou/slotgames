import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { numberFormat, addBankLoan } from '../../helper/helper';
import bankImg from "../../img/site/bank.png";
import './bank.css';

const Bank = () => {

  const BankCred = 500;
  const [playerCredits, setPlayerCredits] = useState(0);
  const [justPaid, setJustPaid] = useState(false);

  const handleRechargeCredits = () => {
    if(playerCredits <= 25){
      setPlayerCredits(playerCredits + BankCred);
      setJustPaid(true);
      localStorage.setItem('playerSolde', playerCredits + BankCred);
      addBankLoan();
    }
  }

  useEffect(() => {
    if(localStorage.getItem('playerSolde')){
      setPlayerCredits(Number(localStorage.getItem('playerSolde')))
    }
  }, [playerCredits])

  return(
    <div className="container">
      <section className="bank">
        <div className="header-bank">
          <h2>Banque</h2>
          <p className='actual-solde'>Votre solde actuel est de <span className="white-space-nowrap credit">{numberFormat(playerCredits, 2, ',', ' ')}</span> crédits.</p>
        </div>
        <div className="action-bank">
          <img src={bankImg} alt="Banque" />
          
          {
            !justPaid ?
              playerCredits > 25 
              ? <p className='message-infobank'>Vous avez suffisement de crédits pour jouer, la banque ne vous autorise pas à emprunter.</p>
              : <p className='message-infobank'>La banque vous autorise à emprunter {BankCred} crédits</p>
            : 
            <div>
              <p className='message500'>Merci, nous avons ajouté {BankCred} crédits à votre solde. Amusez-vous bien !</p>
              <Link to="/">
                <button className='btn-recharge-credits'>Accueil & Machines</button>
              </Link>
            </div>
          }
          <button disabled={playerCredits > 25 && 'disabled'} className='btn-recharge-credits' onClick={handleRechargeCredits}>Recharger crédits</button>
        </div>
      </section>
    </div>
  )
}

export default Bank;