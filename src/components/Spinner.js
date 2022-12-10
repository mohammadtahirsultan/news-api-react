import React, { Component } from 'react'
import loading from './loading.gif'
// import './loading.css'
const Spinner = ()=>{

    return (
      <div className='text-center py-3 my-3'>
        <img  className='my-3' src={loading} alt = "Loading"/>
      </div>
      // <div class="lds-heart"><div></div></div>
    )
  
}

export default Spinner