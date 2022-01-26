import React, { useEffect, useState } from "react";
import axios from 'axios'
import { IProduct } from "../../models/products";
import './Item.scss'


export default function ShowProducts(){
    
        const [products, setProducts] = useState <IProduct[]>( [] );
        // const itemImg = products.img
        useEffect(() => {
            const apiUrl = 'https://fakestoreapi.com/products/'
            axios.get(apiUrl)
            .then(res => {
                setProducts(res.data);
                console.log(products)  
            });
        }, [] )
                    
        
    
    return(
        <React.Fragment>
            <div className = "grid_items">
                {products.map(product => (                
                    <div className = "grid_item">
                        <div className = "body_item" key = {product.id}>
                            <div className = "item_title">
                                {product.title}
                            </div>
                            <div className = "item_category">
                                {product.category}
                            </div>
                            <div className = "item_price">
                                {product.price}
                            </div>
                            <div className = "item_discription">
                                {product.description}
                            </div>
                            <div className="item_img">
                                <img src ={product.image}  alt={product.title} />
                                </div>                     
                        </div>
                    </div>
            ))
            }
            </div>
        </React.Fragment>
        
    )
}