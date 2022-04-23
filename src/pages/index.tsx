import * as React from "react"
import { Col, Container, Nav, Navbar, Ratio, Row, Stack } from "react-bootstrap";

const IndexPage = () => {
  return (
    <Stack>
      <title>Feather River Temple </title>
      <Row style={{ height: "100vh" }}>
        <header>
          <Navbar bg="transparent" variant="dark" expand="lg">
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
                  <Nav.Link href="/about">
                    <span className="p-4">About</span>
                  </Nav.Link>
                  <Nav.Link href="/faq">
                    <span className="p-4">FAQ</span>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div className="overlay"/>

          <video playsInline={true} autoPlay={true} muted={true} loop={true}>
            <source src="https://storage.googleapis.com/temple_videos/moroni.mp4" type="video/mp4"/>
          </video>
        </header>
      </Row>
      <Row className="p-3 text-center text-black justify-content-center">
        <Col md={3}>
          <h1>Come & See</h1>
          <p>
            Feather River California Temple Open House
            <br/>
            To Be Announced
          </p>
        </Col>
      </Row>
      <Row className="p-3 text-center bg-primary text-light justify-content-center">
        <Col md={5}>
          <h1>You Are Invited to Come Inside</h1>
          <p>
            Open house tour dates are yet to be announced. All tours will be free of charge and all are welcome.
          </p>
          <p>
            The Feather River California Temple is currently under construction. When it is complete, we invite you to
            tour this beautiful building. Come & See the place where we find peace, purpose, and connection to each
            other and to God. During the open house, all people of all ages are welcome to come inside.
          </p>
        </Col>
      </Row>
      <Row className="p-3 text-center justify-content-center text-black">
        <Col md={5}>
          <h1>
            Visiting the Construction Site
          </h1>
          <p>
            Brother and Sister Jensen currently serve as missionaries at the Feather River California Temple
            construction site. Contact Sister Jensen for outside appointments, for groups, families, and individuals
            (208-709-3437).
          </p>
        </Col>
      </Row>
      <Row className="text-center bg-secondary text-light small">
        <span>THIS IS NOT AN OFFICIAL SITE OF THE CHURCH OF JESUS CHRIST OF LATTER-DAY SAINTS</span>

        <span>© All rights reserved</span>
      </Row>
    </Stack>
  )
}

export default IndexPage
