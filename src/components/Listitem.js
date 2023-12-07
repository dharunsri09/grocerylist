import React from 'react'
import { MdDeleteForever } from "react-icons/md";
import Listem from './Listem';
const Listitem = (props) => {
  return (
    <div className='Listitems'>
      {props.items.map((item,index)=>(
        <Listem key={item.id}  items={item} handleDel={props.handleDel} handleCheck={props.handleCheck}/>
))}
    </div>
  )
}

export default Listitem
