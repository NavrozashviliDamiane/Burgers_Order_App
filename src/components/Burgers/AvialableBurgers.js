import React from "react";
import classes from "./AvialableBurgers.module.css";
import Card from "../UI/Card";
import BurgerItem from "./BurgerItem/BurgerItem";

const EASY_BURGERS = [
    {
        id: 'b1',
        name: 'Veggie Burger',
        description: 'intense taste',
        price: 18.22,
    },
    {
        id: 'b2',
        name: 'Classic Burger',
        description: 'Classic taste',
        price: 20.99,
    },
    {
        id: 'b3',
        name: 'Baby Burger',
        description: 'Childish Taste',
        price: 15.25,
    },
    {
        id: 'b4',
        name: 'Beef Burger',
        description: 'real beef Taste',
        price: 23.25,
    },

];

const AvialableBurgers = () => {
    const burgersList = EASY_BURGERS.map((burger) => (
        <BurgerItem 
        key={burger.id}
        id={burger.id}
        name={burger.name}
        description={burger.description}
        price={burger.price}
        />

    ));

    return <section className={classes.burgers}>
        <Card>
        <ul>
            {burgersList}
        </ul>
        </Card>
    </section>
};

export default AvialableBurgers;