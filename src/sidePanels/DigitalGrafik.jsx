import Barting1 from '../assets/Grafik/BartenderPost.png'
import Barting2 from '../assets/Grafik/HalloweenParty.png'
import Barting3 from '../assets/Grafik/Valentines.jpg'
import ZBBlogo from '../assets/Grafik/LogoLys.png'
import UDD from '../assets/Grafik/UDDDIMS.png'
import HPP from '../assets/Grafik/HPPoster.png'

export default function DigitalGrafik(){
    return(
         <div className="digitalgrafik">
            <p>Her er en masse digital Grafik, jeg har lavet til forskellige organisationer eller lejligheder</p>
                    <img src={Barting1} alt='mig'></img>
                    <img src={Barting2} alt='mig'></img>
                    <img src={Barting3} alt='mig'></img>
                    <p>Posters til den frivilligt drevet Bar jeg er medbestyrer af</p>
                    <img src={ZBBlogo} alt='mig'></img>
                    <p>Logo fra ZeroBuzzBrew Projektet</p>
                    <img src={UDD} alt='mig'></img>
                    <p>EventPlakat for Digtorganisationen jeg er en del af</p>
                    <img src={HPP} alt='mig'></img>
                    <p>Harry Potter plakat i stil med Saul Bass</p>
                   
                </div>
    )
}