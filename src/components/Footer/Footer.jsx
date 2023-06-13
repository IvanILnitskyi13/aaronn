import React from 'react';
import classes from './Footer.module.css';
import logo from '../../assets/Brand-logo.png';

const Footer = () => {
    return (
        <section className={classes.footer}>
            <h4 className={classes.title}>Ger in Touch With Us</h4>
            <a
                className={classes.mail}
                href='mailto:info@aaronn.com?subject=Test'
            >
                info@aaronn.com
            </a>
            <address className={classes.contacts}>
                <img className={classes.logo} src={logo} alt='logo' />
                <h6 className={classes.address}>
                    Street Avenue 21, CA 0-8-00-888-000
                </h6>
                <a className={classes.tel} href='tel:+9 0283353'>
                    +9 0283353
                </a>
            </address>

            <div className={classes.hr} />
            <h5 className={classes.copyright}>
                © 2023. Ideapeel. All rights reserved.
            </h5>
        </section>
    );
};

export default Footer;
