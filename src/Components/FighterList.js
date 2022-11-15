import {useEffect, useState} from 'react'
import FighterCard from './FighterCard'
import Axios from 'axios'
import '../Styles/FighterList.css'



const FighterList = ({weightclass}) => {
    const [listOfFighters, setListOfFighters] = useState([])


    const updateOrder = () => {
      Axios.get("http://localhost:3001/getFighters").then((response)=>{
          setListOfFighters(response.data)})   
    }

   
    useEffect(() => {
        Axios.get("http://localhost:3001/getFighters").then((response)=>{
          setListOfFighters(response.data)
                })   
              }, [])
    
    useEffect(() => {
      console.log('use effect ran')
    })
  

    return (
        <div className="listOfFighters">
          {listOfFighters.sort((a,b)=> {return a.rank - b.rank}).filter(fighter =>fighter.rank <=10 && fighter.weightClass === weightclass).map((fighter,index)=>{ 
            return( <FighterCard key={fighter._id} fighter={fighter} updateOrder={updateOrder}/> 
            )})}
          </div>
    )
}


export default FighterList



