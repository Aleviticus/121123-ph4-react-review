function TruckCard({name, model,location,insurance}) {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Location: {location}</p>
            <p>Model: {model}</p>
            <p>Insurance {insurance}</p>
        </div>
    )
}

export default TruckCard