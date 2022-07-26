import '../Styles/FighterCard.css'



const FighterCard = ({fighter}) => {
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
            <span>Rank#:{fighter.rank}</span>
            <span>Record:{fighter.record}</span>
            </div>
            <div className="ageHeight">
            <span>Age:{fighter.age}</span>
            <span>Height:{fighter.height}</span>
            </div>
            </div>
            
            
        </div>
    )
}


export default FighterCard