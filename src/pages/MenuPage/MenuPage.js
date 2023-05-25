import "../pages-styles/MenuPage.css";
import MealCard from "../../components/Card";
import MenuItems from "./MenuItems";

// import {
//   IoFlameOutline,
//   IoRestaurantOutline,
//   IoStarOutline,
// } from "react-icons/io5";
export default function Menupage() {
  let MealCards = MenuItems.map((item) => {
    return (
      <MealCard
        key={item.id}
        img={item.img}
        tags={item.tags}
        meal={item.meal}
        calories={item.calories}
        nutriScore={item.nutriScore}
        rating={item.rating}
        numberOfReviews={item.numberOfReviews}
      />
    );
  });
  return (
    <main className="grid grid--3-cols">
      {/* <div className="meal">
        <img
          src={require("../../assets/images/mezze.jpg")}
          className="meal-img"
          alt="Mezze"
        />
        <div className="meal-content">
          <div className="meal-tags">
            <span className="tag tag--vegetarian">Vegetarian</span>
          </div>
          <p className="meal-title">Mezze</p>
          <ul className="meal-attributes">
            <li className="meal-attribute">
              <IoFlameOutline className="meal-icon md hydrated" />
              <span>
                <strong>650</strong> Calories
              </span>
            </li>
            <li className="meal-attribute">
              <IoRestaurantOutline className="meal-icon md hydrated" />
              <span>
                NutriScore ® <strong>74</strong>
              </span>
            </li>
            <li className="meal-attribute">
              <IoStarOutline className="meal-icon md hydrated" />
              <span>
                <strong>4.9</strong> rating (537)
              </span>
            </li>
          </ul>
        </div>
      </div> */}
      {/* <MealCard /> */}
      {/* {console.log(MenuItems)}
      {MealCards} */}
      {MealCards}
    </main>
  );
}
