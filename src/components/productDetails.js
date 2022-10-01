import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "./Product";
import "./ProductDetails.css";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const params = useParams();
  const api_url = "https://fakestoreapi.com/products";
  useEffect(() => {
    fetch(`${api_url}/${params.id}`)
      .then((res) => res.json())
      .then((product) => setProduct(product));
  }, []);
  return (
    <>
      <dev className="details">
        <Product product={product} showButton={false} />
        <p className="btn bg-success rounded-pill text-light">
          price: {product.price}
        </p>
      </dev>
    </>
  );
}
export default ProductDetails;
