import React from 'react'
import '../App.css';
const Header = (props) => {
  return (
    <div className='header'>
      {props.title}
    </div>
  )
}

export default Header
