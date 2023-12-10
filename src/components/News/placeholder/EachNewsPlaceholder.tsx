import React from "react"
import { Col, Row } from "react-bootstrap"
import Placeholder from "react-bootstrap/esm/Placeholder"
import "./asset/index.scss"

const EachNewsPlaceholder: React.FC = () => {
  return (
    <div className="EachNewsPlaceholder">
      <Row>
        <Col lg={4} sm={12}></Col>
        <Col lg={6} sm={12} className="EachNewsPlaceholder-body">
          <Placeholder as="p" animation="wave">
            <Placeholder xs={8} />
          </Placeholder>
          <br />
          <Placeholder as="p" animation="wave">
            <Placeholder xs={12} />
          </Placeholder>
          <Placeholder as="p" animation="wave">
            <Placeholder xs={12} />
          </Placeholder>
          <Placeholder as="p" animation="wave">
            <Placeholder xs={8} />
          </Placeholder>
        </Col>
      </Row>
    </div>
  )
}

export default EachNewsPlaceholder
