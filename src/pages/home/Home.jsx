import { Col, Container, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

import CustomCard from "../../components/card/CustomCard";
import { CustomCarousel } from "../../components/carousel/CustomCarousel";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Home = () => {
  const [searchedBooks, setSearchedBooks] = useState([]);

  const { books } = useSelector((state) => state.bookInfo);

  useEffect(() => {
    setSearchedBooks(books);
  }, [setSearchedBooks, books]);

  const handleOnSearch = (e) => {
    const { value } = e.target;

    const arg = books.filter(({ title }) =>
      title.toLowerCase().includes(value)
    );

    console.log(arg);
    setSearchedBooks(arg);
  };

  return (
    <DefaultLayout>
      <CustomCarousel />
      {/* Book List */}
      <Container>
        <Row>
          <Col className="mt-3 d-flex justify-content-between">
            <label htmlFor="">{searchedBooks.length} Books Found!</label>
            <div className="">
              <Form.Control
                placeholder="Search by name..."
                onChange={handleOnSearch}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-wrap gap-4">
            {searchedBooks.length > 0 &&
              searchedBooks.map((book) => (
                <Link key={book._id} to={`/books/${book._id}`}>
                  <CustomCard {...book} />
                </Link>
              ))}
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};
