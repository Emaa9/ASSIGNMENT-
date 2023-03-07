import data from "./listofbooks.json";
import {useEffect, useState} from "react"
import "./style.css"

function App() {

  const [searchValue, setSearchValue]= useState([]);

  const strAscending= [...data].sort((a,b)=>
  a.author > b.author ? 1: -1
)

const handleSearch = (e) => {
      e.preventDefault()
      const lowerCase= e.target.search.value.toLowerCase()
      const result= strAscending.filter(data=>(data.title.toLocaleLowerCase().includes(lowerCase)) || (data.author.toLocaleLowerCase().includes(lowerCase)) || (data.genre.toLocaleLowerCase().includes(lowerCase)) )
       setSearchValue(result)
}

const handleChange = (e) =>{
  if(e.target.value.length === 0){
    setSearchValue(strAscending)
  }
}

useEffect(()=>{
   
  setSearchValue(strAscending)

}, [])


  return (
    <div className="App">
       <form className="submit" onSubmit={(e)=> handleSearch(e)}>
          <input className='input' onChange={(e)=>handleChange(e)} name='search' placeholder='Type to search'/>
          <button className='button'>Search</button>
       </form>

      <div className="all">
        {searchValue.map((val, i)=>
        <div className="content" key={i}>
           <h1 className='author'>{val.author}</h1>
           <h2 className='title'>{val.title}</h2>
           <p className='genre'>{val.genre}</p>
        </div>
        )}
       </div>
       </div>


  );
}

export default App;
