import categories from "../Data/Categories";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function TopCat() { 
    const [selectedIndex, SetSelectedIndex] = useState(0)
    const [selectedSubIndex, SetSelectedSubIndex] = useState(0)
    const selectedCategory = categories[selectedIndex];
    const selectedSub = selectedCategory.subs?.[selectedSubIndex];


     useEffect(() => { //Hvis jeg trykker på en key, og den er ArrowRight, så highlight den i næste index, medmindre index er større end eller = 3, så gå tilbage til nul
        function handleKeyDown(e) {
            if (e.key === "ArrowRight") {
                const subs = categories[selectedIndex].subs;
                if(subs && subs.length > 0) //Kun hvis der er data, og det er mere end 1
                SetSelectedSubIndex((prevIndex) =>
                prevIndex >= subs.length -1 ? 0 : prevIndex + 1);
            } else if (e.key === "ArrowLeft") {
                const subs = categories[selectedIndex].subs;
                if(subs && subs.length >0)
                SetSelectedSubIndex((prevIndex) =>
                prevIndex === 0 ? subs.length -1 : prevIndex -1
            );
            }
                if (e.key === "ArrowDown") {
                SetSelectedIndex((prevIndex) =>
                prevIndex > 3 -1 ? 0 : prevIndex + 1,
            SetSelectedSubIndex(0));
                
            } else if (e.key === "ArrowUp") {
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
    
    const listRef = useRef(null);
    const itemRefs = useRef([]);
    const wrapperRef = useRef(null);
       useEffect(() => {
    const list = listRef.current;
    const selectedItem = itemRefs.current[selectedIndex];
    const container = wrapperRef.current;

    if (!list || !selectedItem || !container) return;

    const containerCenter = container.offsetHeight / 2;

    const itemCenter = selectedItem.offsetTop + selectedItem.offsetHeight / 2;

    const offset = containerCenter - itemCenter;

    list.style.transform = `translateY(${offset}px)`;

}, [selectedIndex]);

    //Return functionen looper gennem categories, og mapper dem alle én af gangen
  return (
    //listen laves
    <div className="whole-page">
        <div className="carousel" ref={wrapperRef} >
            
            <ul className="top-categories" ref={listRef} >
                
            {categories.map((category, index) => ( //categories mappes
            //Det gør den med en liste, som får en key
                
                <li key={index} className= {index === selectedIndex ? "top-highlight" : "category-item"} //Hvis kategorien er selected (Index), giv den navnet "top-highlight"
                onClick={() => {
                    SetSelectedIndex(index) //Sørger for at man kan klikke på toppen, og når man gør så genstartet den underkategorierne
                    SetSelectedSubIndex(0)
                }}ref={el => itemRefs.current[index] = el}>                
                
                
                <img src={category.img} alt={category.name + " icon"} />
                <h1>{category.name}</h1>
                </li>
            ))}
            </ul>
            <div key={`subcat-${selectedIndex}`} className="subCategoryWrapper"> 
                <ul className="subCategory" //Her er underkategorien! Fremvist kun! hvis den passer til den tilegnede overkategori
                style={{ transform: `translateX(-${selectedSubIndex * 9}rem)`}}>
                            {categories[selectedIndex].subs.map((sub, index) => (
                <li key={index} className={index === selectedSubIndex ? "sub-highlight" : "subCategory-item"}
                onClick={() =>
                    SetSelectedSubIndex(index) //Man kan klikke på den også
                }>
                
                    {sub.img && <img src={sub.img} alt={sub.name + " icon"} />}
                    {sub.icon && <FontAwesomeIcon className="sub-icon" icon={sub.icon} size="2xl" />}
                    <p>{sub.name}</p>
                </li>
                ))}
                </ul>
            </div>
        
        </div>
            <div key={selectedSub?.name} //Viser sidepanelet til den tilhørende subkategori :)
                    className="detail-panel">
                {selectedSub && selectedSub.component && <selectedSub.component />}
            </div>
    </div>
  );
}
