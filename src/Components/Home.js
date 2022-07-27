import {useEffect, useState} from 'react'
import Axios from 'axios'
import FighterCard from './FighterCard'
import '../Styles/Home.css'


const Home = () => {
 const [listOfFighters, setListOfFighters] = useState([])
 const [selectOption, setSelectOption] = useState("")

      
 useEffect(() => {
  Axios.get("http://localhost:3001/getFighters").then((response)=>{
    setListOfFighters(response.data)
    
          })   
        }, [])

  const handleChange = (e) => {
    setSelectOption(e.target.value)
    
  }

  const sortOrder = () => {
    let newOrder = listOfFighters.sort((a,b)=>{
      return b.rank - a.rank
    })
    return newOrder
  }



        return(
        <div className="intro">
          <label name="weight-class">Select a Weightclass to see top 10 in that divison</label>
          <select value={selectOption} onChange={handleChange}>
            <option>Select Weightclass</option>
            <option value="Featherweight">Featherweight</option>
            <option value="Lightweight">Lightweight</option>
            <option value="Welterweight">Welterweight</option>
            
          </select>
          <div className="listOfFighters">
          {sortOrder().filter(fighter => fighter.weightClass === selectOption).map((fighter,index)=>{ 
            return( <FighterCard key={index} fighter={fighter} /> 
            )})}
          </div>
      </div>
    )
  
    
}


export default Home


// 