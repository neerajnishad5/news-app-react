import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;
const responses = [];

export const Headlines = async () => {
  try {
    const data = await axios.get(
      `https://saurav.tech/NewsAPI/top-headlines/category/general/in.json`
    );
    const realData = data.data;
    responses.push(realData.articles);
    return realData.articles;
  } catch (error) {
    console.log(error);
  }
};

export const TechHeadlines = async () => {
  try {
    const res = await axios.get(
      `https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json`
    );
    responses.push(res.data.articles);
    return res.data.articles;
  } catch (error) {
    console.log(error);
  }
};

export const IndiaNews = async () => {
  try {
    const res = await axios.get(
      `https://saurav.tech/NewsAPI/top-headlines/category/general/in.json`
    );
    // responses.push(res.data.articles);
    return res.data.articles;
  } catch (error) {
    console.log(error);
  }
};

export const countrySpecificNews = async (country) => {
  try {
    // const res = await axios.get(
    //   `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=20&apiKey=${apiKey}`
    // );

    const res = await axios.get(
      `https://saurav.tech/NewsAPI/top-headlines/category/general/${country}.json`
    );

    responses.push(res.data.articles);
    return res.data.articles;
  } catch (error) {
    console.log(error);
  }
};

export const businessNews = async () => {
  try {
    const res = await axios.get(
      `https://saurav.tech/NewsAPI/top-headlines/category/business/in.json`
    );
    responses.push(res.data.articles);
    return res.data.articles;
  } catch (error) {
    console.log(error);
  }
};

export const IplNews = async () => {
  try {
    const res = await axios.get(
      `https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json`
    );
    responses.push(res.data.articles);
    return res.data.articles;
  } catch (error) {
    console.log(error);
  }
};

export const WorldNews = async () => {
  try {
    const res = await axios.get(
      `https://saurav.tech/NewsAPI/top-headlines/category/general/us.json`
    );
    responses.push(res.data.articles);
    return res.data.articles;
  } catch (error) {
    console.log(error);
  }
};

// news api endpoints

export const TrendingHeadlines = async () => {
  try {
    const data = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&pageSize=4&apiKey=${apiKey}`
    );
    const realData = data.data;
    responses.push(realData.articles);

    return realData.articles;
  } catch (error) {
    console.log(error);
  }
};

export const PopularNews = async () => {
  try {
    const data = await axios.get(
      `https://newsapi.org/v2/top-headlines?q=trend&sortBy=popularity&pageSize=4&apiKey=${apiKey}`
    );
    const realData = data.data;
    responses.push(realData.articles);
    return realData.articles;
  } catch (error) {
    console.log(error);
  }
};

export const ViralNews = async () => {
  try {
    const data = await axios.get(
      `https://newsapi.org/v2/top-headlines?q=viral&sortBy=popularity&pageSize=4&apiKey=${apiKey}`
    );
    const realData = data.data;
    responses.push(realData.articles);
    return realData.articles;
  } catch (error) {
    console.log(error);
  }
};



export const PoliticalNews = async () => {
  try {
    const res = await axios.get(
      `https://newsapi.org/v2/everything?q=politics&pageSize=20&apiKey=${apiKey}`
    );
    responses.push(res.data.articles);
    return res.data.articles;
  } catch (error) {
    console.log(error);
  }
};
