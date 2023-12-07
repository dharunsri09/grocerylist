import React, { useEffect, useState } from 'react'
import Listitem from './Listitem';
import AddItems from './AddItems';
const Content = (props) => {
 
  return (
    <div className='content'>
        
    {props.items.length===0?<p style={{
      color:"red",
      display:'flex',
      justifyItems:'center',
      marginTop:'40%'
    }
      }>
      No items in the list
      </p>:
      <Listitem items={props.items} handleDel={props.handleDel} setItems={props.setItems}  handleCheck={props.handleCheck}/>
    }
    </div>
  )
}

export default Content
