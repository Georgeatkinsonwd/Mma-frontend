import Axios from 'axios'
import { useState } from 'react'



const AddFighter = () => {
    const [listOfFighters, setListOfFighters] = useState([])
    const [name, setName] = useState("")
    const [record, setRecord] = useState("")
    const [age, setAge] = useState(0)
    const [height, setHeight] = useState("")
    const [weightClass, setWeightClass] = useState("")
    const [reach, setReach] = useState("")

    const createFighter = () => {
        Axios.post("http://localhost:3001/createFighter", {
          name,
          record,
          age,
          height,
          weightClass,
          reach,
          }).then((response)=>{
          setListOfFighters([...listOfFighters, {
            name,
            record,
            age,
            height,
            weightClass,
            reach,
          }
        ])
        alert('fighter added to database')
        })
    
      }

    return(
        <div>
            <h1>Add a fighter to Database</h1>
            <div>
          <input type="text" placeholder='name' onChange={(e)=> { setName(e.target.value)}}></input>
          <input type="text" placeholder='record' onChange={(e)=> { setRecord(e.target.value)}}></input>
          <input type="number" placeholder='age' onChange={(e)=> { setAge(e.target.value)}}></input>
          <input type="text" placeholder='height' onChange={(e)=> { setHeight(e.target.value)}}></input>
          <input type="text" placeholder='Weightclass' onChange={(e)=> { setWeightClass(e.target.value)}}></input>
          <input type="text" placeholder='reach'onChange={(e)=> { setReach(e.target.value)}}></input>
          <button onClick={createFighter}>Add Fighter</button>

        </div>
        </div>
    )
}


export default AddFighter