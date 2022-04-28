import { Link } from "react-router-dom"
import SwAPI from '../services/SwAPI'
import Card from 'react-bootstrap/Card'

const CardsFilmItem = ({ films }) => {
	return (
		<>
		<Card.Title>{films.title}</Card.Title>
    		<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    			<Card.Text>
      				Some quick example text to build on the card title and make up the bulk of
      				the card's content.
    			</Card.Text>
    		<Card.Link className="film-title"
				to={`/films/${films.id}`}
			>
				{films.title}</Card.Link>
		</>
	)
}

export default CardsFilmItem