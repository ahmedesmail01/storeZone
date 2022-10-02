import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ProductDetails.css";
import "./Loading.css";

function ProductDetails() {
  const api_url = "https://fakestoreapi.com/products";
  const [product, setProduct] = useState({ x: 0 });
  console.log(product);
  const params = useParams();
  const getProduct = () => {
    fetch(`${api_url}/${params.id}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  };

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
  const ProductData = (product) => {
    return (
      <>
        <div className="details">
          <div className="col-lg-3 col-md-4 col-sm-6 card-holder">
            <div className="card my-2  bg-gradient">
              <img
                src={product.image}
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="price rounded-pill text-light">
                  price: {product.price} $
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  useEffect(() => {
    getProduct();
  }, []);
  if (product !== { x: 0 }) {
    return <>{ProductData(product)}</>;
  } else {
    return <>{loading()}</>;
  }
}
export default ProductDetails;
