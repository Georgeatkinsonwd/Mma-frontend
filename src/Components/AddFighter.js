import Axios from 'axios'
import { useState } from 'react'



const AddFighter = () => {
    const [name, setName] = useState("")
    const [record, setRecord] = useState("")
    const [age, setAge] = useState(0)
    const [height, setHeight] = useState("")
    const [weightClass, setWeightClass] = useState("")
    const [reach, setReach] = useState("")

    const createFighter = async () => {
        Axios.post("http://localhost:3001/createFighter", {
          name,
          record,
          age,
          height,
          weightClass,
          reach,
          }).then((response)=>{
            
        alert('fighter added to database')
            setName("")
            setRecord("")
            setAge("0")
            setHeight("")
            setWeightClass("")
            setReach("")
        
        })
        
        
      }
        
    return(
        <div>
            <h1>Add a fighter to Database</h1>
            <div>
        <form>
          <input value={name} type="text" placeholder='name' onChange={(e)=> { setName(e.target.value)}}></input>
          <input value={record} type="text" placeholder='record' onChange={(e)=> { setRecord(e.target.value)}}></input>
          <input value={age} type="number" placeholder='age' onChange={(e)=> { setAge(e.target.value)}}></input>
          <input value={height} type="text" placeholder='height' onChange={(e)=> { setHeight(e.target.value)}}></input>
          <input value={weightClass} type="text" placeholder='Weightclass' onChange={(e)=> { setWeightClass(e.target.value)}}></input>
          <input value={reach} type="text" placeholder='reach'onChange={(e)=> { setReach(e.target.value)}}></input>
          <button type="submit" onClick={createFighter}>Add Fighter</button>
          </form>

        </div>
        </div>
    )
}


export default AddFighter