import './header.css';

const Header = ({headerTitle, headerMessage}) => {

  const date = new Date();
  const minutes = date.getMinutes();
  const colorHeader = minutes <= 19 ? "green" : (minutes <= 39 ? "red" : "blue");

  return(
    <div className="header-site">
      <div className="bg-vignetage">
        
        <div className="welcome-message">
          <h2 className={`welcome-title lobster bold ${colorHeader}`}>{headerTitle}</h2>
          <p>{headerMessage}</p>
        </div>
      </div>
    </div>
  )
}

export default Header;