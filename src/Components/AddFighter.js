import Axios from 'axios'
import { useState } from 'react'



const AddFighter = () => {
    const [name, setName] = useState("")
    const [nickname, setNickname] = useState("")
    const [nationality, setNationality] = useState("")
    const [rank, setRank] = useState("")
    const [record, setRecord] = useState("")
    const [age, setAge] = useState("")
    const [height, setHeight] = useState("")
    const [weightClass, setWeightClass] = useState("")
    const [imgSrc, setImgSrc] = useState("")

    const createFighter = async () => {
        Axios.post("http://localhost:3001/createFighter", {
          name,
          nickname,
          nationality,
          rank,
          record,
          age,
          height,
          weightClass,
          imgSrc,
          }).then((response)=>{
            
        alert('fighter added to database')
            setName("")
            setNickname("")
            setNationality("")
            setRank("")
            setRecord("")
            setAge("0")
            setHeight("")
            setWeightClass("")
            setImgSrc("")
        })
        
        
      }
        
    return(
        <div>
            <h1>Add a fighter to Database</h1>
            <div>
        <form className="fighterForm">
          <input value={name} type="text" placeholder='name' onChange={(e)=> { setName(e.target.value)}}></input>
          <input value={nickname} type="text" placeholder='nickname' onChange={(e)=> {setNickname(e.target.value)}}></input>
          <input value={nationality} type="text" placeholder="born" onChange={(e) => setNationality(e.target.value)}></input>
          <input value={rank} type="number" placeholder='rank' onChange={(e) => {setRank(e.target.value)}}></input>
          <input value={record} type="text" placeholder='record (W-L-D)' onChange={(e)=> { setRecord(e.target.value)}}></input>
          <input value={age} type="number" placeholder='age' onChange={(e)=> { setAge(e.target.value)}}></input>
          <input value={height} type="text" placeholder="height in ft/in" onChange={(e)=> { setHeight(e.target.value)}}></input>
          <input value={weightClass} type="text" placeholder='Weightclass' onChange={(e)=> { setWeightClass(e.target.value)}}></input>
          <input value={imgSrc} type="text" placeholder="image source" onChange={(e)=> {setImgSrc(e.target.value)}}></input>
          <button type="submit" onClick={createFighter}>Add Fighter</button>
          </form>

        </div>
        </div>
    )
}


export default AddFighter