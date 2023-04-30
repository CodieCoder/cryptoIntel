import React from "react"
import { Form, Col, Container, Row } from "react-bootstrap"
import "./asset/index.scss"
import { NewsCategories } from "./constants"

interface INewsOptions {
  setPageSize: React.Dispatch<React.SetStateAction<number>>
  setCategory?: React.Dispatch<React.SetStateAction<string>>
  setCearchValue?: any
}

const NewsOptions: React.FC<INewsOptions> = ({ setPageSize, setCategory }) => {
  return (
    <Container className="NewsOptions">
      <Row>
        <Col lg={1} className="newsoptions-cols">
          <Form.Group as={Row} className="mb-3" controlId="qty">
            <Form.Select
              className="select qty"
              onChange={(event) => setPageSize(Number(event.target.value))}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={50}>50</option>
              <option value={10}>100</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col lg={5} className="newsoptions-cols">
          <Form.Group as={Row} className="mb-3" controlId="categories">
            <Col>
              <Form.Select className="select categories">
                {NewsCategories.map(
                  (category: { label: string; value: string }) => (
                    <option value={category.value}>{category.label}</option>
                  )
                )}
              </Form.Select>
            </Col>
          </Form.Group>
        </Col>
      </Row>
    </Container>
  )
}

export default NewsOptions
