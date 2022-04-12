import React from "react";
import "./component-styles/card.css";
import "./component-styles/ticket.css";
import LogoS7 from "../assets/img/S7 Logo.png";
import LogoXi from "../assets/img/XiamenAir Logo.png";

const TicketSegment = (props) => (
  <div className="TicketSegment">
    <div className="SegmentInfo">
      <p className="InfoHeader">Head</p>
      <p className="InfoData">Info</p>
    </div>
    <div className="SegmentInfo">
      <p className="InfoHeader">В пути</p>
      <p className="InfoData">Info</p>
    </div>
    <div className="SegmentInfo">
      <p className="InfoHeader">Head</p>
      <p className="InfoData">Info</p>
    </div>
  </div>
);

const FlightTicket = (props) => (
  <div className="Card Ticket">
    <div className="TicketUpper">
      <div className="Price">{props.ticket.price}</div>
      <img className="CompanyLogo" src={getLogo(props.ticket.companyId)} />
    </div>
    <div className="TicketLower">
      <TicketSegment ticket={props.ticket} />
      <TicketSegment ticket={props.ticket} />
    </div>
  </div>
);

function getLogo(companyId) {
  return companyId == "cddfa038-823b-43b1-b18d-395731881077" ? LogoS7 : LogoXi;
}

export default FlightTicket;
