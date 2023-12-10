import React from "react";
import Modal from "react-bootstrap/esm/Modal";
import "./index.scss";

interface ICommonModal {
  title: React.ReactNode;
  show: boolean;
  onHide?: () => void;
  size?: "sm" | "lg" | "xl";
  children: React.ReactNode;
  className?: string;
}

const CommonModal: React.FC<ICommonModal> = ({
  show,
  onHide,
  size = "lg",
  title,
  children,
  className = "commonModal",
}) => {
  return (
    <Modal
      // size={size}

      dialogClassName={className}
      show={show}
      onHide={onHide}
      aria-labelledby={"common-modal"}
      centered={true}
    >
      <Modal.Header closeButton>
        <Modal.Title id={"common-modal"}>{title} </Modal.Title>
      </Modal.Header>
      {/* <ModalDialog>{children}</ModalDialog> */}
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default CommonModal;
