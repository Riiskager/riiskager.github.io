import ZeroLogo from '../assets/ZerobuzzLogo.png'
import ZeroBG from '../assets/ZeroBuzzBackground.webp'

export default function ZeroBuzz(){
    return(
        <div className="ZeroBuzz">
        <img src={ZeroLogo}></img>
            <article>
                <a href="https://zerobuzzbrew.axelriis.dk/" target="blank"><h1>ZeroBuzzBrew</h1></a>
                <p>ZeroBuzz Brew var et gruppeprojekt med fokus på en fiktiv alkoholfri øl-producent.
                    <br />
                    <br />
                    
                </p>
                <img src={ZeroBG}></img>
            </article>
        </div>
    )
}