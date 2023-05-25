import {
  IoFlameOutline,
  IoRestaurantOutline,
  IoStarOutline,
} from "react-icons/io5";

export default function MealCard(props) {
  //
  return (
    <div className="meal">
      <img
        src={require("../assets/images/mezze.jpg")}
        className="meal-img"
        alt="Mezze"
      />
      <div className="meal-content">
        <div className="meal-tags">
          {/* <span className="tag tag--vegetarian">Vegetarian≤</span> */}
          {props.tags
            ? props.tags.map((tag) => {
                let className = `tag tag--${tag}`;
                console.log(
                  `current tag is :${tag}, current classname is:${className}`
                );
                return <span className={className}>{tag}</span>;
              })
            : ""}
        </div>
        <p className="meal-title">{props.meal}</p>
        <ul className="meal-attributes">
          <li key={Math.random()} className="meal-attribute">
            <IoFlameOutline className="meal-icon md hydrated" />
            <span>
              <strong>650</strong> Calories
            </span>
          </li>
          <li key={Math.random() + 1} className="meal-attribute">
            <IoRestaurantOutline className="meal-icon md hydrated" />
            <span>
              NutriScore ® <strong>74</strong>
            </span>
          </li>
          <li key={Math.random() + 2} className="meal-attribute">
            <IoStarOutline className="meal-icon md hydrated" />
            <span>
              <strong>4.9</strong> rating (537)
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
