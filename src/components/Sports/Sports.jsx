import { useEffect, useState } from "react";
import { IplNews } from "../../apiCalls";
import "bootstrap/dist/css/bootstrap.min.css";
import Card2 from "../Card/Card";
import Spinner from "../Spinner/Spinner";
function Ipl() {
  const [headlines, setHeadlines] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setSpinner(true);
    IplNews().then((res) => {
      setHeadlines(res);
      setSpinner(false);
      // console.log(res);
    });
  }, []);

  return (
    <div>
      {spinner === true ? (
        <div
          style={{
            minheight: "65vh",
          }}
          className="d-flex flex-row justify-content-center align-items-center"
        >
          <Spinner />
        </div>
      ) : (
        <div className="text-center">
           <div className="row ms-auto me-auto ">
            {headlines.map((headline, index) => {
              return (
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <Card2
                    key={index}
                    title={headline.title}
                    urlToImage={headline.urlToImage}
                    url={headline.url}
                    description={headline.description}
                    author={headline.author}
                    publishedAt={headline.publishedAt}
                    content={headline.content}
                    source={headline.source}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
export default Ipl;