import {
  IoFlameOutline,
  IoRestaurantOutline,
  IoStarOutline,
} from "react-icons/io5";

export default function MealCard(props) {
  // let imgUrl = props.img;
  // console.log(imgUrl, typeof imgUrl);

  return (
    <div className="meal">
      <img
        // src={require(`../assets/images/${props.imgName}`)}
        src={require(`../assets/images/${props.img}`)}
        className="meal-img"
        alt="Mezze"
      />
      <div className="meal-content">
        <div className="meal-tags">
          {props.tags
            ? props.tags.map((tag) => {
                let className = `tag tag--${tag}`;
                return (
                  <span key={Math.random()} className={className}>
                    {tag}
                  </span>
                );
              })
            : ""}
        </div>
        <p className="meal-title">{props.meal}</p>
        <ul className="meal-attributes">
          <li key={Math.random()} className="meal-attribute">
            <IoFlameOutline className="meal-icon md hydrated" />
            <span>
              <strong>{props.calories}</strong> Calories
            </span>
          </li>
          <li key={Math.random()} className="meal-attribute">
            <IoRestaurantOutline className="meal-icon md hydrated" />
            <span>
              NutriScore ® <strong>{props.nutriScore}</strong>
            </span>
          </li>
          <li key={Math.random()} className="meal-attribute">
            <IoStarOutline className="meal-icon md hydrated" />
            <span>
              <strong>{props.rating}</strong> rating ({props.numberOfViews})
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
