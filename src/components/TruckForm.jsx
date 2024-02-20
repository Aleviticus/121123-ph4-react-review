import { useState } from "react"

function TruckForm({setTrucks, trucks}) {

    const [name, setName] = useState("")
    const [location, setLocation] = useState("")

    function handleChangeName(e) {
        setName(e.target.value)
    }

    function handleChangeLocation(e) {
        setLocation(e.target.value)
    }

    const bodyobj = {name, location}

    function handleSubmit(e) {
        e.preventDefault()
        console.log("SUBMITING")

        fetch("http://localhost:5555/trucks", {
            method: "Post",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application.json"
            },
            body: JSON.stringify(bodyobj)
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("SOmehting went wrong")
            }
        })
        .then(data => {
            setTrucks([...trucks, data])
        })
        .catch(err => alert(err))
    // POST send the information
    // change the state in app
}

    return(

        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" onChange={handleChangeName} value={name}></input>

            <br/>

            <label>Location:</label>
            <input type="text" onChange={handleChangeLocation} value={location}></input>

            <br/>

            <input type="submit" value="Add Trucks"></input>
        </form>
    )
}

export default TruckForm