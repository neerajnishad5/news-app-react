import { useEffect, useState } from "react";
import { WorldNews } from "../../apiCalls";
import Spinner from "../Spinner/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import Card2 from "../Card/Card";
import SelectCountry from "../SelectCountry/SelectCountry";
import QuickLinks from "../QuickLinks/QuickLinks";
import { Helmet } from "react-helmet";

function World() {
  const [headlines, setHeadlines] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setSpinner(true);

    WorldNews().then((res) => {
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
        <div>
          <div>
            <Helmet>
              <title>World News | 24xNews</title>
            </Helmet>
          </div>
          <div className="row justify-content-around mb-3">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <SelectCountry />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <QuickLinks />
            </div>
          </div>
          <div className="text-center">
            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-4 tw-justify-center tw-align-middle">
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
        </div>
      )}
    </div>
  );
}
export default World;
