import axios from "axios"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

function SnackDetail() {
  const URL = process.env.REACT_APP_API_URL
  const {id} = useParams()
  
  const [snack, setSnack] = useState({})

  useEffect(() => {
    axios.get(`${URL}/snacks/${id}`)
    .then(response => {
      setSnack(response.data)
    })
    .catch(console.log)
  })

    return (
      <div className="SnackDetail">
        Single Snack Detail card
      </div>
    );
}

export default SnackDetail