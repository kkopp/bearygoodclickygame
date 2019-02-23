import React from "react";
import { MDBNav, MDBNavItem} from "mdbreact";
import '../index.css';

const Nav = props => (

    <MDBNav className="nav-pills nav-fill flex-column flex-sm-row font-weight-bold py-4 px-2 mb-4" color="blue-gradient">
      <MDBNavItem>
      <strong className="navText white-text" id="appname">Click the Bears</strong>
      </MDBNavItem>
      <MDBNavItem>
      <strong className="navText white-text">{props.message}</strong>
      </MDBNavItem>
      <MDBNavItem>
      <strong className="navText white-text">Score: <span className="scoreColor">{props.curScore}</span> | Top Score: <span className="scoreColor">{props.topScore}</span></strong>
      </MDBNavItem>
    </MDBNav>
)

export default Nav;