import React from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

const App =()=> {
 const [progress, setProgress] = useState(20)
  const country = 'in'
  const apiKey = process.env.REACT_APP_NEWS_API
  const pageSize = 7
  // setProgress(progress)
    return (
      <>
      <Router>
      <NavBar />
      <LoadingBar
      color='#007bff'
      height={3}
      progress={progress}
       />
<Routes>
  <Route path='/health'       element = {<News setProgress = {setProgress}  apiKey ={apiKey }  key='health'         pageSize = {pageSize}  country ={country} category = 'health' /> } />
  <Route path='/business'     element = {<News setProgress = {setProgress}  apiKey ={apiKey }  key='business'       pageSize = {pageSize}  country ={country} category = 'business'  />} />
  <Route path='/entertainment'element = {<News setProgress = {setProgress}  apiKey ={apiKey }  key='entertainment'  pageSize = {pageSize}  country ={country} category = 'entertainment'  />} />
  <Route path='/sports'       element = {<News setProgress = {setProgress}  apiKey ={apiKey }  key='sports'         pageSize = {pageSize}  country ={country} category = 'sports'  /> } />
  <Route path='/politics'     element = {<News setProgress = {setProgress}  apiKey ={apiKey }  key='politics'       pageSize = {pageSize}  country ={country} category = 'politics'  />} />
  <Route path='/science'      element = {<News setProgress = {setProgress}  apiKey ={apiKey }  key='science'        pageSize = {pageSize}  country ={country} category = 'science'  /> } />
  <Route path='/technology'   element = {<News setProgress = {setProgress}  apiKey ={apiKey }  key='general'        pageSize = {pageSize}  country ={country} category = 'technology'  />} />
  <Route path='/'             element = {<News setProgress = {setProgress}  apiKey ={apiKey }  key='general'        pageSize = {pageSize}  country ={country} category = 'general'  />} />
</Routes>
      </Router>
      </>
    )
  
}


export default App