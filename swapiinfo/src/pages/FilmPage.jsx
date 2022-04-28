import SwAPI from '../services/SwAPI'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


const FilmPage = () => {
    const [film, setFilm] = useState()
    const { id } = useParams()

    const getFilm = async (id) => {
        const data = await SwAPI.getFilm(id)
        setFilm(data)
    }
    useEffect(() => {
        getFilm(id)
    },[id])

    return(
        <div>
            <h1>{film.title}</h1>
        </div>

    )
}

export default FilmPage

