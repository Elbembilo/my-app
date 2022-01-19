import React from "react";
import axios from "axios"

export const testAxios = () => {    
        axios.get('https://fakestoreapi.com/products/')
  .then(function (response) {
    console.log(response);
  })        
    
}