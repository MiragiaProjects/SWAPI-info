import { Link } from "react-router-dom"
import SwAPI from '../services/SwAPI'

const CardsPeopleItem = ({ people }) => {
	return (
        <>
		<Card.Title>{people.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
        <Card.Link className="film-title"
				to={`/films/${people.id}`}
			>
				{people.title}</Card.Link>
		</>
	)
}

export default CardsPeopleItem
