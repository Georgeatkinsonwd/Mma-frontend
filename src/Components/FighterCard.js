import '../Styles/FighterCard.css'



const FighterCard = ({fighter}) => {
    return(
        <div className="fighterDetails">
            <div className="picContainer">
            <img alt="fighterPic" src={fighter.imgSrc}></img>
            </div>
            <div className="detailsContainer">
            <h1>Name:{fighter.name}</h1>
            <h1>Nickname:{fighter.nickname}</h1>
            <h1>Rank#:{fighter.rank}</h1>
            <h1>From:{fighter.nationality}</h1>
            <h1>Record:{fighter.record}</h1>
            <h1>Age:{fighter.age}</h1>
            <h1>Height:{fighter.height}</h1>
            </div>
            
            
        </div>
    )
}


export default FighterCard