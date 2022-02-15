import axios from "axios"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import { Link } from "react-router-dom"
import HeartHealth from "./HeartHealth"
import {useNavigate} from "react-router-dom"

function SnackDetail() {
  const URL = process.env.REACT_APP_API_URL
  const nav = useNavigate()
  const {id} = useParams()
  
  const [snack, setSnack] = useState({})

  const handleDelete = (event) => {
    axios.delete(`${URL}/snacks/${event.target.id}`)
    .then(()=> {
      nav(`/snacks`)
    }, [URL])
  }

  useEffect(() => {
    axios.get(`${URL}/snacks/${id}`)
    .then(response => {
      setSnack(response.data.payload)
    })
    .catch(console.log)
  }, [URL])

    return (
      <>
      <h1>Snacks</h1>
      <div className="SnackDetail">
        <article href="/snacks">
          <div>
            <img src={snack.image} alt={snack.name} />
          </div>   
        <div>{snack.name}</div>
        <aside>{<HeartHealth snackHealth={snack.is_healthy}/>}</aside>
        <div>Protein: {snack.protein}</div>
        <div>Added Sugar: {snack.added_sugar}</div>
        <div>Fiber: {snack.fiber}</div>
        <button onClick={() => nav("/snacks")}>
          Back
        </button>
        <Link to={"/snacks/edit/" + snack.id}>
          EDIT
        </Link>
        <button id={snack.id} onClick={handleDelete}>Delete</button>
        </article>
      </div>
      </>
    );
}

export default SnackDetail