import axios from "axios"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import HeartHealth from "./HeartHealth"

function SnackDetail() {
  const URL = process.env.REACT_APP_API_URL
  const {id} = useParams()
  
  const [snack, setSnack] = useState({})

  useEffect(() => {
    axios.get(`${URL}/snacks/${id}`)
    .then(response => {
      console.log(response.data)
      setSnack(response.data)
    })
    .catch(console.log)
  }, [URL])

    return (
      <div className="SnackDetail">
        <img src={snack.image} alt="" />
        <div>{snack.name}</div>
        {<HeartHealth snackHealth={snack.is_healthy}/>}
        <div>{snack.protein}</div>
        <div>{snack.added_sugar}</div>
        <div>{snack.fiber}</div>
      </div>
    );
}

export default SnackDetail