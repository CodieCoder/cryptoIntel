import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";

type TShareButtons = {
  link: string;
};

const ShareButtons: React.FC<TShareButtons> = ({ link }) => {
  return (
    <div className="ShareButtons">
      <Row xs={5}>
        <Col>
          <BsTwitter />
        </Col>
        <Col>
          <FaFacebookF />
        </Col>
        <Col>
          <BsLinkedin />
        </Col>
        <Col>
          <BsInstagram />
        </Col>
        <Col>
          <IoShareSocialSharp />
        </Col>
      </Row>
    </div>
  );
};

export default ShareButtons;
