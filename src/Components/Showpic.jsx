import React, { useEffect, useState } from 'react'
import "./show.css"
const Showpic = () => {
    const [data, setdata] = useState("random")
    const [result, setresult] = useState([])
    useEffect(() => {
     searchdata()
    }, [])
    
    const searchdata = async()=>{
    const res = await fetch(`https://api.unsplash.com/search/photos?query=${data}&client_id=4LN9HknArvGYL04FCpmcRkiDgg6AuR5DYrIMvC3vG1w`)
    const prom = await res.json();
    setresult(prom.results)
    console.log(result);
}
  return (
    <>
    <div className='maincontainer'>
        <div className='rightside'>GeekGallery</div>
        <div className='leftside'>
            <input type="text" onChange={(e)=>setdata(e.target.value)} placeholder='search'/>
            <button onClick={searchdata}>Search</button>
        </div>
    </div>
    <div className='showres'>
        {result.map((ele)=>{
            return <div className='cards'>
                <p>{ele.updated_at}</p>
                <p style={{marginTop:"3rem",position:"absolute"}}>{ele.alt_description}</p>
                <img src={ele.urls.small}></img>
            </div>
        })}
    </div>
    </>
  )
}

export default Showpic