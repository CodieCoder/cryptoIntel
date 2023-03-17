import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import FavouriteDashboard from "./favouriteDashboard"
import "./index.scss"

const UserDashboard = () => {
  return (
    <Container>
      <div className="userDashboard">
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <FavouriteDashboard />
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default UserDashboard
