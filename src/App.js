import "./App.css";
import Navbar from "./AppComponents/Navbar.js";
import React, { Component } from "react";
import News from "./AppComponents/News"; 
import { Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

class App extends Component {
  pageCount = 6;
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress:progress });
  }
 

  render() {
    return (
      <>
        <div>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
          
        />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="general " pageSize= {this.pageCount} heading="General" category="general" country="in" />} />
            <Route exact path="/business" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="business " pageSize= {this.pageCount} heading="Business" category="business" country="in" />} />
            <Route exact path="/entertainment" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="entertainment" pageSize= {this.pageCount} heading="Entertainment" category="entertainment" country="in" />} />
            <Route exact path="/health" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="health" pageSize= {this.pageCount} heading="Health" category="health" country="in" />} />
            <Route exact path="/science" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="science" pageSize= {this.pageCount} heading="Science" category="science" country="in" />} />
            <Route exact path="/sports" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="sports" pageSize= {this.pageCount} heading="Sports" category="sports" country="in" />} />
            <Route exact path="/technology" element={<News setProgress = {this.setProgress} apiKey = {this.apiKey} key="technology" pageSize= {this.pageCount} heading="Technology" category="technology" country="in" />} />

          </Routes>
        </div>
      </>
    );
  }
}

export default App;
