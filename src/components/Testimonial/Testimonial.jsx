import React from "react";
import classes from "./Testimonial.module.css";
import quote from "../../assets/quate.png";

const Testimonial = () => {
    return (
        <section className={classes.testimonial}>
            <h2 className={classes.title}>Testimonial</h2>
            <p className={classes.paragraph}>“Aaronn was fantastic to work with from start to finish. We were looking for a simple, stand-out logo and he delivered. I tried designing the logo myself thinking I wouldn’t need to pay the money for a professional graphic designer but I was very wrong. Working with Aaronn was worth every penny and was surprisingly affordable! I remember him saying simplicity is key to a successful logo and boy he was right. I can’t thank Aaronn enough for his effort and professionalism. I would recommend him to anyone looking for a design!”</p>
            <h4 className={classes.author}>-Martin lee</h4>
            <img className={classes.quote} src={quote} alt="Quote" />
        </section>
    );
};

export default Testimonial;