import MenuItem from "./MenuItem";
import menu from "./MenuItemList";

const MenuItemsGrid = ({ addToCart }) => {
  // const menuList = menu.map((item) => {
  //   return <MenuItem menuItem={item} addToCart={addToCart}></MenuItem>;
  // });
  return (
    <div>
      {menu.map((item) => {
        <MenuItem menuItem={item} addToCart={addToCart}></MenuItem>;
      })}
    </div>
  );
};

export default MenuItemsGrid;
