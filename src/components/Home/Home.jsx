import { useEffect, useState } from "react";
import { Headlines } from "../../apiCalls";
import "bootstrap/dist/css/bootstrap.min.css";
import Card2 from "../Card/Card";
import Spinner from "../Spinner/Spinner";
import { Helmet } from "react-helmet";

export default function Home() {
  const [headlines, setHeadlines] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setSpinner(true);
    Headlines().then((res) => {
      setHeadlines(res);
      setSpinner(false);
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
          <div>
            <Helmet>
              <title>India | 24xNews</title>
            </Helmet>
          </div>
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-4">
            {headlines.map((headline, index) => {
              return (
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
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
