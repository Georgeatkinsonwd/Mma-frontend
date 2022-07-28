import '../Styles/FighterCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons'
import {useState, useEffect} from 'react'
// import { Axios } from 'axios'



const FighterCard = ({fighter}) => {
    const [changeRank, setChangeRank] = useState(fighter.rank)
    

    const increaseRank = () => {
        if (changeRank >=2){
        setChangeRank(changeRank - 1)}
    }

    
    const decreaseRank = () => {
        if(changeRank <10)
        setChangeRank(changeRank + 1)
    }
    return(
        <div className="fighterDetails">
            <div className="picContainer">
            <img alt="fighterPic" src={fighter.imgSrc}></img>
            </div>
            <div className="detailsContainer">
            <div className="fighterNames">   
            <span className="fighterName">{fighter.name}</span>
            <div className="nickNash">
            <span>{fighter.nickname}</span>
            <span>From:{fighter.nationality}</span>
            </div>
            </div> 
            <div className="recordRank">
            <span>Rank#:{changeRank}</span>
            <span>Record:{fighter.record}</span>
            </div>
            <div className="ageHeight">
            <span>Age:{fighter.age}</span>
            <span>Height:{fighter.height}</span>
            </div>
            <div className="changeRank">
                <button className="btnUp" onClick={increaseRank}><FontAwesomeIcon className="arrowUp" icon={faArrowUp}/></button>
                <button className="btnDown" onClick={decreaseRank} ><FontAwesomeIcon className="arrowDown" icon={faArrowDown}/></button>
            </div>
            </div>
            
            
        </div>
    )
}


export default FighterCard