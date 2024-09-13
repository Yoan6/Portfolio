import ErrorImage from '../../assets/general/error.png'
import './error.css'

function Error() {
    return (
        <div className="container">
            <img src={ErrorImage} alt="Erreur"/>
            <h1>Cette page n'existe pas, désolé !</h1>
        </div>
    )
}

export default Error