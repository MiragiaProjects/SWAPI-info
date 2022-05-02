import SwAPI from '../services/SwAPI'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card, Col } from 'react-bootstrap'
import { getIdFromUrl } from '../extract/index.js'
import Loading from '../components/Loading'


const PeoplePage = () => {
    const [people, setPeople] = useState()
    const { id } = useParams()
    const [loading, setLoading] = useState(false)

    const getPeople = async (id) => {
        setLoading(true)
        const data = await SwAPI.getPeople(id)
        setLoading(false)
        setPeople(data)
    }
    useEffect(() => {
        getPeople(id)
    },[id])

    return(
        <div>

            <h1>A Person</h1>

            {loading && (
                <Loading />
            )}

            {people && !loading &&(

                <Col className="mx-auto">

                    <Card>
                        <Card.Header>{people.name}</Card.Header>
                        <Card.Body>
                            <Card.Title>Information</Card.Title>
                            <p>Birth Year {people.birth_year}</p>
                            <p>Birth Year {people.height}</p>
                            <p>Birth Year {people.mass}</p>
                            <p>Birth Year {people.hair_color}</p>
                            <p>Birth Year {people.skin_color}</p>
                            <p>Birth Year {people.eye_color}</p>
                        </Card.Body>

                        <div className="films">

                            {people.films.map((film, index) =>

                            <p as={Link} to={`/films/${getIdFromUrl(film)}`} key={index}>Film { getIdFromUrl(film)}</p>

                            )}
                        </div>
                    </Card>
                </Col>
            )}
        </div>

    )
}

export default PeoplePage