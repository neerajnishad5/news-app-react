import { useEffect, useState } from "react";
import { IndiaNews } from "../../apiCalls";

import "bootstrap/dist/css/bootstrap.min.css";
import Card2 from "../Card/Card";
export default function India() {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    IndiaNews().then((res) => {
      setHeadlines(res);

      console.log(res);
    });
  }, []);

  return (
    <div>
      <div className="heading ms-3 me-3 bg-success p-2 mb-2">
        <h2>India News</h2>
      </div>
      <div className="text-center">
        <div className="row ms-auto me-auto">
          {headlines.map((headline, index) => {
            return (
              <div className="col">
                <Card2
                  key={index}
                  title={headline.title}
                  urlToImage={headline.urlToImage}
                  url={headline.url}
                  description={headline.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}