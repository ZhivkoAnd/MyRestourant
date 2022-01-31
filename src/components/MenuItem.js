const MenuItem = ({ menuItem, addToCart }) => {
  return (
    <div onClick={() => addToCart(menuItem.name, menuItem.price)}>
      <button>
        {menuItem.name}: {menuItem.price}
      </button>
    </div>
  );
};

export default MenuItem;
