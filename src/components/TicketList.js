import React from "react";
import "./component-styles/card.css";
import FlightTicket from "./FlightTicket";
import { useEffect, useState } from "react/cjs/react.production.min";

export default class TicketList extends React.Component {
  state = {
    loading: true,
    ticket: null,
    displayed: 0,
    sortType: 0,
  };

  changeSortType = (type) => {
    this.setState({ sortType: type });
    this.updateList();
  };

  updateList = async () => {
    let arr = [];
    let sortedArr = [];

    const res = await fetch("json/tickets.json");
    const data = await res.json();
    sortedArr = await sort(this.state.sortType, data);

    for (let i = 0; i < 5; i++) {
      arr.push(sortedArr[i]);
    }
    this.setState({ ticket: arr, loading: false });
  };

  async componentDidMount() {
    this.updateList();

    // const res = await fetch("json/tickets.json");
    // const data = await res.json();
    // sortedArr = await sort(this.state.sortType, data);

    // for (let i = this.state.displayed; i < 5; i++) {
    //   arr.push(sortedArr[i]);
    //   this.setState({ displayed: i });
    // }
    // this.setState({ ticket: arr, loading: false });
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.ticket ? (
          <div>Загрузка...</div>
        ) : (
          <div>
            <ul>
              {this.state.ticket.map((e) => {
                return (
                  <li key={e.id}>
                    <FlightTicket ticket={e} />
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

async function sort(type, data) {
  let arr = data;

  switch (type) {
    case 0:
      arr.sort(priceSort);
      break;
    case 1:
      arr.sort(durationSort);
      break;
    case 2:
      arr.sort(optimalSort);
      break;
    default:
      return arr;
  }

  console.log(arr);
  return await arr;
}

const priceSort = (a, b) => {
  return a.price - b.price;
};

// const checkDur = async (e) => {
//   const segmentA = await getSegments(e);

//   let durationA = 0;
//   await segmentA.map((e) => (durationA += e.duration));

//   console.log(durationA);
// };

const durationSort = async (a, b) => {
  const segmentA = await getSegments(a);
  const segmentB = await getSegments(b);

  let durationA = 0;
  await segmentA.map((e) => (durationA += e.duration));

  let durationB = 0;
  await segmentB.map((e) => (durationB += e.duration));

  return durationA - durationB;
};

const optimalSort = async (a, b) => {
  const segmentA = await getSegments(a);
  const segmentB = await getSegments(b);

  let stopsA = 0;
  await segmentA.map((e) => (stopsA += e.stops.length));

  let stopsB = 0;
  await segmentB.map((e) => (stopsB += e.stops.length));

  return stopsA - stopsB;
};

const getSegments = async (ticket) => {
  let segments = [];
  let segmentsAmount = ticket.segments.length;
  const res = await fetch("json/segments.json");
  const data = await res.json();

  data.map((segment) => {
    let found = false;
    for (let i = 0; i < segmentsAmount; i++) {
      found = ticket.segments[i] == segment.id;

      if (found) segments.push(segment);
    }
  });
  return segments;
};
