import React from 'react'
import './Image.css'
const Image = (props) => {
  return (
    <div className='image'>
        <img src={props.children} alt="ayoub" />
    </div>
  )
}
Image.defaultProps={
  children:"https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg",
};

export default Image