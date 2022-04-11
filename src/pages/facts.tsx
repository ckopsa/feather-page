import * as React from "react"
import { Col, Row, Stack } from "react-bootstrap";
import Layout from "../components/Layout";
import TemplePicture from "../images/ground-breaking.jpg"

export default function AboutPage() {
  return (
    <Layout pageTitle="Facts">
      <Stack gap={3}>
        <Row>
          <span className="p-3 display-1 fw-bold bg-primary text-white text-center">Facts</span>
        </Row>
        <Row className="background-white justify-content-center p-3">
          <Col md={6}>
            <Stack gap={3}>
              <Row>
                <Col>
                  {
                    [
                      { title: "Announced", value: "7 October 2018" },
                      { title: "Location Announced", value: "26 September 2019" },
                      {
                        title: "Groundbreaking and Site Dedication",
                        value: "18 July 2020 By Elder Paul H. Watkins, Area Seventy"
                      },
                      { title: "Site", value: "9.4 acres" },
                      { title: "Square Feet", value: "38000" },
                    ].map(it => {
                      return (<Row className="p-1">
                        <span className="fw-bold">{it.title}</span>
                        <p>{it.value}</p>
                      </Row>)
                    })
                  }
                </Col>
                <Col>
                  <img src={TemplePicture} alt="Breaking ground at Feather River Temple"></img>
                </Col>
              </Row>
              <Row>
                <Col>
                  {
                    [
                      {
                        title: "Ordiance Rooms",
                        value: "Four instruction rooms, three sealing rooms, and one baptistry."
                      },
                      {
                        title: "Other California Temples",
                        value: "The Feather River California Temple will be the eighth in the state joining the Los Angeles California Temple (1956), Oakland California Temple (1964), San Diego California Temple (1993), Fresno California Temple (2000), Redlands California Temple (2003), Newport Beach California Temple (2005), and Sacramento California Temple (2006). California is home to over 760,000 Church members organized into nearly 1,300 congregations. The new temple will serve several of the 22 stakes that currently belong to the Sacramento California Temple District."
                      },
                      {
                        title: "Address",
                        value: "Feather River California Temple\nThe Church of Jesus Christ of Latter-day Saints\n1470 Butte House Road\nYuba City, California 95993"
                      },
                    ].map(it => {
                      return (<Row className="p-1">
                        <span className="fw-bold">{it.title}</span>
                        <p>{it.value}</p>
                      </Row>)
                    })
                  }
                </Col>
              </Row>
            </Stack>
          </Col>
        </Row>
      </Stack>
    </Layout>
  )
}