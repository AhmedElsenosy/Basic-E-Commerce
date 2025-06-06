import { Link } from "react-router";

function Product(props) {
  console.log(props);
  const { product, showButton } = props;

  return (
    <>
      <div className="card">
        <img src={product.image} className="card-img-top height-400 width-300 d-block mx-auto" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p>Price: {product.price}$ </p>
          {showButton && (
            <Link href="#" className="btn btn-primary" to={`/product/${product.id}`} >
              Details
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
