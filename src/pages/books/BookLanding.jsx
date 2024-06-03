import { Button, Col, Row, Spinner, Tab, Tabs } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { ReviewBlock } from "./ReviewBlock";
import { Stars } from "../../components/stars/Stars";
import { addNewBurrowAction } from "../../features/burrows/burrowAction";

export const BookLanding = () => {
  const { _id } = useParams();

  const dispatch = useDispatch();

  const { books } = useSelector((state) => state.bookInfo);
  const { user } = useSelector((state) => state.userInfo);

  const book = books.find((item) => item._id === _id);

  if (!book?._id) {
    return <Spinner animation="border"></Spinner>;
  }
  const { title, author, publishedYear, thumbnail, description, isAvailable } =
    book;

  const handleOnBookBurrow = () => {
    if (window.confirm("Are you sure, you want to burrow the book?")) {
      dispatch(
        addNewBurrowAction({
          bookId: _id,
          bookTitle: title,
          thumbnail: thumbnail,
        })
      );
    }
  };
  return (
    <DefaultLayout>
      <Row className="g-2">
        <Col md={6}>
          <div className="m-auto" style={{ maxWidth: "450px" }}>
            <img src={thumbnail} width={"100%"}></img>
          </div>
        </Col>
        <Col md={6}>
          <h1>{title}</h1>
          <p>
            {author} - {publishedYear}
          </p>

          <Stars stars={3.5} />

          <p className="mt-5">{description.slice(0, 130)}.....</p>

          <div className="d-grid">
            {user?._id ? (
              <Button variant="warning" onClick={handleOnBookBurrow}>
                Burrow Book
              </Button>
            ) : (
              <Link to={"/login"} className="d-grid">
                <Button>Login to Burrow</Button>
              </Link>
            )}
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3 mt-5"
          >
            <Tab eventKey="description" title="Description">
              Description
            </Tab>
            <Tab eventKey="review" title="Reviews">
              <ReviewBlock />
            </Tab>
          </Tabs>
          {/* tab bar
        content area
         */}
        </Col>
      </Row>
    </DefaultLayout>
  );
};
