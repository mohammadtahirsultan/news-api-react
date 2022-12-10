import React from "react";
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import { useEffect } from "react";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");

  //  document.title = `${capitalizeFirstLetter(props.category)}-King Kong`;

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(20);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(35);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(50);
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setAuthor(parsedData.author);
    setDate(parsedData.publishedAt);
    setLoading(false);
    props.setProgress(100);
  };
  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setAuthor(parsedData.author);
    setDate(parsedData.publishedAt);
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center" style={{marginTop:'90px ',marginBottom:'50px '}} >
          King Kong's - Top {capitalizeFirstLetter(props.category)} Headlines{" "}
        </h1>

        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles?.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      newsUrl={element.url}
                      imageUrl={element.urlToImage}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};


export default News;
