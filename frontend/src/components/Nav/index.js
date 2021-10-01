import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import CATEGORIES_QUERY from "../../queries/category/categories";
import { Home, Course, About} from "../../constant";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "../../index.css";

const Navig = () => {
  return (
    <Navbar collapseOnSelect expand="sm" class="navbar navbar-expand-lg navbar-light mb-3">
      <div class="container">
        <Navbar.Brand>
          <Link to="/">
            <img
              class='img50'
              src="https://metalit.oss-ap-southeast-5.aliyuncs.com/static/metalit/assets/images/Group_38_1.png"
            />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Nav.Link className="nav-item text-uppercase px-3 " href={Home}>Beranda</Nav.Link>
            <Nav.Link className="nav-item text-uppercase px-3 " href={Course}>Pelatihan</Nav.Link>
            <NavLink to="/" className="nav-item text-uppercase px-3 nav-link active">Blog</NavLink>
            <Nav.Link className="nav-item text-uppercase px-3 " href={About}>Tentang Kami</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
      </Navbar>
    );
  };

export default Navig;