import { Col, Row, Stack } from "react-bootstrap";
import * as React from "react";
import Layout from "../components/Layout";

export default function FaqPage() {
  return (
    <Layout pageTitle="FAQ">
      <Stack gap={3}>
        <Row>
          <span className="p-3 display-1 fw-bold bg-primary text-white text-center">FAQ</span>
        </Row>
        <Row className="background-white justify-content-center p-3">
          <Col md={6}>
            <Stack gap={3}>
              {
                [
                  {
                    question: "What are the dates of the open house?",
                    answer: "The official dates have not been announced."
                  },
                  {
                    question: "Who can tour the temple?",
                    answer: "During the open house, the temple will be open to the public. People of all ages are invited."
                  },
                  { question: "Is parking available on site?", answer: "Yes." },
                  { question: "Will I need a ticket?", answer: "TBD" },
                  {
                    question: "Can I carry a purse or backpack?",
                    answer: "No, we apologize for the inconvenience. Volunteers will have clear zipper bags for the few belongings you would like to keep with you."
                  },
                  {
                    question: "Can I take a stroller through the temple?",
                    answer: "No, we apologize for the inconvenience. There will be a stroller parking area outside the temple."
                  },
                  {
                    question: "Will I be able to ask questions?",
                    answer: "Volunteers will be available outside the temple and in the adjacent meetinghouse to answer questions."
                  },
                ].map((it, count) => {
                  return (
                    <Row>
                      {count != 0 && <hr/>}
                      <span className="fw-bold">{it.question}</span>
                      <span>{it.answer}</span>
                    </Row>
                  )
                })
              }
            </Stack>
          </Col>
        </Row>
      </Stack>
    </Layout>
  )
}