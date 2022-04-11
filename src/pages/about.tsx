import * as React from "react"
import Greeting from '../components/greeting'
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { Button, Col, Image, Row, Stack } from "react-bootstrap";
import TemplePicture from "../images/temple-pass-along.jpg"

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <Stack gap={3}>
        <Row>
          <span className="p-3 display-1 fw-bold bg-primary text-white text-center">About</span>
        </Row>
        <Row className="background-white justify-content-center p-3">
          <Col md={6}>
            <Stack gap={3}>
              <Row>
                <h3>What is a Temple?</h3>
                <p>
                  The Church of Jesus Christ of Latter-day Saints has been building temples since the 1830s. Latter-day
                  Saint
                  temples are considered houses of God, a place of holiness and peace separate from the preoccupations
                  of
                  the
                  world. They provide a place where Church members make formal promises and commitments to God. They are
                  also
                  the place where the highest sacraments of the faith occur — the marriage of couples and the “sealing”
                  of
                  families for eternity.
                </p>
                <p>
                  Learn more about why Latter-day Saints build temples:
                </p>
              </Row>
              <Row className="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/Y6a10hpWeZA" allowFullScreen/>
              </Row>
              <Row>
                <Col>
                  <h3>Families Can Be Forever</h3>
                  <p>
                    Members of The Church of Jesus Christ of Latter-day Saints believe that each human born on earth
                    lived first as a spirit in heaven with God, our Heavenly Father. Each one of us comes to earth to be
                    tested through the mortal experience. By following the principles of the gospel here on earth, each
                    of us may return to the presence of God, where we will live eternally with our families.
                  </p>
                  <p>
                    The Latter-day Saint teaching that family relationships on earth continue after death is distinctive
                    among Christian faiths. To last beyond mortality, marriages must take place in a temple. Couples who
                    join the Church after they are already married may also have their marriages “sealed” in identical
                    ceremonies, and their children may be sealed to them.
                  </p>
                  <p>
                    Thus, Latter-day Saint (sometimes called “Mormon”) temples are not places of regular Sunday or
                    congregational worship. They are built specifically for these “eternal marriages” and other
                    individual and family-centered ceremonies. For the promises of the temple to remain in effect, a
                    husband and wife must love and be faithful to each other throughout their marriage and continue to
                    follow a course of Christian service and commitment throughout their lives.
                  </p>
                </Col>
                <Col xs={1} md={6}>
                  <img
                    className="h-100 p-3 img-fluid"
                    src={TemplePicture} alt="Picture of Feather River Temple"/>
                </Col>
              </Row>
              <Row className="bg-info w-100 text-center p-5">
                <h3>Christian Beliefs</h3>
                <p>
                  We’re members of The Church of Jesus Christ of Latter-day Saints, or Latter-day Saints for short.
                  We’re your neighbors, friends, and family members—a community of believers trying to be a little
                  better each day with Jesus Christ’s help.
                </p>
                <Button>
                  Learn More About Our Beliefs
                </Button>
              </Row>
              <Row className="d-flex">
                <h3>Temple Groundbreaking</h3>
                <Row className="ratio ratio-16x9">
                  <iframe src="https://www.youtube.com/embed/TZWQebqjkHc" allowFullScreen/>
                </Row>
                <p>Photo Gallery</p>

                <p className="p-3">
                  Elder Paul H. Watkins, former Area Seventy, presided at a small groundbreaking ceremony on Saturday,
                  18 June 2020, for the Feather River California Temple. Attendance was limited by COVID-19 guidelines.
                  In his site dedicatory prayer, Elder Watkins prayed, "As the temple foundation is poured, and the
                  walls are placed, and the roof is formed, let us all revitalize our foundational faith in apostles and
                  prophets with Jesus Christ being our chief cornerstone." The site for the 38,000 sq ft temple will be
                  shared by a new meetinghouse and distribution center.
                </p>
              </Row>
            </Stack>
          </Col>
        </Row>


      </Stack>

    </Layout>
  )
}

export default AboutPage
