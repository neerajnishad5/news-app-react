import { useEffect, useState } from "react";
import { TechHeadlines } from "../../apiCalls";

import "bootstrap/dist/css/bootstrap.min.css";
import Card2 from "../Card/Card";

function Tech() {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    TechHeadlines().then((res) => {
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
export default Tech;
