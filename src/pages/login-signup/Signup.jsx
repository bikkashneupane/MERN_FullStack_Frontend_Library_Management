import { Button, Col, Container, Form, Row } from "react-bootstrap";

import { CustomForm } from "../../components/customForm.jsx/CustomForm";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { signupNewUser } from "../../features/user/userAxios";
import { toast } from "react-toastify";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const { handleOnChange, form } = useForm();
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;
    if (rest.password !== confirmPassword)
      return toast.error("Password not matched");

    const signupLoading = signupNewUser(rest);
    toast.promise(signupLoading, { pending: "Signing new user...." });

    const { status, message } = await signupLoading;
    toast[status](message);

    status === "success" && navigate("/login");
  };

  const inputs = [
    {
      label: "First Name",
      name: "firstName",
      type: "text",
      placeholder: "Jon",
      required: true,
    },
    {
      label: "Last Name",
      name: "lastName",
      type: "text",
      placeholder: "Doe",
      required: true,
    },
    {
      label: "Phone",
      name: "phone",
      type: "number",
      placeholder: "555-5555-555",
      required: true,
    },
    {
      label: "Email Address",
      name: "email",
      type: "email",
      placeholder: "user@email.com",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter password",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm password",
      required: true,
    },
  ];

  return (
    <DefaultLayout>
      <Container>
        <Row>
          <Col className=" mt-5 mt-5 d-flex justify-content-center">
            <div className="w-75 rounded-5 shadow-lg p-5 ">
              <Form onSubmit={handleOnSubmit}>
                <h4 className="text-center">Signup Now!!</h4>
                <hr />
                {inputs.map((item, index) => (
                  <CustomForm key={index} {...item} onChange={handleOnChange} />
                ))}

                <div className="d-grid">
                  <Button type="submit">Signup</Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};
