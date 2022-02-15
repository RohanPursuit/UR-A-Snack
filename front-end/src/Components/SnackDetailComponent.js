import axios from "axios"
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

function SnackDetail() {
  const URL = process.env.REACT_APP_API_URL
  const {id} = useParams()
  
  

    return (
      <div className="SnackDetail">
        Single Snack Detail card
      </div>
    );
}

export default SnackDetail