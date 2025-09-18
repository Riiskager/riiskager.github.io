import top from '../assets/ATKBB.png'
import midt from '../assets/ATKB.png'

export default function Kogebog(){
    return(
        <div className="Kogebog">
        <img src={top}></img>
            <article>
                <a href="https://alletiders-kogebog.axelriis.dk/" target="blank"><h1>AlleTiders Kogebog</h1></a>
             <p>Dette projekt var et af de første store projekter på 1. semester, da ambitionerne var langt højere end hvad evnerne tilladte
                <br/> Projektet pressede grænserne for hvad der var muligt, dengang, og gav en indsigt i hvor meget man kan opnå, så længe man er drevet nok
             </p>
             <img src={midt}></img>
            </article>
        </div>
    )
}