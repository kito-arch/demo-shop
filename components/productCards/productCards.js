import React from "react";



import ProductCard from "../productCard/productCard";
import styles from './productCards.module.css';

export default function ProductCards({data}){

    return(
        <React.Fragment>
            <div className = {styles.container}>
            {
                data ?
                data.map((item)=>{
                    return(
                        <ProductCard key={item.id} desc={item} />
                    )
                })
                :
                <div>
                    <h3>Loading...</h3>
                </div>
            }
            </div>
        </React.Fragment>
    )
}

