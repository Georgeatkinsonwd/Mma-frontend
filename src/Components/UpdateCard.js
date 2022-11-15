import '../Styles/UpdateCard.css'
import {useState} from 'react'
import axios from 'axios'

export default function UpdateCard({fighter, getFighter}){

    const [age, setAge] = useState(fighter.age)
    const [record, setRecord] = useState(fighter.record)
    const [rank, setRank] = useState(fighter.rank)
    

    const increaseRank = () => {
        const id = fighter._id
        if(rank >1){
        axios.put(`http://localhost:3001/changeRank/${id}`, {
            rank: rank - 1
        }).then((response)=>{
            setRank(response.data.rank)
            getFighter()
        })
    }
    }

    const decreaseRank = () => {
        const id = fighter._id
        axios.put(`http://localhost:3001/changeRank/${id}`,{
            rank: rank + 1
        }).then((response)=>{
            setRank(response.data.rank)
            getFighter()
        })
    }

    const increaseAge = () => {
        const id = fighter._id
        axios.put(`http://localhost:3001/changeAge/${id}`,{
            age: age + 1
        }).then((response)=>{
            setAge(response.data.age)
        })
    }

    const decreaseAge = () => {
        const id = fighter._id
        axios.put(`http://localhost:3001/changeAge/${id}`,{
            age: age - 1
        }).then((response)=>{
            setAge(response.data.age)
        })
    }

    const deleteFighter = () => {
        const id = fighter._id
        axios.delete(`http://localhost:3001/deleteFighter/${id}`).then((response)=>{
            console.log(response)
            getFighter()
        })
    }

    const updateRecord = () => {
        const id = fighter._id
        axios.put(`http://localhost:3001/updateRecord/${id}`,{
        record: record
        }).then((response)=>{
            setRecord(response.data.record)
            alert('Record updated')
        })
    }

    return(
        <div className = "updateCard">
            <h3>{fighter.name}</h3>
            <p>Age:{age} <button onClick={increaseAge}>+</button> <button onClick={decreaseAge}>-</button></p> 
            <p>Record:{record} <input onChange={(event)=>setRecord(event.target.value)} class="recordInput"></input><button onClick={updateRecord}>Update</button></p> 
            <p>Rank:{rank} <button onClick={increaseRank}>+</button> <button onClick={decreaseRank}>-</button></p> 
            <button class="deleteBtn" onClick={deleteFighter}>Delete</button>
            
        </div>
    
    )
}