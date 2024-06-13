import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { loginUserAction } from "../../features/user/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { CustomForm } from "../../components/customForm.jsx/CustomForm";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { toast } from "react-toastify";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const { user } = useSelector((state) => state.userInfo);
  const sendTo = location?.state?.from?.location?.pathname || "/dashboard";

  useEffect(() => {
    user?._id && navigate(sendTo);
  }, [user?._id, navigate, sendTo]);

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
            <div className="w-75 rounded-5 shadow-lg p-5 ">
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
