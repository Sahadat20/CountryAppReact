import React, { useEffect, useState } from 'react'

export default function Search(props) {
    const [searchText, setSearchText] = useState("")
    const handleChange = (e)=>{
        setSearchText(e.target.value)
        // alert(searchText)
    }
    useEffect(()=>{
        props.onSearch(searchText)
    },[searchText]);
  return (
    <div style={{textAlign:"center"}}>
        <input type='text' placeholder='Search' value={searchText}
        onChange={handleChange}
        ></input>
    </div>
  )
}
