import { useState, useEffect } from "react";
import { getDetails } from "../../services/api-calls";
import { Link, useLocation } from "react-router-dom";
import StarshipList from "../StarshipList/StarshipList";

const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [location.state.starship.url])

  return(
    <>
      <h1>Starship Details</h1>
      {starshipDetails.name ? 
      <div className="starship-display">
        <h2>Name: {starshipDetails.name}</h2>
        <h2>Model: {starshipDetails.model}</h2>
        <Link className="return-link" to="/">
          Return
          </Link>
      </div>
      :
      <>
        <h1>Loading starship details...</h1>
      </>
    }
    </>
  )
}

export default StarshipDetails