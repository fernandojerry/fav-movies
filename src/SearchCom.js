import React from 'react'
import "./Nav.css"
import SearchIcon from '@mui/icons-material/Search';

function SearchCom(props) {
  return (
    <div className="search_bar">
            <SearchIcon className='search-icon' />
            <input
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}/>
        </div>
  )
}

export default SearchCom
