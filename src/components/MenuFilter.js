const MenuFilter = ({ menuItems, filteredYear }) => {
  const changeYear = (e) => {
    //  console.log(`Year changed to ${e.target.value}`);
    filteredYear(e.target.value);
  };

  return (
    <div>
      <label>Filter by Category</label>
      <select onChange={changeYear}>
        <option>All</option>
        {menuItems.map((item, key) => (
          <option key={key}>{item.category}</option>
        ))}
      </select>
    </div>
  );
};

export default MenuFilter;
