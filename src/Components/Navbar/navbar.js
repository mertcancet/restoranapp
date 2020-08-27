import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

export class TopNavbar extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="styled">
        <Navbar expand="lg">
          <Navbar.Brand href="/anasayfa">Tutorial</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link className="text-white" href="/anasayfa">
                  Ana Sayfa
                </Nav.Link>
              </Nav.Item>
              <NavDropdown
                className="title-white"
                title="Tanımlamalar"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="/musteri-tanimla">
                  Müşteri
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item href="/masa-tanimla">Masa</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/urun-tanimla">Ürün</NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link className="text-white" href="/welcome">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-white" href="/about">
                  About
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default TopNavbar;
