import "./News.css";
import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pageSize: 15,
    heading: "News Web",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
    heading: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  articles = [];

  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalArticles: 0,
    };
    document.title = `News Hub - ${this.capitalizeFirstLetter(
      this.props.category
    )}`;
  }

  async updateNews() {
    this.setState({ loading: true });
    this.props.setProgress(10);

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    console.log(parsedData.articles);
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      page: this.state.page + 1,
      loading: false
    });
    this.props.setProgress(100);
  }
  componentDidMount() {
    this.updateNews();
  }

  nextData = async() => {
    this.setState({ loading: true });

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      page: this.state.page + 1,
      loading: false
    });
    console.log(this.articles.length);
  }
  render() {
    return (
      <>
        <h2 className="text-center" style={{ margin: "30px" }}>
          <strong>NewsWeb- Top {this.props.heading} Headlines</strong>
        </h2>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.nextData}
          hasMore={this.state.articles.length !== this.state.totalArticles}
        >

          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
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
}
export default News;
