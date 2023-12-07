import React from 'react'

const Search = ({search,setSearch}) => {
    const HandleSearch=(event)=>{
        setSearch(event.target.value)
    }
  return (
    <div className='searchitem'>
        <form action="" onSubmit={(event)=>{event.preventDefault();setSearch("")}}>
      <input placeholder='Search' value={search} onChange={HandleSearch} />
      </form>
    </div>
  )
}

export default Search
