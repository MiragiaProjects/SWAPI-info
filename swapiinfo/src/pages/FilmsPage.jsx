import SwAPI from '../services/SwAPI'
import { useEffect, useState } from 'react'
import {Col, Card, Button} from 'react-bootstrap'
import { getIdFromUrl } from '../extract'
import { Link } from 'react-router-dom'


const FilmsPage = () => {
    const [films, setFilms] = useState([])
    const [page, setPage] = useState(1)

    //Get films from api
    const getFilms = async () => {
        const data = await SwAPI.getFilms(page)
        setFilms(data)


        //Get films from api when component is first mounted
        useEffect(() => {
            getFilms()
        },[page])
    }

    return (
        <>
        <div className='App container'>
            <h1>Star Wars Films</h1>

            <div className='App container'>
            <h1>Star Wars Films</h1>
            {films.result.map((film)=>(
                <Col md={3} className="md-4" key={film.episode_id}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{film.title}</Card.Title>
                        </Card.Body>
                        <div>
                            <p>Episode: {film.episode_id}</p>
                            <p>Released: {film.release_date}</p>
                            <p>Producer: {film.producer}</p>
                            <p>Director: {film.director}</p>
                            <p>Episode: {film.characters.length}</p>
                        </div>
                        <Card.Body>
                            <Button as={Link} to={`/films/${getIdFromUrl(film.url)}`}>
                                Click for more info
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>

            ))}
            <div className="d-flex justify-content-between align-items-center mt-4">
                <Button
                    disabled={page === 1}
                    onClick={() => setPage(prevValue => prevValue - 1)}
                    variant="primary">Previous Page</Button>

                    <div className="page">{page}</div>

                <Button onClick={() => setPage(prevValue => prevValue + 1)}
                disabled={!films.next}
                variant="primary">Next Page</Button>

            </div>
            </div>

    

        </div>
        </>
    )
}

export default FilmsPage