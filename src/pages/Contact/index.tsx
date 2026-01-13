import React from "react";
import ContainerBox from "components/Container";
import "./asset/index.scss";
import { IconTypesEnum } from "components/Container/constants";
import { LoadingButton } from "components/HtmlElements/Button";
import gotoPortfolio from "utils/gotoPortfolio";

const ContactPage: React.FC = () => {
  return (
    <div className='contact-page'>
      <ContainerBox title='Contact' icon={IconTypesEnum.contact}>
        <div className='details'>
          <div className='note'>
            Get your web/app development done the right way for the right price.
            <br />
            Send an email today to know how you can leverage technology to grow
            your business.
          </div>
          <br />
          <div className='each-detail'>
            <div className='label'>Email :</div>
            <div className='detail'>
              <a href='mailto:nnalue.nonso@gmail.com'>nnalue.nonso@gmail.com</a>
            </div>
          </div>
        </div>
        <hr />
        <div className='see-more'>
          <LoadingButton onClick={gotoPortfolio}>
            Click see more projects
          </LoadingButton>
        </div>
      </ContainerBox>
    </div>
  );
};

export default ContactPage;
