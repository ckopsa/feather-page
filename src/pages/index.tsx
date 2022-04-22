import * as React from "react"
import Layout from "../components/Layout";
import { Col, Ratio, Row, Stack } from "react-bootstrap";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <Stack>
        <Row style={{height: "auto"}}>
          <Ratio aspectRatio="21x9">
            <header>
              <div className="overlay"/>

              <video playsInline={true} autoPlay={true} muted={true} loop={true}>
                <source src="https://storage.googleapis.com/temple_videos/moroni.mp4" type="video/mp4"/>
              </video>

              <div className="container h-100">
                <div className="d-flex h-100 text-center align-items-center">
                  <div className="w-100 text-white">
                    <h1 className="display-3">Feather River Temple in Yuba City</h1>
                    {/*<p className="lead mb-0">Yuba City, CA</p>*/}
                  </div>
                </div>
              </div>
            </header>
          </Ratio>
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
      </Stack>
    </Layout>
  )
}

export default IndexPage
