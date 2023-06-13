import React from 'react';
import classes from './Home.module.css';

const Home = () => {
    return (
        <section className={classes.home}>
            <h1 className={classes.header}>Adaptive Logo Design for Your Brand</h1>
            <button className={classes.btn}>Explore works &rarr;</button>
        </section>
    );
};

export default Home;
