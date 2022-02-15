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
            <Link to={/snacks/ + snack.id} key={snack.id} className="snack-card">
              <img src={snack.image} alt="" />
              <p>
                <h4>{<HeartHealth snackHealth={snack.is_healthy}/>}</h4>
                <h4>{snack.name}</h4>
              </p>
            </Link>
          )
        })}
      </div>
    );
}

export default AllSnacks