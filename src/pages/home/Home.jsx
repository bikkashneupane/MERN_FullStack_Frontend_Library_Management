import { Col, Container, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

import CustomCard from "../../components/card/CustomCard";
import { CustomCarousel } from "../../components/carousel/CustomCarousel";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Home = () => {
  const { books } = useSelector((state) => state.bookInfo);

  const [searchedBooks, setSearchedBooks] = useState([]);

  useEffect(() => {
    setSearchedBooks(books);
  }, [books]);

  const handleOnSearch = (e) => {
    const { value } = e.target;

    setSearchedBooks(
      books.filter(({ title }) =>
        title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <DefaultLayout>
      <CustomCarousel />

      {/* Book List */}

      <Container>
        <Row>
          <Col className="mt-5 d-flex justify-content-between">
            <label htmlFor="">{searchedBooks.length} Books Found!</label>
            <div>
              <Form.Control
                placeholder="Search book by name..."
                onChange={handleOnSearch}
              />
            </div>
          </Col>
        </Row>
        <hr />
        <Row className="mb-5">
          <Col className="d-flex flex-wrap gap-2">
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
