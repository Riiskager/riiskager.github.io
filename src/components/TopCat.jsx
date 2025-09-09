import categories from "../Data/Categories";
import { useState, useEffect } from "react";

export default function TopCat() { 
    const [selectedIndex, SetSelectedIndex] = useState(0)
    
    useEffect(() => { //Hvis jeg trykker på en key, og den er ArrowRight, så highlight den i næste index, medmindre index er større end eller = 3, så gå tilbage til nul
        function handleKeyDown(e) {
            if (e.key === "ArrowRight") {
                SetSelectedIndex((prevIndex) =>
                prevIndex > 3 -1 ? 0 : prevIndex + 1);
            } else if (e.key === "ArrowLeft") {
                SetSelectedIndex((prevIndex) =>
                prevIndex === 0 ? categories.length -1 : prevIndex -1
            );
            }
        }
        window.addEventListener("keydown", handleKeyDown);

          return () => { //Fjern event listener når jeg er færdig
      window.removeEventListener("keydown", handleKeyDown);
    };
    }, []);

    //Return functionen looper gennem categories, og mapper dem alle én af gangen
  return (
    //listen laves
    <div className="carousel">
        
        <ul className="top-categories"
        style={{ transform: `translateX(-${selectedIndex * 10}rem)`}}>
             
        {categories.map((category, index) => ( //categories mappes
        //Det gør den med en liste, som får en key
        
            <li key={index} className= {index === selectedIndex ? "top-highlight" : "category-item"}>
                 <h1>{category.name}</h1>
            <img src={category.img} alt={category.name + " icon"} />
           
            </li>
        ))}
        </ul>
    </div>
  );
}
