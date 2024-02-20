import TruckCard from "./TruckCard"

function TruckContainer({ trucks }) {

    const mappedTrucks = trucks.map(truck => 
    <TruckCard 
        key={truck.id}
        name={truck.name}
        model={truck.model}
        location={truck.location}
        insurance={truck.insurance}
    />)

    return (
        <>
            {mappedTrucks}
        </>
    )
}

export default TruckContainer