import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import book3 from "/src/assets/book3.jpg";

const CustomCard = ({ thumbnail, author, title, isbn, publishedYear }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body className="text-center">
        <Card.Title>
          <strong>{title.slice(0, 30)}</strong>
        </Card.Title>
        <div>
          <div className="">
            <h6>{author}</h6>
            <p>{isbn}</p>
            <p>{publishedYear}</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
