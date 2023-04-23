import { useContext } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { LOGINMODAL } from "../../../Constants";
import PagesContext from "../../../Context";
import LoginPage from "../../../pages/Login";
import RegistrationPage from "../../../pages/Registration";
import "./index.scss";

const LoginModal = () => {
  const { showLoginModal, setShowLoginModal, loginModalTab, setLoginModalTab } =
    useContext(PagesContext);

  const currentTabHandler = (key: string | null) => {
    setLoginModalTab(key || LOGINMODAL.Login);
  };

  return (
    <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)}>
      <Modal.Body>
        <Tabs
          activeKey={loginModalTab}
          onSelect={currentTabHandler}
          className="loginModal-tabs"
        >
          <Tab
            eventKey="login"
            title={<span className="loginModal-title">Login</span>}
          >
            <LoginPage />
          </Tab>
          <Tab
            eventKey="signup"
            title={<span className="loginModal-title">Signup</span>}
          >
            <RegistrationPage />
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
