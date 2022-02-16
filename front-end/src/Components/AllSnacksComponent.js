import axios from "axios"
import {useState, useEffect} from "react"
import HeartHealth from "./HeartHealth"
import {Link} from "react-router-dom"

function AllSnacks() {
  const URL = process.env.REACT_APP_API_URL
  const [snacks, setSnack] = useState([])


  useEffect(()=> {
    axios.get(`${URL}/snacks`)
    .then(response => {
      setSnack(response.data.payload)
    })
    .catch(console.log)
  }, [URL])
    return (
      <div className="AllSnacks">
        {snacks.map(snack => {
          return(
            <div className="Snack" key={snack.id}>
              <Link to={/snacks/ + snack.id} className="snack-card">
                <img src={snack.image} alt={snack.name}/>
                  <h4>{<HeartHealth snackHealth={snack.is_healthy}/>}</h4>
                  <h4 className="snack-name">{snack.name}</h4>
              </Link>
            </div>
          )
        })}
      </div>
    );
}

export default AllSnacks