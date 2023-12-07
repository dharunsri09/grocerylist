import React from 'react'

const Footer = (props) => {
  const lis=props.items.filter((item)=>item.checked);

  return (
    <div className='footer'>
      Total items : {props.length==1?"1 item":props.length+" items"}
      || Total checked items:{lis.length} 
    </div>
  )
}

export default Footer
