const Order = (props) => {
  return (
    <button onClick={props.finishOrder}>
      {props.totalCost > 0 ? "Order Now!" : "You cant order with an empty cart"}
    </button>
  );
};

export default Order;
