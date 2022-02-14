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
      setSnack(response.data)
    })
    .catch(console.log)
  }, [URL])
    return (
      <div className="AllSnacks">
        {snacks.map(el => {
          return(
            <Link to={/snacks/ + el.id} key={el.id} className="snack-card">
              <img src={el.image} alt="" />
              <p>
                {<HeartHealth snackHealth={el.is_healthy}/>}
                <div>{el.name}</div>
              </p>
            </Link>
          )
        })}
      </div>
    );
}

export default AllSnacks