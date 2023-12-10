import React from "react";
import "./index.style.scss";
import ContainerBox from "components/Container";
import { IconTypesEnum } from "components/Container/constants";
import { LoadingButton } from "components/HtmlElements/Button";
import gotoPortfolio from "utils/gotoPortfolio";

const AboutPage: React.FC = () => {
  return (
    <div className='about-us'>
      <ContainerBox title='About' icon={IconTypesEnum.about}>
        <br />
        <div className='about'>
          Get your web/app development done the right way for the right price.
        </div>
        <div className='see-more'>
          <LoadingButton onClick={gotoPortfolio}>
            Click see more projects
          </LoadingButton>
        </div>
        <br />
      </ContainerBox>
    </div>
  );
};

export default AboutPage;
