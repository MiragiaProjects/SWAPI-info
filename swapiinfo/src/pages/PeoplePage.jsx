import SwAPI from '../services/SwAPI'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card, Col } from 'react-bootstrap'
import { getIdFromUrl } from '../extract'


const PeoplePage = () => {
    const [people, setPeople] = useState()
    const { id } = useParams()

    const getPeople = async (id) => {
        const data = await SwAPI.getPeople(id)
        setPeople(data)
    }
    useEffect(() => {
        getPeople(id)
    },[id])

    return(
        <div>
            {people && (
                <Col md={8} className="mx-auto">
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