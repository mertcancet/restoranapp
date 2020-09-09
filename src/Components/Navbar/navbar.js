import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

export class TopNavbar extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="styled">
        <Navbar expand="lg">
          <Navbar.Brand onClick={() => history && history.push("/")}>
            Tutorial
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link
                  className="text-white"
                  onClick={() => history && history.push("/")}
                >
                  Ana Sayfa
                </Nav.Link>
              </Nav.Item>
              <NavDropdown
                className="title-white"
                title="Tanımlamalar"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item
                  onClick={() => history && history.push("/musteri-tanimla")}
                >
                  Müşteri
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item
                  onClick={() => history && history.push("/masa-tanimla")}
                >
                  Masa
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => history && history.push("/urun-tanimla")}
                >
                  Ürün
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link
                  className="text-white"
                  onClick={() => history && history.push("/welcome")}
                >
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="text-white"
                  onClick={() => history && history.push("/about")}
                >
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

export default withRouter(TopNavbar);
