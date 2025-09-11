import mig from '../assets/Mig.jpg'

function Kontakt(){
    return(
        <div className="Kontakt">
            <img src={mig} alt='mig'></img>
            <article>
                <h1> Kontakt </h1>
                    <p>   Hvis du ønsker at kontakte mig, så kan jeg træffes på dette <a href="mailto:emil.axel.riis@gmail.com?subject=Job/Praktik%20mulighed%20[Indsæt navn]" target="_blank" rel="noopener noreferrer">link</a>
                </p>
                <h1>Alternativt</h1>
                <p>Så er min Email: emil.axel.riis@gmail.com</p>
            </article>
        </div>
    )
}
export default Kontakt