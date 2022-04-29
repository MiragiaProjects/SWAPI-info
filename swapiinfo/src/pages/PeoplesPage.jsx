import SwAPI from '../services/SwAPI'
import { useEffect, useState } from 'react'
import CardsPeople from '../components/CardsFilmItem'


const PeoplesPage = () => {
    const [peoples, setPeoples] = useState([])

    //Get films from api
    const getPeoples = async () => {
        const data = await SwAPI.getPeoples()
        setPeople(data)


        //Get films from api when component is first mounted
        useEffect(() => {
            getPeoples
        },[])
    }

    return (
        <>
        <div className='App container'>
            <h1>Star Wars Films</h1>

            <div className='mb-3'>
                < CardsPeople />
            </div>

        </div>
        </>
    )
}

export default PeoplesPage