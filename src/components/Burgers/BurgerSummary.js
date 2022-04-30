import React from "react";
import classes from "./BurgerSummry.module.css";


const BurgersSummry = (props) => {
    return (
        <section className={classes.summary}>
            <h2> Amazing burgers</h2>
            <p>
                Get life experience from our burgers
            </p>
        </section>

    );

};

export default BurgersSummry;