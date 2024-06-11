import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

export const CustomModal = ({ title, onHide, children, ...rest }) => {
  const [show, setShow] = useState(true);
  return (
    <Modal
      {...rest}
      show={show}
      onHide={() => onHide({})}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};
