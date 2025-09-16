import ZeroLogo from '../assets/ZerobuzzLogo.png'
import ZeroBG from '../assets/ZeroBuzzBackground.webp'

export default function ZeroBuzz(){
    return(
        <div className="ZeroBuzz">
        <img src={ZeroLogo}></img>
            <article>
                <a href="https://zerobuzzbrew.axelriis.dk/" target="blank"><h1>ZeroBuzzBrew</h1></a>
                <p>ZeroBuzz Brew var et gruppeprojekt med fokus på en online webshop til en fiktiv alkoholfri øl-producent.
                </p>
                 <br />
                <img src={ZeroBG}></img>
                <p>Til udarbejdning af designprocesserne blev adobe pakken brugt i stor stil - Både illustrator, Dimensions og Aftereffects
                    <br/> 
                    <br />
                    De elementer jeg specifikt fik ansvaret for i designprocessen var bl.a Logoprocessen, design af dåsen, samt forsiden og den tilhørenede animation.
                </p>
                <br />
                
            </article>
        </div>
    )
}