import "./Product.css";
import { Link } from "react-router-dom";

function Product(props) {
  const { product, showButton } = props;

  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6 card-holder">
        <div className="card my-2  bg-gradient">
          <img
            src={product.image}
            className="card-img-top img-fluid"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            {/*             <p className="card-text">{product.description}</p>
             */}{" "}
            {showButton ? (
              <Link to={`product/${product.id}`} className="btn btn-primary">
                See Details
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
