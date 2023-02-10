import './footer.css';
import { Link } from "react-router-dom";

const Footer = () => {

  return(
    <footer id="main-footer">
      <p>JL-Slotgames © Copyright {(new Date().getFullYear())} - <Link to="/policy" className="turquoise">Mentions légales</Link></p>
    </footer>
  )
}

export default Footer;