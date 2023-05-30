import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { countrySpecificNews } from "../../apiCalls";
import Card2 from "../Card/Card";

export default function CountryNews() {
  const params = useParams();
  const country = params.countryname.toUpperCase();
  const [headlines, setHeadlines] = useState([]);
  //   console.log(params.countryname);

  useEffect(() => {
    countrySpecificNews().then((res) => {
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
