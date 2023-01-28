import { Link } from "react-router-dom";

const centerH2 = {
  textAlign: 'center',
  marginTop: '50px'
}

const ErrorMachine = () => {
  return(
    <div className="error-page">
      <div className="container">
        <h2 style={centerH2}>Oups, cette machine ne répond pas.</h2>
        <Link to="/">
          <button className="btn-jl my-2">Accueil</button>
        </Link>
      </div>
    </div>
  )
}

export default ErrorMachine;