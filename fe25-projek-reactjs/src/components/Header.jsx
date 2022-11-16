import {
    MDBNavbar,
    MDBContainer,
    MDBBreadcrumb,
    MDBBreadcrumbItem
  } from "mdb-react-ui-kit";
import React from "react";

import { Link } from "react-router-dom";
const Header = () => {

  return (
    <MDBNavbar expand='lg'  bgColor='light'>
    <MDBContainer fluid>
      <nav aria-label='breadcrumb'>
        <MDBBreadcrumb>
          <MDBBreadcrumbItem>
            <Link to='/' >
            <a href='#'>Home</a>
            </Link>
            
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem>
          <Link to='/register' >
            <a href='#'>Register</a>
            </Link>

          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem active aria-current='page'>
          <Link to='/login' >
            <a href='#'>Login</a>
            </Link>
          </MDBBreadcrumbItem>
        </MDBBreadcrumb>
      </nav>
    </MDBContainer>
  </MDBNavbar>
  );
};

export default Header;