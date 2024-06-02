import { useState } from "react";

const handleOnChange = ({ e, form, setForm }) => {
  let { name, value, checked } = e.target;
  if (name === "status") {
    value = checked ? "active" : "inactive";
  }

  setForm({ ...form, [name]: value });
};

export const useForm = () => {
  const [form, setForm] = useState({});
  return {
    form,
    setForm,
    handleOnChange: (e) => handleOnChange({ e, form, setForm }),
  };
};
