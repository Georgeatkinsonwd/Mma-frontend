import './App.css';
import { useState, useEffect } from 'react'
import Axios from 'axios'

function App() {
  const [listOfFighters, setListOfFighters] = useState([])
  const [name, setName] = useState("")
  const [record, setRecord] = useState("")
  const [age, setAge] = useState(0)
  const [height, setHeight] = useState("")
  const [weightClass, setWeightClass] = useState("")
  const [reach, setReach] = useState("")

  useEffect(() => {
    Axios.get("http://localhost:3001/getFighters").then((response)=>{
      setListOfFighters(response.data)
    })
  }, [])

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
    })

  }


  return (
    <div className="App">
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
    </div>
  );
}

export default App;
