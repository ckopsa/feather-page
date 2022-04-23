import * as React from 'react'
import { Col, Container, Nav, Navbar, Row, Stack } from "react-bootstrap";

import "../styles/index.scss"

const Layout = ({ pageTitle, children }: {pageTitle: string, children: any[]}) => {
  return (
    <Stack>
      <title>Feather River Temple - {pageTitle}</title>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src="https://feather.elivate.us/wp-content/uploads/2022/02/Group-2.png"
              width="250"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse>
            <Nav className="ms-auto text-center">
              <Nav.Link href="/about" active={pageTitle === "About"}>
                <span className="p-4">About</span>
              </Nav.Link>
              <Nav.Link href="/faq" active={pageTitle === "FAQ"} activeStyle={{color: '#ffd084'}}>
                <span className="p-4">FAQ</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        {children}
      </main>
      {/*<Row className="bg-primary text-light p-3 small justify-content-center">*/}
      {/*  <Col md={7}>*/}
      {/*    <Row>*/}
      {/*      <Col className="p-3">*/}
      {/*        <p><strong>Address</strong></p>*/}
      {/*        <p>*/}
      {/*          Feather River California Temple*/}
      {/*          The Church of Jesus Christ of Latter-day Saints*/}
      {/*        </p>*/}
      {/*        <p>*/}
      {/*          Email: info@featherrivertemple.org*/}
      {/*        </p>*/}
      {/*      </Col>*/}
      {/*      <Col className="p-3">*/}
      {/*        <p><strong>About</strong></p>*/}
      {/*      </Col>*/}
      {/*      <Col className="p-3">*/}
      {/*        <p><strong>Resources</strong></p>*/}
      {/*      </Col>*/}
      {/*    </Row>*/}
      {/*  </Col>*/}
      {/*</Row>*/}
      <Row className="text-center bg-secondary text-light small">
        <span>THIS IS NOT AN OFFICIAL SITE OF THE CHURCH OF JESUS CHRIST OF LATTER-DAY SAINTS</span>

        <span>© All rights reserved</span>
      </Row>
    </Stack>
  )
}

export default Layout