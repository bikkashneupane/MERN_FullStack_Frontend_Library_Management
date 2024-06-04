import { Button, Form } from "react-bootstrap";
import { postNewBook, putEditBook } from "../../features/books/bookAxios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { CustomForm } from "../../components/customForm.jsx/CustomForm";
import { UserLayout } from "../../components/layout/UserLayout";
import { getSingleBooksAction } from "../../features/books/bookAction";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

export const EditBook = () => {
  const { _id } = useParams();
  const { form, setForm, handleOnChange } = useForm({});
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { selectedBook } = useSelector((state) => state.bookInfo) || [];

  //fetch single book and populate form
  //check if the id from form and id from params is not same

  useEffect(() => {
    if (form?._id !== _id) {
      dispatch(getSingleBooksAction(_id));
      setForm(selectedBook);
    }
  }, [dispatch, _id, form, setForm, selectedBook]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const book = await putEditBook(form);

    const { status, message } = book;
    toast[status](message);

    if (status === "success") {
      navigate("/admin/books");
    }
  };

  const inputs = [
    {
      label: "Title",
      name: "title",
      type: "text",
      required: true,
      placeholder: "Learn JS",
    },
    {
      label: "Author",
      name: "author",
      type: "text",
      required: true,
      placeholder: "George RR Martin",
    },
    {
      label: "Thumbnail",
      name: "thumbnail",
      type: "url",
      required: true,
      placeholder: "httpt:something.something.com",
    },
    {
      label: "ISBN",
      name: "isbn",
      type: "text",
      required: true,
      placeholder: "12312ASD",
    },
    {
      label: "Published Year",
      name: "publishedYear",
      type: "number",
      min: "1000",
      required: true,
      placeholder: "1999",
    },
    {
      label: "Description",
      name: "description",
      as: "textarea",
      maxLength: "5000",
      required: true,
      placeholder: "Book Summary....",
      rows: 5,
    },
  ];

  // // can do this way as well
  // // just put value=undefined in above input properties
  // const inputFieldWithValue = inputs.map((item) => {
  //   return { ...item, value: selectedBook[item.name] };
  // });

  //or just send value as prop inside CustomForm as value={form[input.name]}
  return (
    <UserLayout pageTitle={"Edit Book"}>
      <div className="m-5 p-4 border rounded-4 shadow-lg">
        <h4>Edit Book</h4>

        <Form onSubmit={handleOnSubmit}>
          <Form.Check
            name="status"
            type="switch"
            id="custom-switch"
            checked={form?.status === "active"}
            label={form?.status?.toUpperCase()}
            className={
              form?.status === "active"
                ? "mb-3 text-success"
                : "mb-3 text-danger"
            }
            value={form.status}
            onChange={handleOnChange}
          />
          {inputs.map((item, i) => {
            return (
              <CustomForm
                key={i}
                {...item}
                value={form[item.name]}
                disabled={item.name === "isbn"}
                onChange={handleOnChange}
              />
            );
          })}

          <div className="d-grid">
            <Button variant="primary" type="submit">
              Edit Book
            </Button>
          </div>
        </Form>
      </div>
    </UserLayout>
  );
};
