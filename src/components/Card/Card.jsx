import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css"
function Card2({ title, description, source, url, urlToImage }) {
  return (
    <Card className="" style={{ width: "18rem", height: "20rem" }}>
      <Card.Img variant="top" src={urlToImage} />
      <Card.Body
        style={{
          overflow: "auto",
        }}
      >
        <Card.Title id="card-title">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button id="btn" variant="primary">
          <a target="_blank" className="text-light" href={url}>
            Read more
          </a>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Card2;
