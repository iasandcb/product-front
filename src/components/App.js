import { useEffect } from "react"
import { getProducts } from "../api/product";
import { useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const products = await getProducts();
    console.log('p', products);
    setProducts(products);
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <h1>App</h1>
      <ul>
        {products.map((product) => 
        (
          <li key={product._id}>
            {product.name}
          </li>
        )
        )
      }
      </ul>
    </>
  )
}