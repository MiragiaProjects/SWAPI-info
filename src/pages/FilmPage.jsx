import SwAPI from '../services/SwAPI'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getIdFromUrl } from '../extract/index.js'
import { Col, ListGroup, } from 'react-bootstrap'
import Loading from '../components/Loading'


const FilmPage = () => {
    const [film, setFilm] = useState()
    const [loading, setLoading] = useState()
    const { id } = useParams()

    const getFilm = async (id) => {
        setLoading(true)
        const data = await SwAPI.getFilm(id)
        setLoading(false)
        setFilm(data)
    }
    useEffect(() => {
        getFilm(id)
    },[id])

    return(

        <div>
            {loading && !loading && (
                <Loading />
            )}

           {film && (

               <Col className="mx-auto">

                   <ListGroup>
                       <p>Episode:{film.episode_id}</p>
                       <p>Released:{film.release_date}</p>
                       <p>Director:{film.director}</p>
                       <p>Producer:{film.producer}</p>
                   </ListGroup>

                   <div className='charList'>
                       {film.characters.map((character, index) => 
                        <div className="text-center">
                       <Link to={`/people/${getIdFromUrl(character)}`} key={index}>Character{ getIdFromUrl(character)}</Link>
                       </div>
                       )}
                   </div>

               </Col>
           )}

        </div>

    )
}

export default FilmPage

