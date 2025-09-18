import titel from '../assets/CrystalCraft.PNG'
import coilimg from '../assets/CoilImg1.jpg'

export default function Coil(){
    return(
        <div className="Coil">
        <img src={titel}></img>
            <article>
                <a href="https://coil.bjarkeholm.dk/" target="blank"><h1>Coil-projekt</h1></a>
             <p>Dette projekt var et samarbejde med Multimedie-studerende fra Holland
                <br/> Noget, der fik samarbejde sat i fokus, især online samarbejde på tværs af landegrænser
             </p>
             <img src={coilimg}></img>
             <p>Under samarbejdet skulle vi udvikle et interaktivt spil, som man kunne spille fysisk
                <br />
                Til dette fik vi kodet denne side, og hollænderne fik produceret de fysiske blokke, der skulle til for at spille
             </p>
            </article>
        </div>
    )
}