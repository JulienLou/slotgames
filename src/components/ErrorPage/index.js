import { Link } from "react-router-dom";

const centerH2 = {
  textAlign: 'center',
  marginTop: '50px'
}

const ErrorPage = () => {
  return(
    <div className="error-page">
      <div className="container">
        <h2 style={centerH2}>Oups, cette page n'existe pas!</h2>
        <Link to="/">
          <button className="btn-jl my-2">Accueil</button>
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage;