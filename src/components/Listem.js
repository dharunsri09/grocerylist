import React from 'react'
import { MdDeleteForever } from "react-icons/md";
const Listem = (props) => {
  return (
    <div className='Listiem'>
          <input type='checkbox' checked={props.items.checked} onClick={()=>props.handleCheck(props.items.id)}/>
          <p style={(props.items.checked) ? { textDecoration: 'line-through' } : null}
                onClick={() => props.handleCheck(props.items.id)}>{props.items.name}</p>
          <MdDeleteForever onClick={()=>props.handleDel(props.items.id)}/>
    </div>
  )
}

export default Listem
