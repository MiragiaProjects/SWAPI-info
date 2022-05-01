import SwAPI from '../services/SwAPI'
import { useEffect, useState } from 'react'
import { Col, Button, Card } from 'react-bootstrap'
import { getIdFromUrl } from '../extract'
import { Link } from 'react-router-dom'


const PeoplesPage = () => {
    const [peoples, setPeoples] = useState()
    const [page, setPage] = useState(1)

    //Get films from api
    const getPeoples = async () => {
        const data = await SwAPI.getPeoples(page)
        setPeoples(data)


        //Get films from api when component is first mounted
        useEffect(() => {
            getPeoples()
        },[page])
    }

    return (
    
        <div className='App container'>
            <h1>Star Wars People</h1>

           {peoples && (
               <div>
               {peoples.results.map((people, index) => (
                   <Col md={4} className="mb-3" key={index}>
                       <Card>
                       <Card.Body>
                           <Card.Title>{people.name}</Card.Title>
                       </Card.Body>
                       <div>
                           <p>Gender:{people.gender}</p>
                           <p>Born:{people.birth_year}</p>
                           <p>Part of{people.film.length} films</p>
                       </div>
                       <Card.Body>
                           <Button as={Link} to={`/people/${getIdFromUrl(people.url)}`}> More Info</Button>
                       </Card.Body>
                       </Card>
                   </Col>
               ))}

               <div className='d-flex justify-content-between align-item-center mt-4'>
                   <Button disabled={page === 1} onClick={() => setPage(prevValue => prevValue - 1)} variant="primary">Next Page</Button>
                   <div className="page">{page}</div>
                   <Button onClick={() => setPage(prevValue => prevValue + 1)} disabled={!peoples.next} variant="primary">Next Page</Button>
               </div>
               </div>
               
           )}
                
        </div>
        
    )
}

export default PeoplesPage