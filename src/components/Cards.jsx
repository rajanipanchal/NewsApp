import React, { useContext, useEffect } from 'react'
import { getNews } from '../Context/NewsActions'
import NewsContext from '../Context/NewsContext'


function Cards({ news }) {
 

  return (
    <div className="col-lg-8 col-md-8 col-sm-12">
      <div className="card mt-2 rounded-0 ">
        <h5 className="card-title mt-2 px-3">{news.title}</h5>
        <div className="card-body d-flex">
          <img src={news.urlToImage} style={{ "width": "20%", "height": "20vh" }} className="card-img-top rounded-0" alt="..." />
          <div className="text-body mx-3">
            <p className="card-text">{news.description}</p>
            <a href={news.url} target="_blank" className="btn btn-primary rounded-0">Read More..</a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Cards

