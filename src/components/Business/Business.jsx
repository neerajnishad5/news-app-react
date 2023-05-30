import { useState, useEffect } from "react";
// import { useParams, useLocation } from "react-router-dom";
import { businessNews } from "../../apiCalls";
import Card2 from "../Card/Card";

function Business() {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    businessNews().then((res) => {
      setHeadlines(res);
      console.log(res);
    });
  }, []);
  <div>
    <div className="heading ms-3 me-3 bg-success p-2 mb-2">
      <h2>{country} News</h2>
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
  </div>;
}

export default Business;
