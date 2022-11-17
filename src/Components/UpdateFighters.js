import {useState} from 'react' 
import Axios from 'axios'
import UpdateCard from './UpdateCard'
import '../Styles/UpdateCard.css'

 export default function UpdateFighters(){
    const [selectOption, setSelectOption] = useState("")
    const [allFighters, setAllFighters] = useState([])

    const handleChange = (e) => {
        setSelectOption(e.target.value)
        
      }

    const getFighter = () => {
      Axios.get(`http://localhost:3001/getFighters/${selectOption}`).then((response)=>{
        setAllFighters(response.data)
      })
    }




    return(
        <div>
        <div className="selectBar">
            <label name="weight-class">Select a divison to see all fighters and update</label>
          <select value={selectOption} onChange={handleChange}>
            <option>Select Weightclass</option>
            <option value="Flyweight">Flyweight</option>
            <option value="Bantamweight">Bantamweight</option>
            <option value="Featherweight">Featherweight</option>
            <option value="Lightweight">Lightweight</option>
            <option value="Welterweight">Welterweight</option>
            <option value="Middleweight">Middleweight</option>
            <option value="Light Heavyweight">Light Heavyweight</option>
            <option value="Heavyweight">Heavyweight</option>
          </select>
          <button onClick={getFighter}>Get Fighters</button>
        </div>
        <div className="updateContainer">
          {allFighters.sort((a,b)=> {return a.rank - b.rank}).map((fighter,index)=>{
            return( <UpdateCard fighter={fighter} key={fighter._id} getFighter={getFighter} />)
          })}
          
        </div>
        </div>
        
    )
 }