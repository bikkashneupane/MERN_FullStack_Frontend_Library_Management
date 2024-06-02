import { Form } from "react-bootstrap";

export const CustomForm = ({ label, inputRef, ...rest }) => {
  return (
    <Form.Group className="mb-3">
      {label && (
        <Form.Label>
          <strong>{label}</strong>
        </Form.Label>
      )}
      <Form.Control {...rest} ref={inputRef} />
    </Form.Group>
  );
};
