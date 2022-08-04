import {useEffect, useState} from 'react'
import FighterCard from './FighterCard'
import Axios from 'axios'
import '../Styles/FighterList.css'


const FighterList = ({weightclass}) => {
    const [listOfFighters, setListOfFighters] = useState([])
    console.log(weightclass)


    useEffect(() => {
        Axios.get("http://localhost:3001/getFighters").then((response)=>{
          setListOfFighters(response.data)
                })   
              }, [])

    return (
        <div className="listOfFighters">
          {listOfFighters.sort((a,b)=>{return a.rank - b.rank}).filter(fighter => fighter.weightClass === weightclass).map((fighter,index)=>{ 
            return( <FighterCard key={index} ranking={fighter.rank} fighter={fighter} /> 
            )})}
          </div>
    )
}


export default FighterList



