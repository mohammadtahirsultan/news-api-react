import React from 'react'

const NewsItem = (props)=> {
  

  let {title , description , imageUrl,newsUrl , author, date,source} = props;
    return (
      <>
      <div className='my-3' >

  <div className="card" >
  
  <span className="position-absolute top-0 translate-middle badge rounded-pill bg-primary">
    {source}
  
  </span>

  <img className="card-img-top" src={!imageUrl ? "https://images.moneycontrol.com/static-mcnews/2022/11/stock-market-770x433.jpg" : imageUrl} alt="News" />
  <div className="card-body">
    
    <h5 className="card-title">{title}  <span className="badge rounded pill bg-primary">New</span></h5>
    <p className="card-text">{description} </p>
    <p className="card-text"> <small>By <b> {!author ? "Unknown" : author} </b> on <b> {new Date(date).toUTCString()} </b></small></p>

    <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
  
      </div>
</div>
      </>
    )
  
}

export default NewsItem