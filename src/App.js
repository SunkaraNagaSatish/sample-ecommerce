import React, { useEffect, useState } from 'react';
import Productlist from './satish';

function App() {
    let [product, updateproduct] = useState([]);
    const productapi = async () => {
        let res = await fetch('https://api.escuelajs.co/api/v1/products');
        let productList = await res.json(); // Await the JSON response
        console.log(productList);
        updateproduct(productList);
    }

    useEffect(() => {
        product.length === 0 && productapi();
    }, []);

    if (product.length === 0) {
        return (
            <h1>Fetching...</h1>
        );
    }

    return (
        <>
    <div className='product-list'>
    {product.map((p,index) => <ul><li key={index}><Productlist {...p}/></li></ul>)}
        </div>
        </>
    );
}

export default App;
