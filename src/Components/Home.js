import {useEffect, useState} from 'react'
import Axios from 'axios'
import FighterCard from './FighterCard'


const Home = () => {
 const [listOfFighters, setListOfFighters] = useState([])
        
      
 useEffect(() => {
  Axios.get("http://localhost:3001/getFighters").then((response)=>{
    setListOfFighters(response.data)
          })
          
        }, [])


        return(
        <div className="fighterList">
         {listOfFighters.map((fighter,index)=>{
            return(
            <FighterCard key={index} fighter={fighter} />
            )
         })}
      
      </div>
    )
  
    
}


export default Home