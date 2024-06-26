import { apiProcessior } from "../../helper/axiosHelper";

// http://localhost:8000/library/books
const bookAPI = import.meta.env.VITE_APP_SERVER_API + "/library/books";

// post new book
export const postNewBook = (bookObj) => {
  const axiosObj = {
    url: bookAPI,
    method: "post",
    data: bookObj,
    isPrivate: true,
  };

  return apiProcessior(axiosObj);
};

//post edit book
export const putEditBook = async (bookObj) => {
  const axiosObj = {
    method: "put",
    url: bookAPI,
    data: bookObj,
    isPrivate: true,
  };

  return await apiProcessior(axiosObj);
};

//get all books
export const fetchAllBooks = () => {
  const axiosObj = {
    url: bookAPI,
    method: "get",
    isPrivate: true,
  };

  return apiProcessior(axiosObj);
};

//if isPrivate = true, api = /books/all
//if isPrivate = false, api = /books
export const fetchBooks = async (isPrivate) => {
  const axiosObj = {
    method: "get",
    url: isPrivate ? `${bookAPI}/all` : bookAPI,
    isPrivate,
  };

  return await apiProcessior(axiosObj);
};

//get a single book to edit
export const fetchSingleBook = async (_id) => {
  const axiosObj = {
    method: "get",
    url: bookAPI + "/" + _id,
  };

  return await apiProcessior(axiosObj);
};

// delete book from_id
export const deleteSingleBook = async (_id) => {
  const axiosObj = {
    method: "delete",
    url: bookAPI + "/" + _id,
    isPrivate: true,
  };

  return await apiProcessior(axiosObj);
};
