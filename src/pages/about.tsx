import * as React from "react"
import Layout from "../components/Layout";
import { Button, Col, Row, Stack } from "react-bootstrap";

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <Stack gap={3} className="text-center">
        <Row className="background-white justify-content-center p-3">
          <Col md={6}>
            <Stack gap={3}>
              <Row>
                <h3>What is a Temple?</h3>
                <hr/>
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
              </Row>
              <Row className="bg-info w-100 text-center p-5">
                <h3>Christian Beliefs</h3>
                <p>
                  We’re members of The Church of Jesus Christ of Latter-day Saints, or Latter-day Saints for short.
                  We’re your neighbors, friends, and family members—a community of believers trying to be a little
                  better each day with Jesus Christ’s help.
                </p>
                <Button href="https://www.churchofjesuschrist.org/comeuntochrist/about-us/">
                  Learn More About Our Beliefs
                </Button>
              </Row>
              <Row>
                <h3>Raising of Angel Moroni</h3>
                <Row className="ratio ratio-16x9">
                  <iframe
                    src="https://www.facebook.com/plugins/video.php?height=317&amp;href=https%3A%2F%2Fwww.facebook.com%2Fjeremy.atkinson.52%2Fvideos%2F928389497874248%2F&amp;show_text=false&amp;width=560&amp;t=0"
                    allowFullScreen/>
                </Row>
                <Row>
                  <span className="blockquote text-center text-black">
                      Angel Moroni raising video created by Jeremy Atkinson
                  </span>
                </Row>
              </Row>
              <Row>
                <h3>Temple Groundbreaking</h3>
                <Row className="ratio ratio-16x9">
                  <iframe src="https://www.youtube.com/embed/TZWQebqjkHc" allowFullScreen/>
                </Row>
                <p className="p-3">
                  Elder Paul H. Watkins, former Area Seventy, presided at a small groundbreaking ceremony on Saturday,
                  18 June 2020, for the Feather River California Temple. Attendance was limited by COVID-19
                  guidelines.
                  In his site dedicatory prayer, Elder Watkins prayed, "As the temple foundation is poured, and the
                  walls are placed, and the roof is formed, let us all revitalize our foundational faith in apostles
                  and
                  prophets with Jesus Christ being our chief cornerstone." The site for the 38,000 sq ft temple will
                  be
                  shared by a new meetinghouse and distribution center.
                </p>
              </Row>
            </Stack>
          </Col>
        </Row>
      </Stack>
      <hr></hr>
      <Row className="background-white justify-content-center p-3">
        <Col md={6}>
          <Stack gap={3}>
            <h3>Facts</h3>
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
                    {
                      title: "Ordiance Rooms",
                      value: "Four instruction rooms, three sealing rooms, and one baptistry."
                    },
                  ].map(it => {
                    return (<Row className="p-1">
                      <span className="fw-bold">{it.title}</span>
                      <p>{it.value}</p>
                    </Row>)
                  })
                }
              </Col>
              <Col>
                {
                  [
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
    </Layout>
  )
}

export default AboutPage
