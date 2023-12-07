import React, { useRef } from 'react'

const AddItems = ({newitem,handleSubmit,handlenewItem}) => {
  const connectFocus=useRef();
  return (
    <div className='additems'>
    <form onSubmit={handleSubmit}>
      <input autoFocus placeholder="Add items" ref={connectFocus} type='text' value={newitem} onChange={handlenewItem}/>
      <button onClick={()=> connectFocus.current.focus()} type='submit'>+</button>
    </form>
    </div>
  )
}

export default AddItems
