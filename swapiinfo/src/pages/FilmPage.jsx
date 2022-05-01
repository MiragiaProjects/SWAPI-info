import SwAPI from '../services/SwAPI'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getIdFromUrl } from '../extract'
import { Col, Card, } from 'react-bootstrap'


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

           {film && (

               <Col md={4} className="mx-auto">

                   <Card.Body>
                       <p>Episode:{film.episode_id}</p>
                       <p>Released:{film.release_date}</p>
                       <p>Director:{film.director}</p>
                       <p>Producer:{film.producer}</p>
                   </Card.Body>

                   <div className='charList'>
                       {film.characters.map((character, index) => 
                       <p as={Link} to={`/people/${getIdFromUrl(character)}`} key={index}>Character{ getIdFromUrl(character)}</p>
                       )}
                   </div>

               </Col>
           )}

        </div>

    )
}

export default FilmPage

