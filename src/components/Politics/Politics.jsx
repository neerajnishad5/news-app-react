import { useEffect, useState } from "react";
import { PoliticalNews } from "../../apiCalls";

import "bootstrap/dist/css/bootstrap.min.css";
import Card2 from "../Card/Card";

function Politics() {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    PoliticalNews().then((res) => {
      setHeadlines(res);

      console.log(res);
    });
  }, []);

  return (
    <div>
      
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
export default Politics;
