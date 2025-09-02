import { Fragment } from "react"
import HjemIkon from '../assets/home.png'

export default function Header(){
    return(
        <Fragment>
            <h1>Velkommen til mit portfolie</h1>
            <img className="hjemikon" src={HjemIkon} alt="hjem-ikon" />
        </Fragment>
    )
}