import MenuItem from "./MenuItem";

const MenuItemsGrid = ({ menuItems, addToCart }) => {
  // const menuList = menu.map((item) => {
  //   return <MenuItem menuItem={item} addToCart={addToCart}></MenuItem>;
  // });
  return (
    <div className="menuListContainer">
      {menuItems.map((item) => (
        <MenuItem menuItem={item} addToCart={addToCart}></MenuItem>
      ))}
    </div>
  );
};

export default MenuItemsGrid;
