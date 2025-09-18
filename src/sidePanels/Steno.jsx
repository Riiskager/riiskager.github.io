import Stenostart from '../assets/Stenostart.jpg'
import Stenotegn from '../assets/StenoTegn.png'

export default function Steno(){
    return(
        <div className="Steno">
        <img src={Stenostart}></img>
            <article>
                <a href='https://angst-steno-eksamen.axelriis.dk/' target="blank"><h1>Steno Museet</h1></a>
             <p>Til eksamensprojektet i samarbejde med Steno, skulle der udvikles skærme til en aktuel udstilling på Museet
                <br />
                <br />
                Udstillingen omhandlede angst, og skulle formidles til små børn fra 6-12 års alderen.
                <br /> Resultatet af gruppeprojektet var en fint 12-tal til alle gruppens medlemmer.
             </p>
        <img src={Stenotegn}></img>
            <p>Programmeringsdelen i projektet er det jeg personligt er allermest stolt over at kunne blære mig med!
                <br /><br /> Især tegneskærmen, tilegnet at tegne sit monster var en helt vild unik udfordring, og noget jeg er super glad for fungerer!
            </p>
            </article>
        </div>
    )
}