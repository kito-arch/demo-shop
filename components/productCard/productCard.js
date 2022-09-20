import React from 'react';

import styles from './productCard.module.css';

export default function ProductCard({desc}){
    return(
        <div  data-aos="flip-up" data-aos-offset="300" data-aos-duration="1200" className={styles.container}>
            <div className={styles.card}>
                <div className={styles.imgBx}>
                <img src={desc.image}/>
                </div>
                <div className={styles.contentBx}>
                <h2 style={{color: 'black'}}>{desc.title.substring(0, 10)}</h2>
                <h4 style = {{margin: '10px'}}>{desc.category}</h4>
                <h4 style = {{margin: '10px'}}>${desc.price}</h4>
                <a href="#">Buy Now</a>
                </div>
            </div>
        </div>
    )
}