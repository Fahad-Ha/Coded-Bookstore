const Products = (props) => {
  return (
    <div className="data-container">
      <img src={props.image} />
      <h5>{props.name}</h5>
      <p>{props.price}</p>
    </div>
  );
};

export default Products;
