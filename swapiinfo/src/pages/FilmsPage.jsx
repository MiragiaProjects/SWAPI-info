import SwAPI from '../services/SwAPI'
import { useEffect, useState } from 'react'
import CardsFilmItem from '../components/CardsFilmItem'


const FilmsPage = () => {
    const [films, setFilms] = useState([])

    //Get films from api
    const getFilms = async () => {
        const data = await SwAPI.getFilms()
        setFilms(data)


        //Get films from api when component is first mounted
        useEffect(() => {
            getFilms
        },[])
    }

    return (
        <>
        <div className='App container'>
            <h1>Star Wars Films</h1>

            <div className='mb-3'>
                < CardsFilmItem />
            </div>

        </div>
        </>
    )
}

export default FilmsPage