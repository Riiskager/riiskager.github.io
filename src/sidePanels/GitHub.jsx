import GitHub from '../assets/Github.jpg'
import { useEffect } from 'react';

export default function Github(){
      useEffect(() => {
        function handleKeyDown(e) {
          if (e.key === "Enter") {
            window.open("https://github.com/Riiskager", "_blank");
          }
        }
    
        window.addEventListener("keydown", handleKeyDown);
    
        return () => {
          window.removeEventListener("keydown", handleKeyDown);
        };
      }, []);
    return(
        <div className="GitHub">
                    <img src={GitHub} alt='mig'></img>
                    <article>
                        <h1> <a href="https://github.com/Riiskager" target="_blank">Github</a> </h1>
                    </article>
                </div>
    )
}