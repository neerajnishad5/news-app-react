import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;

export const Headlines = async () => {
  try {
    const data = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`
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
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`
    );

    return res.data.articles;
  } catch (error) {
    console.log(error);
  }
};

export const IplNews = async () => {
  try {
    const res = await axios.get(
      `https://newsapi.org/v2/everything?q=ipl&apiKey=${apiKey}`
    );

    return res.data.articles;
  } catch (error) {
    console.log(error);
  }
};

export const WorldNews = async () => {
  try {
    const res = await axios.get(
      `https://newsapi.org/v2/everything?q=world-news&apiKey=${apiKey}`
    );

    return res.data.articles;
  } catch (error) {
    console.log(error);
  }
};

export const IndiaNews = async () => {
  try {
    const res = await axios.get(
      `https://newsapi.org/v2/everything?q=india&apiKey=${apiKey}`
    );

    return res.data.articles;
  } catch (error) {
    console.log(error);
  }
};

export const PoliticalNews = async () => {
  try {
    const res = await axios.get(
      `https://newsapi.org/v2/everything?q=politics&apiKey=${apiKey}`
    );

    return res.data.articles;
  } catch (error) {
    console.log(error);
  }
};

export const countrySpecificNews = async (country) => {
  try {
    const res = await axios.get(
      `https://newsapi.org/v2/everything?q=${country}&apiKey=${apiKey}`
    );

    return res.data.articles;
  } catch (error) {
    console.log(error);
  }
};
