import {useEffect, useState} from 'react'
import Axios from 'axios'

const Home = () => {
 const [listOfFighters, setListOfFighters] = useState([])
        
      
 useEffect(() => {
  Axios.get("http://localhost:3001/getFighters").then((response)=>{
       setListOfFighters(response.data)
          })
        }, [])


    return(
        <div className="fighterList">
        {listOfFighters.map((fighter) =>{
          return (
            <div className="fighterDetails">
              <h1>Name: {fighter.name}</h1>
              <h1>Record: {fighter.record}</h1>
              <h1>Age: {fighter.age}</h1>
              <h1>Height: {fighter.height}</h1>
              <h1>Weightclass: {fighter.weightClass}</h1>
              <h1>Reach: {fighter.reach}</h1>
            </div>
          )
        })}
      
      </div>
    )
  
    
}


export default Home