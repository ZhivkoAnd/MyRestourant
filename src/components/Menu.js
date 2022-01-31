import { useState } from "react";
import menu from "./MenuItemList";
import MenuFilter from "../components/MenuFilter";
import Order from "./Order";
import MenuItemsGrid from "./MenuItemsGrid";

const Menu = () => {
  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const filterYear = (e) => {
    console.log(e);
  };

  const addToCart = (name, price) => {
    // This function will create the new array
    // setMyCart((oldArray) => [...oldArray, item]);
    setTotalCost(totalCost + price);
    // This function will create the new array of objects
    setCart((sup) => [...sup, { name: name, price: price }]);
    console.log(cart);
  };

  let myCart = [];

  for (const item of cart) {
    myCart.push(
      <button>
        {item.name}:{item.price}
      </button>
    );
  }

  const finishOrder = (amount) => {
    if (amount) {
      setCart("");
      setTotalCost(0);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <MenuFilter menuItems={menu} filteredYear={filterYear}>
          <MenuItemsGrid menuItems={menu} addToCart={addToCart}></MenuItemsGrid>
          <div className="container">My Cart:{myCart}</div>
          <div className="container">${totalCost}</div>
          <Order totalCost={totalCost} finishOrder={finishOrder}></Order>
        </MenuFilter>
      </header>
    </div>
  );
};

export default Menu;
