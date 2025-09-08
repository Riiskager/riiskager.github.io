import categories from "../Data/Categories";
import { useState } from "react";

export default function TopCat() {
    const [selectedIndex, SetSelectedIndex] = useState(0)

    //Return functionen looper gennem categories, og mapper dem alle én af gangen
  return (
    //listen laves
    <ul className="top-categories"> 
      {categories.map((category, index) => ( //categories mappes
      //Det gør den med en liste, som får en key
        <li key={index} className="category-item"> 
          <img src={category.img} alt={category.name + " icon"} />
          {category.name}
        </li>
      ))}
    </ul>
  );
}
