import React, { useEffect,useState } from "react";
import NewsItem from "./newsItem";
import Spinner from "./spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=>{
const [artical, setArtical] = useState([])
const [loading, setLoading] = useState(true)
const [totalResults, setTotalResults] = useState(0)
const [page, setPage] = useState(1)
const capitalizeFirstLetter =(string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
 
 const updateNews =async()=>{
    try {
      props.setProgress(10);
      const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(40);
    let presentData = await data.json();
    props.setProgress(70);
    setArtical(presentData.articles);
    setTotalResults(presentData.totalResults);
    setLoading(false);
    props.setProgress(100);
    } catch (error) {
      console.log(`this is the error in api${error}`);
    }
    
  }
  useEffect(() => {
  document.title=(`${capitalizeFirstLetter(props.category)} -pak times`)
  updateNews();
  // eslint-disable-next-line
  }, [])
  
  
  const fetchMoreData = async () => {
    try {
    const nextPage = page+1
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let presentData = await data.json();
    setArtical((prevArticles) => prevArticles.concat(presentData.articles));
    setPage(nextPage);
    setTotalResults(presentData.totalResults);
    setLoading(false);
  
  } catch (error) {
    console.log(`there is ${error}`)
  }
  }

// Explanation of the changes:

// First, we store the incremented page number in a variable called nextPage before making the API call. This ensures that we have the correct page number.
// Then, in the setState call, we use a functional form to update the state. This allows us to access the previous state and perform the concatenation correctly.
// By using prevState.artical, we ensure that we are concatenating the new articles with the existing ones from the previous state. This eliminates the issue of duplicate data.
// With these changes, the page number is incremented after fetching the data, ensuring that each API call fetches the appropriate page of articles. The concatenation is performed correctly, and the duplicate data problem is resolved.
    return (
      <>
        <h1 style={{margin: "3px 285px " ,marginTop:"46px"}}>PakTimes - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={artical.length}
          next={fetchMoreData}
          hasMore={artical.length !==  totalResults}
          loader={<Spinner/>}
        >
          <div className="container">

        <div className="row">
          {artical.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : "unkown title"}
                  discription={
                    element.description ? element.description.slice(0, 88) : ""
                  }
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
        {/* <div className="container d-flex justify-content-between">
          <button
          type="button"
          disabled={this.state.page <= 1}
          className="btn btn-dark"
          onClick={this.handlePreviousClick}
          >
          &#8249; Previous
          </button>
          <button
            type="button"
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)}
            className="btn btn-dark"
            onClick={this.handleNextClick}
            >
            Next &rsaquo;
          </button>
        </div> */}
      </>
    );
  }

News.defaultProps = {
  country: 'us',
  pageSize:18,
  category:"general",
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string, 
}
export default News;