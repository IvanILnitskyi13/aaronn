import React from 'react';
import classes from './About.module.css';
import photo from '../../assets/photo.png';

const About = () => {
    return (
        <section className={classes.about}>
            <div className={classes.left}>
                <h2 className={classes.header}>Let's get know about me closer</h2>
                <p className={classes.paragraph}>
                    Aaronn is a New York-based visual designer focusing on
                    branding and visual identity. Her portfolio showcases her
                    wide range of work, spanning books, posters and web design.
                </p>
                <button className={classes.btn}>Discover More About Me</button>
            </div>
            <div className={classes.right}>
                <img className={classes.img} src={photo} alt='photo' />
                <div className={classes.rectangleTop}></div>
                <div className={classes.rectangleLeft}></div>
            </div>
        </section>
    );
};

export default About;
