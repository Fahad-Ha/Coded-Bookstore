import "./App.css";
import { products } from "./products";
import Products from "./components/Products";
import Home from "./components/Home";

function App() {
  const productsList = products.map((book) => {
    return <Products key={book.id} {...book} />;
  });

  return (
    <div className="flex-container">
      <Home />
      <div className="products-container">
        <div className="product-card">{productsList}</div>
      </div>
    </div>
  );
}

export default App;
