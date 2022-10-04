import Card from "../UI/Card/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealsItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Samosa",
    description: "Nothing taste like this....",
    price: 4.99,
  }
];

const AvailableMeals = () => {
  const mealist = DUMMY_MEALS.map((element) => {
    return (
      <MealItem
        key={element.id}
        id={element.id}
        name={element.name}
        desc={element.description}
        price={element.price}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealist}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
