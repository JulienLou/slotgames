import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import egypt from "../../img/covers/egypt.jpg";
import western from "../../img/covers/western.jpg";
import halloween from "../../img/covers/halloween.jpg";
import jungle from "../../img/covers/jungle.jpg";
import foot from "../../img/covers/foot.jpg";
import numbers from "../../img/covers/numbers.jpg";
import animals from "../../img/covers/animals.jpg";
import china from "../../img/covers/china.jpg";
import cyberpunk from "../../img/covers/cyberpunk.jpg";
import arena from "../../img/covers/arena.jpg";
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
      <Header 
        headerTitle="Accueil"
        headerMessage="Bienvenu sur JL Slotgame. Nous vous proposons une liste des machines à sous totalement gratuites sans téléchargement, sans inscription et sans dépôt requis !"
      />

      
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
              
              <Link to="/slotgame/halloween-shadows">
                <div className="cardgame active">
                  <img src={halloween} alt="Halloween Shadows" />
                  <h3>Halloween Shadows</h3>
                  {/* <h3>Dr. Bogard Mansion</h3> */}
                </div>
              </Link>

              <Link to="/slotgame/jungle-treasure-hunters">
                <div className="cardgame active">
                  <img src={jungle} alt="Jungle Treasure Hunters" />
                  <h3>Jungle Treasure Hunters</h3>
                </div>
              </Link>

              <Link to="/slotgame/medieval-arena">
                <div className="cardgame active">
                  <img src={arena} alt="Medieval Arena" />
                  <h3>Medieval Arena</h3>
                </div>
              </Link>

              <div className="cardgame unactive">
                <div className="avaible-soon">Bientôt disponible</div>
                <img src={animals} alt="Proudly Animals" />
                <h3>Proudly Animals</h3>
              </div>

              <div className="cardgame unactive">
                <div className="avaible-soon">Bientôt disponible</div>
                <img src={china} alt="Dragon Blue Lantern" />
                <h3>Dragon Blue Lantern</h3>
              </div>

              <div className="cardgame unactive">
                <div className="avaible-soon">Bientôt disponible</div>
                <img src={cyberpunk} alt="Mode Cyberpunk" />
                <h3>Mode Cyberpunk</h3>
              </div>


            </div>

              : <div className="message-gobank">
                <div className="d-flex justify-content-center flipping-bg">
                  <FlippingCoin />
                </div>
                <p className="my-1">Pour jouer, vous devez recharger vos crédits</p>
                <p className="fs-5 bold lobster">Passez à la banque</p>
                <Link to="/bank">
                  <button className="btn-home-bank">Banque</button>
                </Link>
              </div>


          }
        </div>
      </div>

    </section>
  )
}

export default Home;