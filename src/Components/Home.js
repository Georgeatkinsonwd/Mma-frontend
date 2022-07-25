import {useEffect, useState} from 'react'
import Axios from 'axios'
import FighterCard from './FighterCard'
import '../Styles/Home.css'


const Home = () => {
 const [listOfFighters, setListOfFighters] = useState([])
 const [selectOption, setSelectOption] = useState("Lightweight")

      
 useEffect(() => {
  Axios.get("http://localhost:3001/getFighters").then((response)=>{
    setListOfFighters(response.data)
    
          })   
        }, [])

  const handleChange = (e) => {
    setSelectOption(e.target.value)
    
  
  }



        return(
        <div>
          <div>
            <p>{`you have selected ${selectOption}`}</p>
          </div>
          <label name="weight-class">Choose Weightclass:</label>
          <select value={selectOption} onChange={handleChange}>
            <option value="Lightweight">Lightweight</option>
            <option value="Welterweight">Welterweight</option>
          </select>
          <div className="listOfFighters">
          {listOfFighters.filter(fighter => fighter.weightClass === selectOption).map((fighter,index)=>{ 
            return( <FighterCard key={index} fighter={fighter} /> 
            )})}
          </div>
      </div>
    )
  
    
}


export default Home


// 