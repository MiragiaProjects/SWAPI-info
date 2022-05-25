import SwAPI from '../services/SwAPI'
import { useEffect, useState } from 'react'
import { Col, Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import { getIdFromUrl } from '../extract/index.js'
import { Link } from 'react-router-dom'
import  Loading  from '../components/Loading'


const FilmsPage = () => {
    const [films, setFilms] = useState()
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)

        // Get data from api
        //Get films from api when component is first mounted
        useEffect(() => {
        const getFilms = async () => {
                setLoading(true)
                const data = await SwAPI.getFilms(page)
                setLoading(false)
                setFilms(data)
            }
            getFilms()
        },[page])
    

    return (
        <>
            <div className='App container'>

                <h1>Star Wars Films</h1>
                {loading && (
                    <Loading />
                )}

                {films && !loading &&
                    <div>
                        {films.results.map((film)=>(

                        <Col className="md-4" key={film.episode_id}>

                            <ListGroup>
                                <ListGroupItem>
                                <h2>{film.title}</h2>
                                    <p>Episode: {film.episode_id}</p>
                                    <p>Released: {film.release_date}</p>
                                    <p>Characters: {film.characters.length}</p>
                                <div>
                                    <Button as={Link} to={`/films/${getIdFromUrl(film.url)}`} variant="info">Click for more info</Button>
                                </div>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>

                        ))}
                        <div className="d-flex justify-content-between align-items-center mt-4">
                            <Button disabled={page === 1}onClick={() => setPage(prevValue => prevValue - 1)} variant="info">Previous Page</Button>

                            <div className="page">{page}</div>

                            <Button onClick={() => setPage(prevValue => prevValue + 1)} disabled={!films.next} variant="info">Next Page</Button>

                        </div>
                    </div>   
                }
            </div>
        </>
        
        
        
    )
}

export default FilmsPage