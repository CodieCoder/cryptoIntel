import { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"

interface IDefaultBody {
  center: React.ReactNode
  left?: React.ReactNode
}

const DefaultBody: React.FC<IDefaultBody> = ({ center, left }) => {
  //if there's no left element then the center should occupy all
  useEffect(() => {
    console.log("Testing Left JSX", left)
  }, [])
  return (
    <Container>
      {left ? (
        <Row className="justify-content-md-center">
          <Col xs={12} sm={12} md={8} lg={8}>
            {center}
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            {left}
          </Col>
        </Row>
      ) : (
        <Row>
          <Col>{center}</Col>
        </Row>
      )}
    </Container>
  )
}

export default DefaultBody
