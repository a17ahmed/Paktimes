import React from "react";

const NewsItem =(props)=> {

    let { title, discription, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:"0"}}>
          <span
            className="badge rounded-pill bg-danger">
            {source}
          </span>
              </div>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://techcrunch.com/wp-content/uploads/2019/12/tc-space-stars.gif?w=946"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{discription}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By <b>{author ? author : "Unknown"}</b> at{" "}
                <b>{new Date(date).toGMTString()}</b>
              </small>
            </p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
