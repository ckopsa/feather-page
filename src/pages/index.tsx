import * as React from "react"
import Layout from "../components/Layout";
import { Col, Row, Stack } from "react-bootstrap";

import TempleJumbo from "../images/temple-jumbotron.png"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <Stack>
        <Row style={{
          backgroundImage: `url(${TempleJumbo})`,
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "800px"
        }}
             classname="align-content-center d-flex"
        >
          <Col md={{ span: 4, offset: 5 }} style={{paddingTop: "200px"}}>
            <span className="display-1 text-black fw-bolder">Feather River Temple in Yuba City</span>
          </Col>
        </Row>
        <Row className="p-3 text-center text-black justify-content-center">
          <Col md={3}>
            <h1>Come & See</h1>
            <p>
              Feather River California Temple Open House 2022
              <br/>
              Beginning April 28, 2022,
              <br/>
              Open Daily Excluding Sundays,
              <br/>
              9 a.m. to 9 p.m.
            </p>
          </Col>
        </Row>
        <Row className="p-3 text-center bg-primary text-light justify-content-center">
          <Col md={5}>
            <h1>You Are Invited to Come Inside</h1>
            <p>
              Open house tour dates are yet to be announced. We anticipate late 2022. All tours will be free of charge
              and all are welcome.
            </p>
            <p>
              The Feather River California Temple is currently under construction. When it is complete, we invite you to
              tour this beautiful building. Come & See the gplace where we find peace, purpose, and connection to each
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
              construction site. They welcome all visitors Wednesday and Fridays from 1-3:30 pm. Contact Sister Jensen
              for outside appointments, for groups, families, and individuals (208-709-3437).
            </p>
          </Col>
        </Row>
      </Stack>
    </Layout>
  )
}

export default IndexPage
