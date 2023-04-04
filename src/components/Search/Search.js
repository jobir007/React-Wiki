import React from 'react'
import style from './Search.module.scss'
function Search({setSearch, setPageNumber}) {
  return (
    <form className='d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5 '>
        <input 
        onChange={(e)=>{
            setPageNumber(1);
            setSearch(e.target.value);
        }}
        placeholder='Search for the Characters' type='text' className={style.input}/>
      <botton
       onClick={e=>{e.preventDefault();
       }}
        className={`${style.btn} btn btn-primary fs-5`}
        >
            Search
        </botton>
    </form>
  )
}

export default Search