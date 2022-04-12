import React from "react";
import "./component-styles/sort.css";
import { useEffect, useState } from "react/cjs/react.production.min";

const Sort = (props) => (
  <div className="SortMenu">
    <div className="SortOption">
      <h3>Самый дешевый</h3>
    </div>
    <div className="SortOption">
      <h3>Самый быстрый</h3>
    </div>
    <div className="SortOption">
      <h3>Оптимальный</h3>
    </div>
  </div>
);

export default Sort;
