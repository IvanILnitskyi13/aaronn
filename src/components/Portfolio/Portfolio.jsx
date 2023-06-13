import React from 'react';
import Card from '../UI/Card/Card';
import classes from './Portfolio.module.css';

import img from '../../assets/first-card.png';
import img2 from '../../assets/second-card.png';
import img3 from '../../assets/third-card.png';
import img4 from '../../assets/four-card.png';

const Portfolio = () => {
    const cards = [
        {
            title: 'Brand Journey Improvements',
            img: img,
            projectItems: [
                {
                    label: 'Client:',
                    content: 'Organc',
                },
                {
                    label: 'Work:',
                    content: 'Branding  Logo design',
                },
            ],
        },
        {
            title: 'Brand Grouping',
            img: img2,
            projectItems: [
                {
                    label: 'Client:',
                    content: 'FR',
                },
                {
                    label: 'Work:',
                    content: 'Branding  Logo design',
                },
            ],
        },
        {
            title: 'NFT Glimps',
            img: img3,
            projectItems: [
                {
                    label: 'Client:',
                    content: 'Rumanda',
                },
                {
                    label: 'Work:',
                    content: 'NFT Design',
                },
            ],
        },
        {
            title: 'Brand Suggestions',
            img: img4,
            projectItems: [
                {
                    label: 'Client:',
                    content: 'T3d',
                },
                {
                    label: 'Work:',
                    content: 'NFT Design',
                },
            ],
        },
    ];

    return (
        <section className={classes.portfolio}>
            <h2 className={classes.title}>My projects Highligts</h2>
            <button className={classes.btn}>Explore More &rarr;</button>
            <div className={classes.projects}>
                {cards.map((card, index) => (
                    <Card data={card} />
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
