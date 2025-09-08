import categories from "../Data/Categories";

export default function TopCat() {
  return (
    <ul className="top-categories">
      {categories.map((category, index) => (
        <li key={index} className="category-item">
          <img src={category.img} alt={category.name + " icon"} />
          {category.name}
        </li>
      ))}
    </ul>
  );
}
