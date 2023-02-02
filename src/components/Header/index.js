import './header.css';

const Header = ({headerTitle, headerMessage}) => {
  return(
    <div className="header-site">
      <div className="bg-vignetage">
        
        <div className="welcome-message">
          <h2 className="welcome-title lobster bold">{headerTitle}</h2>
          <p>{headerMessage}</p>
        </div>
      </div>
    </div>
  )
}

export default Header;