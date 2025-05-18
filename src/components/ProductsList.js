import { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([])

  const getProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }

  const getCategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }

  const getProductsInCategory = (catName) => {
    console.log(catName);
    fetch(`${api_url}/categories/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  

  return (
    <>

      {categories.map((cat) => {
        return <button className="btn btn-info" key={cat} onClick={() => {
          getProductsInCategory(cat);
        }} > {cat} </button>
      })}
      <h2 className="text-center p-3">Our Products</h2>
      <div className="container">

        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Product product={product} showButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
