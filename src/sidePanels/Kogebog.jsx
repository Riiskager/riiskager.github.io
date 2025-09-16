import titel from '../assets/CrystalCraft.PNG'
import coilimg from '../assets/CoilImg1.jpg'

export default function Kogebog(){
    return(
        <div className="Kogebog">
        <img src={titel}></img>
            <article>
                <a href="https://alletiders-kogebog.axelriis.dk/" target="blank"><h1>AlleTiders Kogebog</h1></a>
             <p>Dette projekt var et samarbejde med Multimedie-studerende fra Holland
                <br/> Noget, der fik samarbejde sat i fokus, især online samarbejde på tværs af landegrænser
             </p>
             <img src={coilimg}></img>
            </article>
        </div>
    )
}