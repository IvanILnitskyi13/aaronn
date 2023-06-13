import React from 'react';
import logo from '../../assets/Brand-logo.png';
import classes from './Navigation.module.css';

const Navigation = () => {
    const components = [
        {
            name: 'Home',
            link: '/',
        },
        {
            name: 'About me',
            link: '/',
        },
        {
            name: 'My works',
            link: '/',
        },
    ];

    return (
        <section className={classes.nav}>
            <img className={classes.logo} src={logo} alt='lodo' />
            <ul className={classes.components}>
                {components.map((component, index) => (
                    <li className={classes.component} key={index}>
                        {component.name}
                    </li>
                ))}
                <button className={classes.btn}>Contact</button>
            </ul>
        </section>
    );
};

export default Navigation;
