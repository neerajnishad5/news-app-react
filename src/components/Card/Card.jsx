import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";

function Card2({ title, description, source, url, urlToImage }) {
  return (
    <Card
      className="card"
      style={{ width: "18rem", height: "20rem", backgroundColor: "#cbe4f4" }}
    >
      <Card.Img style={{
        maxWidth: "15rem",
        textAlign: "center",
        margin: "5px auto",
        borderRadius: "0px"
      }} variant="top" src={urlToImage} />
      <Card.Body
        style={{
          overflow: "auto",
        }}
      >
        <Card.Title id="card-title">{title}</Card.Title>
        <Card.Text
          style={{
            textOverflow: "ellipeses",
          }}
        >
          {description}
        </Card.Text>
        <Button id="btn" >
          <a target="_blank" className="read" href={url}>
            Read more
          </a>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Card2;
