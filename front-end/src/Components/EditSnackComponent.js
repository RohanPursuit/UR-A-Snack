import axios from "axios"
import {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import {useParams} from "react-router-dom"

function EditSnack() {
  const nav = useNavigate()
  const {id} = useParams()
  const URL = process.env.REACT_APP_API_URL
  const [snack, setSnack] = useState({
    name: "",
    image: "",
    fiber: 0,
    protein: 0,
    added_sugar: 0
  })

  const handleChange = (event) => {
    console.log(snack)
    setSnack({...snack, [event.target.id]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post(`${URL}/snacks`, snack)
    .then(()=>{
      nav("/snacks")
    })
  }

  useEffect(() => {
    axios.get(`${URL}/snacks/${id}`)
    .then(response => {
      setSnack(response.data.payload)
    })
    .catch(console.log)
  }, [URL, id])


    return (
      <div className="NewSnack">
        <h2>Snacks</h2>
        <form onSubmit={handleSubmit} action="">
          <label htmlFor="name">Name:</label>
          <input onChange={handleChange} id="name" type="text" value={snack.name} required/>
          <label htmlFor="image">Image:</label>
          <input id="image" type="text" />
          <label htmlFor="fiber">Fiber:</label>
          <input id="fiber" type="number" />
          <label htmlFor="protein">Protein:</label>
          <input id="protein" type="number" />
          <label htmlFor="added_sugar">Added Sugar:</label>
          <input id="added_sugar" type="number" />
          <input type="submit" />
        </form>
      </div>
    );
}

export default EditSnack