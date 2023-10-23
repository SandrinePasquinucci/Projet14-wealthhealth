function Dropdown({ name, optionsList }) {
  // Template
  return (
    <select defaultValue={optionsList[0].abbreviation} id={name} name={name}>
      {optionsList.map((option, index) => {
        return (
          <option key={index} value={option["abbreviation"]}>
            {option["name"]}
          </option>
        );
      })}
    </select>
  );
}

export default Dropdown;
