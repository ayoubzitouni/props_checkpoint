import React from 'react'
import './Image.css'
const Image = (props) => {
  return (
    <div className='image'>
        <img src={props.children} alt="ayoub" />
    </div>
  )
}

export default Image