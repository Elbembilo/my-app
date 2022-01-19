import React, { useEffect,useState } from "react";
import axios from 'axios'

export default function ShowProducts(){
    
        const [products, setProducts] = useState( [] );
        
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
            {itemData.map(allItems => (
                <div className="body_item" key = {allItems.id}>
                    {allItems.category}
                </div>
            ))

            }
        </React.Fragment>
        
    )
}