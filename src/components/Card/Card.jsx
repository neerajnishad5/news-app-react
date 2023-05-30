import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";
import { useNavigate } from "react-router-dom";

function Card2({
  title,
  description,
  source,
  url,
  urlToImage,
  content,
  publishedAt,
  author,
}) {
  // const redirect = () => {
  //   location.href = url;
  // };
  const navigate = useNavigate();
  console.log(source);

  return (
    <Card
      onClick={() =>
        navigate(`/${title}`, {
          state: {
            title: title,
            urlToImage: urlToImage,
            content: content,
            author: author,
            publishedAt: publishedAt,
            description: description,
            source: source,
            url: url,
          },
        })
      }
      className="card"
      style={{ width: "18rem", height: "20rem", backgroundColor: "#cbe4f4" }}
    >
      <Card.Img
      className="card-img"
        style={{
          maxWidth: "15rem",
          textAlign: "center",
          margin: "5px auto",
          borderRadius: "0px",
        }}
        variant="top"
        src={urlToImage}
      />
      <hr />
      <Card.Body className="card-body">
        <Card.Title id="card-title">{title}</Card.Title>
        <Card.Text
          style={{
            textOverflow: "ellipeses",
          }}
        >
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Card2;
