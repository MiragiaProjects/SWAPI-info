import SwAPI from '../services/SwAPI'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card, Col } from 'react-bootstrap'
import { getIdFromUrl } from '../extract/index.js'



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

            <h1>A Person</h1>

        

            {people &&(

                <Col className="mx-auto">

                    <Card>
                        <Card.Header>{people.name}</Card.Header>
                        <Card.Body>
                            <Card.Title>Information</Card.Title>
                            <p>Birth Year {people.birth_year}</p>
                            <p>Height {people.height}</p>
                            <p>Mass {people.mass}</p>
                            <p>Hair {people.hair_color}</p>
                            <p>Skin color {people.skin_color}</p>
                            <p>Eye color {people.eye_color}</p>
                        </Card.Body>

                        <div className="films">

                            {people.films.map((film, index) =>

                            <div className="text-center">

                            <Link to={`/films/${getIdFromUrl(film)}`} key={index}>Film { getIdFromUrl(film)}</Link>
                            
                            </div>
                            )}
                        </div>
                    </Card>
                </Col>
            )}
        </div>

    )
}

export default PeoplePage