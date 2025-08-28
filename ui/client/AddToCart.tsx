"use client";
export default function AddToCart() {
    const addToCart = function(){
        console.log('add to cart');
    }
    return (
        <button onClick={addToCart}>{"Add to cart"}</button>
    );
}
