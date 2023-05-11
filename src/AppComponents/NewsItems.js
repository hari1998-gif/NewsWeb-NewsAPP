import React from "react";
import PropTypes from 'prop-types'
function NewsItems (props)  {
    return (
      <> 
        <div className="card mx-3"> 
          <img src= {props.imageUrl?props.imageUrl:"https://c.ndtvimg.com/2023-04/21hjbaq_shubman-gill-and-wriddhiman-saha-bcci_625x300_07_April_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675"} className="card-img-top" alt="...." ></img> 
          <div className="card-body">
            <h5 className="card-title">{props.title}<span className="badge rounded-pill bg-success mx-2" style={{left:"80%"}} >{props.source}</span></h5>
            <p className="card-text">{props.description}...</p>
            <p className="card-text"><small className="text-muted">By {props.author?props.author:"Unknown"} on {new Date(props.date).toGMTString()}</small></p>
            <a href={props.newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </>
    );
}
NewsItems.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  newsUrl: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  source: PropTypes.string,
}

NewsItems.defaultProps = {
  title: 'News APP',
  description: 'News descripttion',
  imageUrl: 'imageUrl from NewsApi',
  newsUrl: 'newsUrl from NewsApi',
  date: 'date from NewsApi',
  author: 'author from NewsApi',
  source: 'source from NewsApi'
}

export default NewsItems;
