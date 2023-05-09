import React, { Component } from "react";

export class NewsItems extends Component {
  
    render() {
    let {title, description, imageUrl, newsUrl, date, author, source} = this.props
    return (
      <> 
        <div className="card mx-3">
          
          <img src= {imageUrl?imageUrl:"https://c.ndtvimg.com/2023-04/21hjbaq_shubman-gill-and-wriddhiman-saha-bcci_625x300_07_April_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675"} className="card-img-top" alt="...." ></img> 

          <div className="card-body">
            <h5 className="card-title">{title}<span className="badge rounded-pill bg-success mx-2" style={{left:"80%"}} >{source}</span></h5>
            
            <p className="card-text">
              {description}...
            </p>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItems;
