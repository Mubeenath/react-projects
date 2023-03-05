import React, { useState } from 'react'

const products = [
    { id: 1, name: "laptop" , brand: "dell" , qty: 1 },
    { id: 2, name: "laptop" , brand: "hp" , qty: 1 },
    { id: 3, name: "laptop" , brand: "lenovo" , qty: 1}
]

function ReactKeys() {
    const [items, setItem] = useState(products);

    const changeQty = (id) =>{
       const newItem = items.map((item) =>
      item.id === id ?{...item, qty : item.qty + 1} : item
       );
        
       setItem(newItem);

    };
  return (
    <div>
        {items.map((product) => (
            <div key={product.id}>
                <h1>name: {product.name}</h1>
                <h1>brand: {product.brand}</h1>
                <h1>qty: {product.qty}</h1>
                <button onClick={() => changeQty(product.id)} type="button">+</button>
            </div>
        ))
        };

      
    </div>
  )
}

export default ReactKeys
