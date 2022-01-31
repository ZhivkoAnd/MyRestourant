import { useState } from "react";
import menu from "./MenuItemList";
import MenuFilter from "../components/MenuFilter";
import Order from "./Order";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
  const menuList = menu.map(({ index, name, price, image }) => {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="140" image={image} alt="food" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            key={index}
            onClick={() => addToCart(name, price)}
          >
            Add to Cart
          </Button>
          <Button size="small">${price}</Button>
        </CardActions>
      </Card>
    );
  });
  return (
    <div className="App">
      <header className="App-header">
        <MenuFilter filteredYear={filterYear}></MenuFilter>
        <div className="container menuListContainer">{menuList}</div>
        <div className="container">My Cart:{myCart}</div>
        <div className="container">${totalCost}</div>
        <Order totalCost={totalCost} finishOrder={finishOrder}></Order>
      </header>
    </div>
  );
};

export default Menu;
