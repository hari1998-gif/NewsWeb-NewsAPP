import "./App.css";
import Navbar from "./AppComponents/Navbar.js";
import React, { useState } from "react";
import News from "./AppComponents/News"; 
import { Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const pageCount = 15;
const apiKey = process.env.REACT_APP_NEWS_API;

function App() {
  
  const [progress, setProgress] = useState(0);

  return (
    <>
      <div>
        <LoadingBar color='#f11946' progress={progress}/>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News setProgress = {setProgress} apiKey = {apiKey} key="general " pageSize= {pageCount} heading="General" category="general" country="in" />} />
          <Route exact path="/business" element={<News setProgress = {setProgress} apiKey = {apiKey} key="business " pageSize= {pageCount} heading="Business" category="business" country="in" />} />
          <Route exact path="/entertainment" element={<News setProgress = {setProgress} apiKey = {apiKey} key="entertainment" pageSize= {pageCount} heading="Entertainment" category="entertainment" country="in" />} />
          <Route exact path="/health" element={<News setProgress = {setProgress} apiKey = {apiKey} key="health" pageSize= {pageCount} heading="Health" category="health" country="in" />} />
          <Route exact path="/science" element={<News setProgress = {setProgress} apiKey = {apiKey} key="science" pageSize= {pageCount} heading="Science" category="science" country="in" />} />
          <Route exact path="/sports" element={<News setProgress = {setProgress} apiKey = {apiKey} key="sports" pageSize= {pageCount} heading="Sports" category="sports" country="in" />} />
          <Route exact path="/technology" element={<News setProgress = {setProgress} apiKey = {apiKey} key="technology" pageSize= {pageCount} heading="Technology" category="technology" country="in" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
