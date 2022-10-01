import Product from "./Product";
import "./Loading.css";
import "./catButtons.css";
import { useEffect, useState } from "react";

function ProductsList() {
  const url_api = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const getProducts = () => {
    fetch(url_api)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  const getCategory = () => {
    fetch(`${url_api}/categories`)
      .then((res) => res.json())
      .then((cat) => setCategory(cat));
  };
  const getCategoryName = (catName) => {
    fetch(`${url_api}/category/${catName}`)
      .then((res) => res.json())
      .then((cat) => setProducts(cat));
  };

  useEffect(() => {
    getProducts();
    getCategory();
  }, []);

  const productData = products.map((product) => {
    return <Product product={product} key={product.id} showButton={true} />;
  });

  const loading = () => {
    return (
      <>
        <div className="load-wrapp">
          <div className="load-1">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <h2 className="text-center my-5">Our Products</h2>
      <div className="container">
        <button
          className="btn btn-info mx-1 text-light cat-btn"
          onClick={() => {
            getProducts();
          }}
        >
          All
        </button>
        {category.map((cat) => {
          return (
            <button
              key={cat}
              className="btn btn-info mx-1 text-light cat-btn"
              onClick={() => {
                getCategoryName(cat);
              }}
            >
              {cat}
            </button>
          );
        })}

        <div className="row text-center">
          {products.length === 0 ? loading() : productData}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
