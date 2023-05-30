import { useEffect, useState } from "react";
import { WorldNews } from "../../apiCalls";

import "bootstrap/dist/css/bootstrap.min.css";
import Card2 from "../Card/Card";
import SelectCountry from "../SelectCountry/SelectCountry";

function World() {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    WorldNews().then((res) => {
      setHeadlines(res);
    });
  }, []);

  return (
    <div>
      <SelectCountry />
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
export default World;
