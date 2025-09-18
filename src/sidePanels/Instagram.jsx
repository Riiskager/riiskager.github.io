import insta from '../assets/instagram-logo2.jpg'
import { useEffect } from 'react';

export default function Instagram(){
      useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Enter") {
        window.open("https://www.instagram.com/riiskager/", "_blank");
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
    return(
        <div className="Instagram">
                    <img src={insta} alt='mig'></img>
                    <article>
                        <h1> <a href="https://www.instagram.com/riiskager/" target="_blank">Instagram</a> </h1>
                    </article>
                </div>
    )
}