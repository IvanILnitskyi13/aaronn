import React from 'react';
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
        <img className={classes.img} src={props.data.img} alt="Photo" />
        <div className={classes.titleContainer}>
            <h3 className={classes.title}>{props.data.title}</h3>
            <div className={classes.hl}></div>
        </div>
         <div className={classes.about}>
            {props.data.projectItems.map((item, index) => 
                <div className={classes.projectItem}>
                    <h5 className={classes.label}>{item.label}</h5>
                    <h5 className={classes.content}>{item.content}</h5>
                </div>
            )}
        </div>
    </div>
  )
}

export default Card;