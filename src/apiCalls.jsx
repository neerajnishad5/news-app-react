import axios from "axios";

export const Headlines = async () => {
  try {
    const data = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=7da1e770f3fd44f78c71b5b5943ff808"
    );
    const realData = data.data;
    return realData.articles;
    console.log("real data", realData);
  } catch (error) {
    console.log(error);
  }
};

export const TechHeadlines = async () => {
  try {
    const res = await axios.get(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7da1e770f3fd44f78c71b5b5943ff808"
    );

    return res.data.articles;
  } catch (error) {
    console.log(error);
  }
};

export const IplNews = async () => {
  try {
    const res = await axios.get(
      "https://newsapi.org/v2/everything?q=ipl&apiKey=7da1e770f3fd44f78c71b5b5943ff808"
    );

    return res.data.articles;
  } catch (error) {
    console.log(error);
  }
};

export const WorldNews = async () => {
  try {
    const res = await axios.get(
      "https://newsapi.org/v2/everything?q=world-news&apiKey=7da1e770f3fd44f78c71b5b5943ff808"
    );

    return res.data.articles;
  } catch (error) {
    console.log(error);
  }
};


export const IndiaNews = async () => {
    try {
      const res = await axios.get(
        "https://newsapi.org/v2/everything?q=india&apiKey=7da1e770f3fd44f78c71b5b5943ff808"
      );
  
      return res.data.articles;
    } catch (error) {
      console.log(error);
    }
  };