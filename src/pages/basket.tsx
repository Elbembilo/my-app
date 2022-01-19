import React from "react";
import { testAxios } from "../to_do/testAxios";

export default function Basket(){
    return (
        <div className="test_basket">
            <h1> Я корзина</h1>
            <div className="button">
                <button className="test_button" onClick = {testAxios}>
                </button>
            </div>
        </div>
        
    )
}