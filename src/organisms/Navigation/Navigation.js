import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
export default class Example extends React.Component {

  render() {
    return (
      <div className="navigation">
        <Navbar style={{marginBottom:0}} expand="md">
            <NavbarBrand  className="title-homepage"   style={{ color: "white" }} href="/homepage"><h1 className="homepage">~Home~</h1></NavbarBrand>
          <Nav className="option-homepage ml-auto" navbar>
            <NavItem className="title-homepage">
              <NavLink style={{ color: "white", padding:5 }} href="/aboutpage">~About~</NavLink>
            </NavItem>
            <NavItem className="title-homepage">
              <NavLink style={{ color: "white", padding:5 }} href="/contact">~Contact~</NavLink>
            </NavItem>
            <NavItem className="title-homepage">
              <NavLink style={{ color: "white", padding:5,marginRight:0 }} href="/comment">~Comment~</NavLink>
            </NavItem>
            <NavItem className="title-homepage">
              <NavLink style={{ color: "white", padding:5,marginRight:150 }} href="/solarpage">~Solar <br></br> System~</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}