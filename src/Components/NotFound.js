import React from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not_found'>
        <Link to="/home">
        <div>
            <img
                className='img_title'
                src="https://images-na.ssl-images-amazon.com/images/G/01/error/title._TTD_.png"
                alt=''/>
        </div>
        <div>
            <img 
                className='img_dog'
                src="https://images-na.ssl-images-amazon.com/images/G/01/error/181._TTD_.jpg"
                alt=''/>
        </div>
        </Link>
    </div>
  )
}

export default NotFound