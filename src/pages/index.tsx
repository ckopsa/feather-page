import * as React from "react"
import {Button, Col, Container, Nav, Navbar, Row, Stack} from "react-bootstrap";
import Image from 'react-bootstrap/Image';

import "../styles/index.scss"

const IndexPage = () => {
  return (
    <Container fluid className="w-100">
      <Stack>
        <title>Feather River Temple </title>
        <Row style={{height: "100vh"}}>
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
                      <span className="p-4" style={{fontSize: '1.2rem'}}>ABOUT</span>
                    </Nav.Link>
                    <Nav.Link href="/faq">
                      <span className="p-4" style={{fontSize: '1.2rem'}}>FAQ</span>
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
        <Row className="p-4 text-center justify-content-center text-black">
          <Col lg={6} md={10}>
            <span className="fw-bold">THE CHURCH OF JESUS CHRIST OF LATTER-DAY SAINTS</span>
            <h4 className="text-primary p-3 text-primary fw-bold">
              Visiting the Construction Site
            </h4>
            <p>
              <b>All are welcome!</b> Brother and Sister Jensen currently serve as missionaries at the
              Feather River California
              Temple
              construction site. Contact Sister Jensen for outside appointments, for groups, families, and
              individuals
              (208-709-3437).
            </p>
            <Button className="border-3 border-secondary" href="tel:+12087093437">Call to Schedule an
              Outside Appointment</Button>
          </Col>
        </Row>
        <Row className="p-5 text-center text-black justify-content-center bg-info">
          <Col lg={4} md={7}>
            <h4>Come & See</h4>
            <hr/>
            <Image src="https://th.bing.com/th/id/OIP.3tFoqxNBKzyw_gEainbd6wHaHa?pid=ImgDet&w=164&h=164&c=7"
                   roundedCircle={true} fluid={true} className="p-3"/>
            <p>
              The temple lies at the center of strengthening our faith and spiritual fortitude because the
              Savior and His doctrine are the very heart of the temple.
            </p>
            <b>President Russel M. Nelson</b>
          </Col>
        </Row>
        <Row className="p-3 text-center bg-white text-dark justify-content-center">
          <Col lg={5} md={7}>
            <h4>You Are Invited to Come Inside</h4>
            <hr/>
            <p>
              Open house tour dates are yet to be announced. All tours will be free of charge and all are
              welcome.
            </p>
            <p>
              The Feather River California Temple is currently under construction. When it is complete, we
              invite you to
              tour this beautiful building. Come & See the place where we find peace, purpose, and
              connection to each
              other and to God. During the open house, all people of all ages are welcome to come inside.
            </p>
          </Col>
        </Row>
        <Row className="p-5 text-center text-black justify-content-center bg-info">
          <Col lg={6} md={10}>
            <h4>What happens in a Temple?</h4>
            <hr/>
            <p>
              The people of The Church of Jesus Christ of Latter-day Saints see the Temple as central to
              inspiring hope, finding inner peace, and strengthening connections as followers of Jesus
              Christ.
            </p>
            <Row className="ratio ratio-16x9 mx-auto my-3">
              <iframe src="https://www.youtube.com/embed/HX9K42SnQQQ" allowFullScreen/>
            </Row>
            <Button
              href="https://www.churchofjesuschrist.org/comeuntochrist/article/what-happens-inside-latter-day-saint-temples"
              className="border-3 border-secondary"
            >Read more about what really happens inside temples</Button>
          </Col>
        </Row>
        <Row className="text-center bg-primary text-light small p-4">
          <span>This is not an official site of the Church of Jesus Christ of Latter-day Saints</span>
          <span>© All rights reserved</span>
        </Row>
      </Stack>
    </Container>
  )
}

export default IndexPage
