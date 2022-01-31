const MenuFilter = (props) => {
  const changeYear = (e) => {
    //  console.log(`Year changed to ${e.target.value}`);
    props.filteredYear(e.target.value);
  };

  return (
    <div>
      <label>Filter by year</label>
      <select onChange={changeYear}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};

export default MenuFilter;
