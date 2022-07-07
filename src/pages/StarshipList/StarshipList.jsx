import { useEffect, useState } from "react";
import { getStarshipList } from "../../services/api-calls";
import { Link } from "react-router-dom";

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getStarshipList()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  return(
    <>
      <h1>STAR WARS STARSHIPS</h1>
      {starshipList.length ? 
      <div className="starship-container">
        {starshipList.map(starship => 
          <div className="starship-card" key={starship.index}>
              <Link
                className="starship-link"
                to="/starship"
                state={{ starship }}
                key={starship.name}
                >
                {starship.name}
              </Link>
          </div>
        )}
      </div>
      :
      <>
        <h1>Loading starships...</h1>
      </>
      }
      
    </>
  )
}

export default StarshipList

