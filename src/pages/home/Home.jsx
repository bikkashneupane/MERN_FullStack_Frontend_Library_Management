import { Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import CustomCard from "../../components/card/CustomCard";
import { CustomCarousel } from "../../components/carousel/CustomCarousel";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { getAllBooksAction } from "../../features/books/bookAction";
import { useEffect } from "react";

const isPrivate = false;

export const Home = () => {
  const dispatch = useDispatch();

  const { books } = useSelector((state) => state.bookInfo);

  useEffect(() => {
    dispatch(getAllBooksAction(isPrivate));
  }, [dispatch]);

  return (
    <DefaultLayout>
      <CustomCarousel />
      {/* Book List */}
      <Container>
        <Row>
          <Col className="mt-3 d-flex justify-content-between">
            <label htmlFor="">{books.length} Books Found!</label>
            <div className="">
              <Form.Control placeholder="Search by name..." />
            </div>
          </Col>
        </Row>
        <Row className="mt-3 mb-5 row-gap-4">
          {books.map((book, index) => {
            return (
              <Col key={index}>
                <CustomCard {...book} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </DefaultLayout>
  );
};
