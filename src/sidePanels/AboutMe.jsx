import mig from '../assets/Mig.jpg'

function AboutMe(){
    return(
        <div className="AboutMe">
            <img src={mig} alt='mig'></img>
            <article>
                <h1> Omkring mig </h1>
                    <p>     Mit navn er Emil Riisager, 23 år, multimediedesigner og frontend developer. <br /> <br />
                            Hvis du leder efter en robot, er jeg ikke en af dem - jeg følger ikke bare ordrer, men bidrager med egne idéer og løsninger. <br /> <br />Jeg bliver inspireret af mit hold, og ofte ser man mig doodle i min tegneblok for at tænke over kreative og konkrete løsninger. Musik, poesi og design er en stor del af min kreativitet, og jeg bruger alle inspirationskilder jeg kan, om det så omhandler programmering, design eller arbejdsmiljø.
                        <br /> <br />Kontakt mig, hvis du vil have en ansat, der elsker at udføre sit arbejde, deltager aktivt i arbejdsmiljøet, og kan charmere sokkerne af svigermor og kunder a-like.
                </p>
            </article>
        </div>
    )
}
export default AboutMe