import React from "react";
import ContainerBox from "components/Container";
import "./asset/index.scss";
import { IconTypesEnum } from "components/Container/constants";
import Form from "react-bootstrap/esm/Form";
import { LoadingButton } from "components/HtmlElements/Button";

const ContactPage: React.FC = () => {
  return (
    <div className="contactPage">
      <ContainerBox title="Contact us" icon={IconTypesEnum.contact}>
        <br />
        <Form className="form">
          <Form.Group className="" controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="youremail@example.com" />
          </Form.Group>
          <br />
          <Form.Group className="" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
        <hr />
        <div className="login-page-form-bottom">
          <LoadingButton loading={false}>Submit</LoadingButton>
        </div>
      </ContainerBox>
    </div>
  );
};

export default ContactPage;
