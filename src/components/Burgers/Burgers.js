import React, {Fragment} from "react";
import BurgersSummry from "./BurgerSummary";
import AvialableBurgers from "./AvialableBurgers";



const Burgers = () => {
     return (<Fragment>
         <BurgersSummry />
         <AvialableBurgers />

     </Fragment>
     );
};

export default Burgers;