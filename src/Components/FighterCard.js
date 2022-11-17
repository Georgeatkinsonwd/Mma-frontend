import '../Styles/FighterCard.css'



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
            <span>{fighter.nickname}</span>
            <span>From:{fighter.nationality}</span>
            </div>
            </div> 
            <div className="recordRank">
            <span className="spanDetails">Rank#: {fighter.rank}</span>
            <span className="spanDetails">Record(W-L-D): {fighter.record}</span>
            </div>
            <div className="ageHeight">
            <span className="spanDetails">Age: {fighter.age}</span>
            <span className="spanDetails">Height: {fighter.height}</span>
            </div>
            </div>
            
            
        </div>
    )
}


export default FighterCard