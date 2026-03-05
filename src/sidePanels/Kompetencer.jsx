import next from '../assets/Next.png'
import CSS from '../assets/CSS.png'
import react from '../assets/React.png'
import html from '../assets/HTML.png'
import JSS from '../assets/Javascript.png'
import ia from '../assets/Illustrator.png'
import ps from '../assets/Photoshop.png'
import canva from '../assets/Canva.png'
import id from '../assets/Indesign.png'
import figma from '../assets/Figma.png'
function Kompetencer(){
    return(
        <div className="Kompetencer">
            <article>
            <section className="kompkodning">
                <h1>Kodning</h1>
                <ul>
                <img src={next} alt="hej" title="NextJS"></img>
                <img src={react} alt="hej" title="React"></img>
                <img src={html} alt="hej" title="HTML5"></img>
                <img src={CSS} alt="hej" title="CSS"></img>
                <img src={JSS} alt="hej" title="Javascript"></img>
                </ul>
                 <p>
                    Af alle de ting jeg kan, så er kodning nok det jeg synes er sjovest! Kodning er udfordrende og extremt motiverende, fordi man lærer at koge de mest komplekse problemer ned til den simpleste løsning.
                    Min erfaring med kodning har lært mig, at der ikke er noget, jeg ikke kan kode, så fremt jeg sætter mig for det, og bruger nok til på det.
                </p>
            </section>
              <section className="kompdesign">
                <h1>Design</h1>
                 <ul>
                <img src={ia} alt="hej" title="Adobe Illustrator"></img>
                <img src={ps} alt="hej" title="Adobe Photoshop"></img>
                <img src={id} alt="hej" title="Adobe InDesign"></img>
                <img src={figma} alt="hej" title="Figma"></img>
                <img src={canva} alt="hej" title="Canva"></img>
                </ul>
                <p>
                    Design er nok den del jeg har lettest ved at udføre. Jeg har tegnet altid, og har nydt at kunne bruge den evne i min uddannelse.
                    Når jeg skal designe produkter til reklame, salg, hjemmesider eller andet, så nyder jeg at bruge min kreative sans, til at udvikle produkter, der tilpasser sig
                    de, der skal bruge det!
                </p>
            </section>
            <section className="kompux">
                <h1>UX</h1>
                 <ul>
                <li className='ux'>Research</li>
                <li className='ux'>Brainstorming</li>
                <li className='ux'>Analyse</li>
                <li className='ux'>Overblik</li>
                <li className='ux'>Strategi</li>
                </ul>
                 <p>
                    UX er for mig, det vigtigste i en designprocess. Hvis ikke man ved hvem kunden er, hvad deres behov er, og hvorfor, så gætter du bare, når du tager beslutninger.
                    Termonologi er ikke min stærkeste side, men hvis der er noget jeg kan, så er det at researche på brugere og finde argumenter for og imod beslutninger, og det er det, UX handler om for mig
                </p>
            </section>
            </article>
        </div>
    )
}
export default Kompetencer