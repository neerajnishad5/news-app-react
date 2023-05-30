import { useLocation } from "react-router-dom";
import "./ExpandNews.css";
import { useEffect, useState } from "react";
import { TrendingHeadlines, PopularNews, ViralNews } from "../../apiCalls";
import Card2 from "../Card/Card";
export default function ExpandNews() {
  const [trendingHeadlines, setTrendingHeadlines] = useState([]);
  const [popularNews, setPopularNews] = useState([]);
  const [viralNews, setViralNews] = useState([])
  const location = useLocation();
  const {
    title,
    description,
    author,
    publishedAt,
    content,
    urlToImage,
    source,
    url,
  } = location.state;

  useEffect(() => {
    TrendingHeadlines().then((res) => {
      setTrendingHeadlines(res);
    });
    PopularNews().then((res) => {
      setPopularNews(res);
    });
    ViralNews().then((res) => {
      setViralNews(res);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col col-9">
          <h2 className="title mb-3">{title}</h2>
          <hr />
          <p className="description">{description}</p>
          <p>
            <span className="source-name">{source?.name} | </span>
            Updated at: {publishedAt?.slice(-9).replace("Z", "")}
          </p>
          <img className="headline-image" src={urlToImage} alt={title} />
          <p className="author-name">
            By {author?.includes("http") !== true ? author : "Shreya Rao"}
          </p>
          <div class="ssrcss-jlwt2c-Divider e8mq1e915"></div>
          <p className="news-content">{content}</p>
          <a className="read-more" target="_blank" href={url}>
            Read more..
          </a>
        </div>
        <div className="col-3 text-start">
          <div className="trending-headlines">
            <h2>Trending</h2>
            {trendingHeadlines.map((headline, index) => {
              return (
                <Card2
                  key={index}
                  title={headline.title}
                  urlToImage={headline.urlToImage}
                  url={headline.url}
                  // description={headline.description}
                  author={headline.author}
                  publishedAt={headline.publishedAt}
                  content={headline.content}
                  source={headline.source}
                />
              );
            })}
          </div>
          <div className="trending-headlines">
            <h2>Features</h2>
            {popularNews.map((headline, index) => {
              return (
                <Card2
                  key={index}
                  title={headline.title}
                  urlToImage={headline.urlToImage}
                  url={headline.url}
                  // description={headline.description}
                  author={headline.author}
                  publishedAt={headline.publishedAt}
                  content={headline.content}
                  source={headline.source}
                />
              );
            })}
          </div>
          <div className="trending-headlines">
            <h2>Viral News</h2>
            {viralNews.map((headline, index) => {
              return (
                <Card2
                  key={index}
                  title={headline.title}
                  urlToImage={headline.urlToImage}
                  url={headline.url}
                  // description={headline.description}
                  author={headline.author}
                  publishedAt={headline.publishedAt}
                  content={headline.content}
                  source={headline.source}
                />
              );
            })}
          </div>


        </div>
      </div>
    </div>
  );
}
