import '../Styles/FighterCard.css'
import HeightIcon from '@material-ui/icons/Height'
import StarIcon from '@material-ui/icons/EmojiEvents'
import TimelineIcon from '@material-ui/icons/Timeline'
import AgeIcon from '@material-ui/icons/AccessTime'



const FighterCard = ({fighter, updateOrder}) => {
    

    return(
        <div className="fighterDetails">
            <div className="picContainer">
            <img alt="fighterPic" src={fighter.imgSrc}></img>
            </div>
            <div className="detailsContainer">
            <div className="fighterNames">   
            <span className="fighterName">{fighter.name}</span>
            <div className="nickNash">
            <span className="nickname">{fighter.nickname}</span>
            <span>From:{fighter.nationality}</span>
            </div>
            </div> 
            <div className="recordRank">
            <span className="spanDetails"><StarIcon className="starRank"/>Rank {fighter.rank}</span>
            <span className="spanDetails"><TimelineIcon className="record"/>Record:{fighter.record} (W-L-D) </span>
            </div>
            <div className="ageHeight">
            <span className="spanDetails"><AgeIcon className="age" />Age: {fighter.age}</span>
            <span className="spanDetails"><HeightIcon className="height"/>Height: {fighter.height}</span>
            </div>
            </div>
            
            
        </div>
    )
}


export default FighterCard