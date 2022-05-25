import SwAPI from '../services/SwAPI'
import { useEffect, useState } from 'react'
import { Col, Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import { getIdFromUrl } from '../extract/index.js'
import { Link } from 'react-router-dom'



const PeoplesPage = () => {
    const [peoples, setPeoples] = useState()
    const [page, setPage] = useState(1)



    useEffect(() => {
        const getPeoples = async () => {
            const data = await SwAPI.getPeoples(page)
            setPeoples(data)
        }  
            getPeoples()
        },[page])
    

    return (
        <>
        <div className='App container'>
            <h1>Star Wars People</h1>


           {peoples && (

               <div>

               {peoples.results.map((people, index) => (

                   <Col className="mb-3" key={index}>

                       <ListGroup>
                        <ListGroupItem>
                           <h2>{people.name}</h2>
                           <p>Gender:{people.gender}</p>
                           <p>Born:{people.birth_year}</p>
                           <p>Part of{people.films.length} films</p>
                           <Button as={Link} to={`/people/${getIdFromUrl(people.url)}`} variant="info"> More Info</Button>
                       </ListGroupItem>
                       </ListGroup>
                   </Col>
               ))}

               <div className='d-flex justify-content-between align-item-center mt-4'>
                   <Button disabled={page === 1} onClick={() => setPage(prevValue => prevValue - 1)} variant="info">Prev Page</Button>
                   <div className="page">{page}</div>
                   <Button onClick={() => setPage(prevValue => prevValue + 1)} disabled={!peoples.next} variant="info">Next Page</Button>
               </div>
               </div>
               
           )}
                
        </div>
        </>
    )
}

export default PeoplesPage