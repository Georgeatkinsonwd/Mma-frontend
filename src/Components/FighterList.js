import {useEffect, useState} from 'react'
import FighterCard from './FighterCard'
import Axios from 'axios'
import '../Styles/FighterList.css'
import Loading from './Loading'



const FighterList = ({weightclass}) => {
    const [listOfFighters, setListOfFighters] = useState([])
    const [isLoading, setIsLoading] = useState(false)
  
   

    const updateOrder = () => {
      Axios.get(`http://localhost:3001/getFighters/${weightclass}`).then((response)=>{
          setListOfFighters(response.data)})   
    }


    const getTop10 = () =>{
      setIsLoading(true)
      Axios.get(`http://localhost:3001/getFighters/${weightclass}`).then((response)=>{
          setListOfFighters(response.data)
          setIsLoading(false)
                })
                
    } 
  
    
    useEffect(() => {
      console.log('use effect ran')
    })
  

    return (
        <div>
          <div className="btnCont">
            {isLoading ? <Loading />: <button className="top10Btn" onClick={getTop10} disabled={isLoading}>Get Top 10</button>}
          </div>
          
        <div className="listOfFighters">
          {listOfFighters.sort((a,b)=> {return a.rank - b.rank}).filter(fighter =>fighter.rank <=10).map((fighter,index)=>{ 
            return( <FighterCard key={fighter._id} fighter={fighter} updateOrder={updateOrder}/> 
            )})}
          </div>
          </div>
    )
}


export default FighterList



