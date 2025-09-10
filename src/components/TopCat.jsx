import categories from "../Data/Categories";
import { useState, useEffect } from "react";

export default function TopCat() { 
    const [selectedIndex, SetSelectedIndex] = useState(0)
    const [selectedSubIndex, SetSelectedSubIndex] = useState(0)
    const selectedCategory = categories[selectedIndex];
    const selectedSub = selectedCategory.subs?.[selectedSubIndex];

     useEffect(() => { //Hvis jeg trykker på en key, og den er ArrowRight, så highlight den i næste index, medmindre index er større end eller = 3, så gå tilbage til nul
        function handleKeyDown(e) {
            if (e.key === "ArrowDown") {
                const subs = categories[selectedIndex].subs;
                if(subs && subs.length > 0) //Kun hvis der er data, og det er mere end 1
                SetSelectedSubIndex((prevIndex) =>
                prevIndex >= subs.length -1 ? 0 : prevIndex + 1);
            } else if (e.key === "ArrowUp") {
                const subs = categories[selectedIndex].subs;
                if(subs && subs.length >0)
                SetSelectedSubIndex((prevIndex) =>
                prevIndex === 0 ? subs.length -1 : prevIndex -1
            );
            }
                if (e.key === "ArrowRight") {
                SetSelectedIndex((prevIndex) =>
                prevIndex > 3 -1 ? 0 : prevIndex + 1,
            SetSelectedSubIndex(0));
                
            } else if (e.key === "ArrowLeft") {
                SetSelectedIndex((prevIndex) =>
                prevIndex === 0 ? categories.length -1 : prevIndex -1,
                 SetSelectedSubIndex(0));
            }
        }
        window.addEventListener("keydown", handleKeyDown);

          return () => { //Fjern event listener når jeg er færdig
      window.removeEventListener("keydown", handleKeyDown);
    };
    }, [selectedIndex, selectedSubIndex]);
    
 

    //Return functionen looper gennem categories, og mapper dem alle én af gangen
  return (
    //listen laves
    <div className="whole-page">
    <div className="carousel">
        
        <ul className="top-categories"
        style={{ transform: `translateX(-${selectedIndex * 10}rem)`}}>
             
        {categories.map((category, index) => ( //categories mappes
        //Det gør den med en liste, som får en key
            
            <li key={index} className= {index === selectedIndex ? "top-highlight" : "category-item"}
            onClick={() => SetSelectedIndex(index)}>
            
                <h1>{category.name}</h1>
            <img src={category.img} alt={category.name + " icon"} />
            
            </li>
        ))}
        </ul>
        <ul className="subCategory"
        style={{ transform: `translateY(-${selectedSubIndex * 6}rem)`}}>
                    {categories[selectedIndex].subs.map((sub, index) => (
        <li key={index} className={index === selectedSubIndex ? "sub-highlight" : "subCategory-item"}>
            <p>{sub.name}</p>
            <img src={sub.img} alt={sub.name + "icon"} />
        </li>
        ))}
        </ul>
       <div className="detail-panel">
            {selectedSub && selectedSub.component && <selectedSub.component />}
        </div>
       </div>
    </div>
  );
}
