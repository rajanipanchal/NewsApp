import React, { useContext, useEffect, useState } from 'react'
import { getNews, getTwoNews } from '../Context/NewsActions'
import NewsContext from '../Context/NewsContext'


function Navbar() {
  const { dispatch } = useContext(NewsContext)
  const [text, setText] = useState("")
  const getNewsData = async (topic) => {
    const data = await getNews(topic)
    dispatch({
      type: "GETNEWS",
      payload: data
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    getNewsData(text)
    
  }
  
  useEffect(() => {
    getNewsData("india")
  
  }, [])
  return (
    <nav className="navbar navbar-expand-lg bg-body-sticky bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><h4>BREAKING NEWS</h4></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" onClick={() => getNewsData('politics')} >Politics</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" onClick={() => getNewsData('Bussiness')}>Bussiness</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" onClick={() => getNewsData('sports')}>Sports</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" onClick={() => getNewsData('gadgets')}>Gadgets</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" onClick={() => getNewsData('entertainmemt')}>Entertainments</a>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={(e) => handleSubmit(e)}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setText(e.target.value)} />
            <button className="btn btn-outline-secondary text-light" type="submit"  >Search</button>
          </form>
        </div>
      </div>

    </nav>
  )
}

export default Navbar