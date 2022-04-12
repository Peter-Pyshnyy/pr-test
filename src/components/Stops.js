import React from "react";
import "./component-styles/card.css";
import "./component-styles/checkbox.css";

const Stops = () => {
  const [checkedOne, setCheckedOne] = React.useState(false);
  const [checkedTwo, setCheckedTwo] = React.useState(false);
  const [checkedThree, setCheckedThree] = React.useState(false);
  const [checkedFour, setCheckedFour] = React.useState(false);

  const handleChangeOne = () => setCheckedOne(!checkedOne);
  const handleChangeTwo = () => setCheckedTwo(!checkedTwo);
  const handleChangeThree = () => setCheckedThree(!checkedThree);
  const handleChangeFour = () => setCheckedFour(!checkedFour);

  return (
    <div className="Card CBCard">
      <h3>Количество пересадок</h3>
      <div className="CheckboxStops">
        <Checkbox
          label="Без пересадок"
          value={checkedOne}
          onChange={handleChangeOne}
        />
        <Checkbox
          label="1 пересадка"
          value={checkedTwo}
          onChange={handleChangeTwo}
        />
        <Checkbox
          label="2 пересадки"
          value={checkedThree}
          onChange={handleChangeThree}
        />
        <Checkbox
          label="3 пересадки"
          value={checkedFour}
          onChange={handleChangeFour}
        />
      </div>
    </div>
  );
};

const Checkbox = ({ label, value, onChange }) => (
  <div className="CBWrapp">
    <label className="CheckboxControll">
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  </div>
);

export default Stops;
