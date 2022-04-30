
import React, {Fragment} from "react";
import classes from './Header.module.css';
import burgersImage from '../../assets/images/burgers.jpg'
import CartButton from "./CartButton";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>DAMI Burgers</h1>
                <CartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={burgersImage} alt='A Table full of delicious burgers' />
        
            </div>
        </Fragment>

    );

};

export default Header;