import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import book3 from "/src/assets/book3.jpg";

const CustomCard = ({ thumbnail, author, title, publishedYear }) => {
  return (
    <Card style={{ width: "19.5rem" }}>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <p>
          {author} - {publishedYear}
        </p>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
