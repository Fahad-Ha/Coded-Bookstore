import "./App.css";
import { products } from "./products";

function App() {
  const productsList = products.map((book) => {
    return (
      <div className="data-container">
        <img src={book.image} />
        <h5>{book.name}</h5>
        <p>{book.price}</p>
      </div>
    );
  });
  return (
    <div className="flex-container">
      <div className="card">
        <h2>Coded Bookstore</h2>
        <p>Great Bookstore!</p>
        <img src="https://d1e00ek4ebabms.cloudfront.net/production/77b41724-a1a7-464f-8135-fc7e0f7cec12.jpg" />
      </div>
      <div className="products-container">
        <div className="product-card">{productsList}</div>
      </div>
    </div>
  );
}

export default App;
