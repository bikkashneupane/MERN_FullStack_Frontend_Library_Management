import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { Button, Form } from "react-bootstrap";
import { CustomForm } from "../../components/customForm.jsx/CustomForm";
import { updateUserAction } from "../../features/user/userAction";

export const EditUser = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { form, setForm, handleOnChange } = useForm({});

  const { allUsers } = useSelector((state) => state.userInfo) || [];
  const selectedUser = allUsers?.find((item) => item?._id === _id);

  useEffect(() => {
    if (!form?._id) {
      setForm(selectedUser);
    }
  }, [dispatch, _id, selectedUser, setForm, form]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateUserAction(form, { isAdmin: true }, navigate));
  };

  const inputs = [
    {
      label: "First Name",
      name: "firstName",
      type: "text",
    },
    {
      label: "Last Name",
      name: "lastName",
      type: "text",
    },
    {
      label: "Phone",
      name: "phone",
      type: "number",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
    },
  ];

  return (
    <UserLayout pageTitle={"Edit User"}>
      <div className="m-5 mt-2 p-4 border rounded-4 shadow-lg">
        <h4>Edit User</h4>

        <Form onSubmit={handleOnSubmit}>
          <Form.Check
            name="role"
            type="switch"
            id="custom-switch"
            checked={form?.role === "admin"}
            label={form?.role?.toUpperCase()}
            className={
              form?.role === "admin" ? "mb-3 text-success" : "mb-3 text-danger"
            }
            value={form?.role}
            onChange={handleOnChange}
          />
          {inputs.map((item, i) => {
            return (
              <CustomForm
                key={i}
                {...item}
                value={form?.[item.name] || ""}
                disabled={item.name !== "role"}
                onChange={handleOnChange}
              />
            );
          })}

          <div className="d-grid">
            <Button variant="primary" type="submit">
              Edit User
            </Button>
          </div>
        </Form>
      </div>
    </UserLayout>
  );
};
