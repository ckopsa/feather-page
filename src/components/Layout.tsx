import * as React from 'react'
import { Col, Container, Nav, Navbar, Row, Stack } from "react-bootstrap";

import "../styles/index.scss"

const Layout = ({ pageTitle, children }: {pageTitle: string, children: any[]}) => {
  return (
    <div className="w-100 bg-white">
      <title>{pageTitle}</title>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/feather-page">Feather River Temple</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/feather-page/">Home</Nav.Link>
              <Nav.Link href="/feather-page/about">About</Nav.Link>
              <Nav.Link href="/feather-page/facts">Facts</Nav.Link>
              <Nav.Link href="/feather-page/faq">FAQ</Nav.Link>
              <Nav.Link href="/feather-page/about">Resources</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        {children}
      </main>
      <Row className="bg-primary text-light p-3 small justify-content-center">
        <Col md={7}>
          <Row>
            <Col className="p-3">
              <p><strong>Address</strong></p>
              <p>
                Feather River California Temple
                The Church of Jesus Christ of Latter-day Saints
              </p>
              <p>
                Email: info@featherrivertemple.org
              </p>
            </Col>
            <Col className="p-3">
              <p><strong>About</strong></p>
            </Col>
            <Col className="p-3">
              <p><strong>Resources</strong></p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="text-center bg-secondary text-light small">
        <span>THIS IS NOT AN OFFICIAL SITE OF THE CHURCH OF JESUS CHRIST OF LATTER-DAY SAINTS</span>

        <span>© All rights reserved</span>
      </Row>
    </div>
  )
}

export default Layout