import "./News.css";
import React, { useState, useEffect } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
  
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  

  const updateNews= async()=> {
    setLoading(true);
    props.setProgress(10);

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setLoading(false);
    setPage(page + 1);
    setTotalArticles(parsedData.totalResults)
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews(); // eslint-disable-next-line
    document.title = `News Hub - ${capitalizeFirstLetter(props.category)}`;
  }, [])
  
  const nextData = async() => {

    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setPage(page + 1);
    setLoading(false);
  }
    return (
      <>
        <h2 className="text-center" style={{ margin: "30px", marginTop: '100px'}}>
          <strong>NewsWeb- Top {props.heading} Headlines</strong>
        </h2>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={nextData}
          hasMore={articles.length !== totalArticles}
        >

          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4 my-3" key={element.url}>
                    <NewsItems
                      title={element.title ? element.title : "Title Undefined"}
                      description={element.description ? element.description.slice(0, 76) : "Want to see full story, click on Read more..."}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
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
      </>
    );
}

News.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 15,
  heading: "News Web",
};
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
  heading: PropTypes.string,
};
export default News;
