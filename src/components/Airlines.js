import React from "react";
import "./component-styles/card.css";

const RadioButton = ({ label, value, onChange }) => {
  return (
    <div className="RBWrapp">
      <label className="RadioboxControll">
        <input type="radio" checked={value} onChange={onChange} />
        {label}
      </label>
    </div>
  );
};

const Airlines = () => {
  const [favorite, setAirline] = React.useState("Все");

  const handleAllChange = () => {
    setAirline("Все");
  };

  const handleS7Change = () => {
    setAirline("S7  Airlines");
  };

  const handleXiChange = () => {
    setAirline("XiamenAir");
  };

  return (
    <div className="Card RBCard">
      <h3>Количество пересадок</h3>
      <div className="Radiobox">
        <RadioButton
          label="Все"
          value={favorite === "Все"}
          onChange={handleAllChange}
        />
        <RadioButton
          label="S7  Airlines"
          value={favorite === "S7  Airlines"}
          onChange={handleS7Change}
        />
        <RadioButton
          label="XiamenAir"
          value={favorite === "XiamenAir"}
          onChange={handleXiChange}
        />
      </div>
    </div>
  );
};

export default Airlines;
