
const FighterCard = ({fighter}) => {
    return(
        <div className="fighterDetails">
            <h1>Name:{fighter.name}</h1>
            <h1>Record:{fighter.record}</h1>
            <h1>Age:{fighter.age}</h1>
            <h1>Height:{fighter.height}</h1>
            <h1>Reach:{fighter.reach}</h1>
        </div>
    )
}


export default FighterCard