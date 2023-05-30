import React, { useContext } from 'react'
import NewsContext from '../../Context/NewsContext'
import Cards from '../Cards'


function Home() {
  const { news } = useContext(NewsContext)
  return (

    <div className="container-fluid">
      <div className="row">
        {
          news.map((item,index)=> <Cards key={index} news={item} />)
        }
     
      </div>
    </div>

  )
}

export default Home