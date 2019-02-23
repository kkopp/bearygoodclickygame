import React from "react";
import { MDBNav, MDBNavItem} from "mdbreact";

const Nav = props => (

    <MDBNav className="nav-pills nav-fill flex-column flex-sm-row font-weight-bold py-4 px-2 mb-4" color="blue-gradient">
      <MDBNavItem>
      <strong className="white-text">Click the Bears</strong>
      </MDBNavItem>
      <MDBNavItem>
      <strong className="white-text">{props.message}</strong>
      </MDBNavItem>
      <MDBNavItem>
      <strong className="white-text">Score: {props.curScore} | Top Score: {props.topScore}</strong>
      </MDBNavItem>
    </MDBNav>
)

export default Nav;