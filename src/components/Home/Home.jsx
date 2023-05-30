import { useEffect, useState } from "react";
import { Headlines } from "../../apiCalls";
import "bootstrap/dist/css/bootstrap.min.css";
import Card2 from "../Card/Card";
export default function Home() {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    Headlines().then((res) => {
      setHeadlines(res);
    });
  }, []);

  return (
    <div>
      <div className="text-center">
        <div className="row ms-auto me-auto">
          {headlines?.map((headline, index) => {
            return (
              <div className="col-sm-12 col-md-4 col-lg-3">
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
    </div>
  );
}
