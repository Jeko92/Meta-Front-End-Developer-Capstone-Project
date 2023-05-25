import "../pages-styles/MenuPage.css";
import MealCard from "../../components/Card";
import MenuItems from "./MenuItems";

export default function Menupage() {
  let MealCards = MenuItems.map((item) => {
    return (
      <MealCard
        key={item.id}
        // img={item.img}
        img={item.imgName}
        tags={item.tags}
        meal={item.meal}
        calories={item.calories}
        nutriScore={item.nutriScore}
        rating={item.rating}
        numberOfReviews={item.numberOfReviews}
      />
    );
  });
  return <main className="grid grid--3-cols">{MealCards}</main>;
}
