import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card'
import SwAPI from '../services/SwAPI'
import CardsFilmItem from "./CardsFilmItem"

const CardsFilm = ({films}) => {

    return (

      <Card className ="CardsFilm" style={{ width: '18rem' }}>
        <Card.Body>
          {
              films.map((films, index) =>
                <CardsFilmItem 
                  key={index}
                  films={films}
                />
              )
          }
        </Card.Body>
      </Card>
)
}

export default CardsFilm