import React, { Component } from "react";
import "./component-styles/sort.css";
import "./component-styles/loadMore.css";
import { useEffect, useState } from "react/cjs/react.production.min";
import TicketList from "./TicketList";

class Sort extends Component {
  render() {
    return (
      <div className="SortMenu">
        <div className="SortOption SortLeft Active" onClick={this.props.sort0}>
          <h3>Самый дешевый</h3>
        </div>
        <div className="SortOption" onClick={this.props.sort1}>
          <h3>Самый быстрый</h3>
        </div>
        <div className="SortOption SortRight" onClick={this.props.sort2}>
          <h3>Оптимальный</h3>
        </div>
      </div>
    );
  }
}

class LoadMore extends Component {
  render() {
    return (
      <div className="LoadMore">
        <p>Показать еще 5 билетов!</p>
      </div>
    );
  }
}

export default class Flights extends Component {
  constructor(props) {
    super(props);
    this.state = { sortStyle: 0 };
    this.sort0 = this.sort0;
    this.sort1 = this.sort1;
    this.sort2 = this.sort2;
    this.flightListElement = React.createRef();
  }
  sort0 = () => {
    this.setState({ sortStyle: 0 });
    this.flightListElement.current.changeSortType(0);
    console.log(this.state.sortStyle);
  };
  sort1 = () => {
    this.setState({ sortStyle: 1 });
    this.flightListElement.current.changeSortType(1);
    console.log(this.state.sortStyle);
  };
  sort2 = () => {
    this.setState({ sortStyle: 2 });
    this.flightListElement.current.changeSortType(2);
    console.log(this.state.sortStyle);
  };

  render() {
    return (
      <div>
        <Sort sort0={this.sort0} sort1={this.sort1} sort2={this.sort2} />
        <TicketList ref={this.flightListElement} />
        <LoadMore />
      </div>
    );
  }
}
