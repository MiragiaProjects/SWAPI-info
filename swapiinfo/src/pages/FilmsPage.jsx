import SwAPI from '../services/SwAPI'
import { useEffect, useState } from 'react'
import CardsFilm from '../components/CardsFilmItem'


const FilmsPage = () => {
    const [films, setFilms] = useState()
    const [page, setPage] = useState(1)

    //Get films from api
    const getFilms = async () => {
        const data = await SwAPI.getFilms(page)
        setFilms(data)


        //Get films from api when component is first mounted
        useEffect(() => {
            getFilms
        },[page])
    }

    return (
        <>
        <div className='App container'>
            <h1>Star Wars Films</h1>

            <div className='mb-3'>
                < CardsFilm />
            </div>

        </div>
        </>
    )
}

export default FilmsPage