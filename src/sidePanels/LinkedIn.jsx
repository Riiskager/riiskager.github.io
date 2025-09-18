import mig from '../assets/Mig.jpg'
import { useEffect } from 'react';
export default function LinkedIn(){
      useEffect(() => {
        function handleKeyDown(e) {
          if (e.key === "Enter") {
            window.open("https://www.linkedin.com/in/emil-riisager-axelsen-12443b20b/", "_blank");
          }
        }
    
        window.addEventListener("keydown", handleKeyDown);
    
        return () => {
          window.removeEventListener("keydown", handleKeyDown);
        };
      }, []);
    return(
        <div className="LinkedIn">
                    <img src={mig} alt='mig'></img>
                    <article>
                        <h1> <a href="https://www.linkedin.com/in/emil-riisager-axelsen-12443b20b/" target="_blank">LinkedIn</a> </h1>
                    </article>
                </div>
    )
}