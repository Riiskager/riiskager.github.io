import mig from '../assets/Mig.jpg'

function Kontakt(){
    return(
        <div className="Kontakt">
            <img src={mig} alt='mig'></img>
            <article>
                <h1> Kontakt </h1>
                    <p>   Hvis du ønsker at kontakte mig, så kan jeg træffes på denne <a href="mailto:emil.axel.riis@gmail.com?subject=Question%20about%20Your%20Service">mail</a>
                </p>
                    
            </article>
        </div>
    )
}
export default Kontakt