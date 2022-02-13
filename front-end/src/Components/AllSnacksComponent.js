import axios from "axios"
import {useState, useEffect} from "react"
import HeartHealth from "./HeartHealth"

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
            <div key={el.id} className="snack-card">
              <img src={el.image} alt="" />
              <p>
                {<HeartHealth snackHealth={el.is_healthy}/>}
                {el.name}
              </p>
            </div>
          )
        })}
      </div>
    );
}

export default AllSnacks