import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { getUserObj, loginUserAction } from "../../features/user/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";

import { CustomForm } from "../../components/customForm.jsx/CustomForm";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { loginUser } from "../../features/user/userAxios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const { user } = useSelector((state) => state.userInfo);

  useEffect(() => {
    user?._id && navigate("/dashboard");
  }, [user, navigate]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      return toast.error("Both field must be filled");
    }

    dispatch(loginUserAction({ email, password }));
  };

  const inputs = [
    {
      label: "Email Address",
      name: "email",
      type: "email",
      placeholder: "Enter email",
      inputRef: emailRef,
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter password",
      inputRef: passwordRef,
      required: true,
    },
  ];

  return (
    <DefaultLayout>
      <Container>
        <Row>
          <Col className=" mt-5 mt-5 d-flex justify-content-center">
            <div
              className="w-75 rounded-5 shadow-lg p-5 "
              style={{
                background: "linear-gradient(to right, pink, white)",
              }}
            >
              <Form onSubmit={handleOnSubmit}>
                <h4 className="text-center">Login Now!!</h4>
                <hr />
                {inputs.map((item, index) => (
                  <CustomForm key={index} {...item} />
                ))}

                <div className="d-grid">
                  <Button type="submit">Login</Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};
