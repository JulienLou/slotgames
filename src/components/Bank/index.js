import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { numberFormat, addBankLoan } from '../../helper/helper';
import Header from '../Header';
import bankImg from "../../img/site/bank.png";
import './bank.css';

const Bank = () => {

  const BankCred = 500;
  const [playerCredits, setPlayerCredits] = useState(0);
  const [justPaid, setJustPaid] = useState(false);

  const date = new Date();
  const minutes = date.getMinutes();
  const colorCarpet = minutes <= 19 ? "green" : (minutes <= 39 ? "red" : "blue");

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
    
    <section className="bank-page">
      
      <Header 
        headerTitle="Banque"
        headerMessage="Cela revient au même que d'échanger des jetons au gichet du casino. Ici vous empruntez des crédits, et c'est gratuit !"
      />

      <div className={`bank-carpet ${colorCarpet}`}>
        <div className="bank-gradient-carpet">
          
          <p className='actual-solde'>Votre solde actuel est de <span className="white-space-nowrap credit">{numberFormat(playerCredits, 2, ',', ' ')}</span> crédits.</p>
          <div className="action-bank">
            <img src={bankImg} alt="Banque" />
            
            {
              !justPaid ?
                playerCredits > 25 
                ? <p className='message-infobank'>La banque vous autorisera à emprunter si vous passez en dessous de 25 crédits.</p>
                : <p className='message-infobank'>La banque vous autorise à emprunter {BankCred} crédits</p>
              : 
              <div>
                <p className='message500'>Nous avons ajouté {BankCred} crédits à votre solde. Amusez-vous bien !</p>
                <Link to="/">
                  <button className='btn-recharge-credits'>Accueil & Machines</button>
                </Link>
              </div>
            }
            <button disabled={playerCredits > 25 && 'disabled'} className='btn-recharge-credits' onClick={handleRechargeCredits}>Recharger crédits</button>
          </div>

        </div>
      </div>
    </section>
    
  )
}

export default Bank;