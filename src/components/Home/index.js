import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import egypt from "../../img/covers/egypt4.jpg";
import western from "../../img/covers/western.jpg";
import halloween from "../../img/covers/halloween.jpg";
import jungle from "../../img/covers/jungle.jpg";
import foot from "../../img/covers/foot.jpg";
import numbers from "../../img/covers/numbers.jpg";
// import goldtop from "../../img/site/goldentop.png";
// import goldbottom from "../../img/site/goldenbottom.png";
import FlippingCoin from "../FlippingCoin";
import "./home.css";

const Home = () => {
  const [playerCredits, setPlayerCredits] = useState(0);

  useEffect(() => {
    if(localStorage.getItem('playerSolde')){
      setPlayerCredits(Number(localStorage.getItem('playerSolde')));
    }
  }, [playerCredits]);


  return(
    <section className="home">
      <div className="header-home">
        <div className="bg-vignetage">
          
          <div className="welcome-message">
            <h2 className="welcome-title lobster bold">Welcome</h2>
            <p>Bienvenu sur JL Slotgame. Nous vous proposons une liste des machines à sous totalement gratuites sans téléchargement, sans inscription et sans dépôt requis !</p>
          </div>
        </div>
      </div>

      {/* <img src={goldtop} alt="Ornement doré" className="ornement-top" />
          <h2 className="bold">Bienvenue !</h2>
          
          <div className="d-flex justify-content-center flex-wrap">
            <article>
              <p>Bienvenue sur JL Slotgame. Nous vous proposons une liste des machines à sous totalement gratuites sans téléchargement, sans inscription, sans dépôt requis !</p>
              <p>Ici, les machines ont été optimisées pour que les novices s'y retrouvent facilement.</p>
            </article>
            <article>
              <p>Vous êtes du genre à rester prudent financièrement ? Soyez le/la bienvenu(e) car sur JL Slotgame tout est gratuit !</p>
              <p>Les crédits sont fictifs et sont utilisables sur chaque machine, ils sont stockés sur votre navigateur ainsi que les statistiques de jeu.</p>
            </article>
          </div>
          
          <img src={goldbottom} alt="Ornement doré" className="ornement-bottom" /> */}
      
      <div className="green-carpet">
        <div className="gradient-carpet">

        

        <div className="infogames">
            <p>Les crédits sont fictifs, non payant, et sont utilisables sur chaque machine</p>
            <p>Les données et statistiques de jeu sont stockés sur votre navigateur</p>
            <p>Le tableau des différentes combinaisons gagnantes est disponible sur chaque machine</p>
        </div>

      
      {
        playerCredits > 0 ? <div className="cardgame-container">
          
          <Link to="/slotgame/numbers-cocktails">
            <div className="cardgame active">
              <img src={numbers} alt="Numbers Cocktails" />
              <h3>Numbers Cocktails</h3>
            </div>
          </Link>

          <Link to="/slotgame/egyptian-tales">
            <div className="cardgame active">
              <img src={egypt} alt="Egyptian Tales" />
              <h3>Egyptian Tales</h3>
            </div>
          </Link>
          <Link to="/slotgame/football-club">
            <div className="cardgame active">
              <img src={foot} alt="Football Club" />
              <h3>Football Club</h3>
            </div>
          </Link>
          <Link to="/slotgame/payroll-valley">
            <div className="cardgame active">
              <img src={western} alt="Payroll Valley" />
              <h3>Payroll Valley</h3>
            </div>
          </Link>

          <div className="cardgame unactive">
            <img src={halloween} alt="Halloween Shadows" />
            <h3>Halloween Shadows</h3>
          </div>

          <div className="cardgame unactive">
            <img src={jungle} alt="Jungle Adventures" />
            <h3>Jungle Adventures</h3>
          </div>
          
          
        </div>
         
        : <div className="message-gobank">
          {/* <img src={goldtop} alt="Ornement doré" className="golden-ornement" /> */}
          <div className="d-flex justify-content-center flipping-bg">
            <FlippingCoin />
          </div>
          <p className="my-1">Pour jouer, vous devez recharger vos crédits</p>
          <p className="fs-5 bold lobster">Passez à la banque</p>
          <Link to="/bank">
            <button className="btn-home-bank">Banque</button>
          </Link>
          {/* <img src={goldbottom} alt="Ornement doré" className="golden-ornement" /> */}
        </div>
        
        
      }
        </div>
      </div>

    </section>
  )
}

export default Home;