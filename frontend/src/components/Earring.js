import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Earring = ({ earring }) => {
  return (
    <>
      <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${earring._id}`}>
          <Card.Img src={earring.image} />
        </Link>

        <Card.Body>
          <Link to={`/product/${earring._id}`}>
            <Card.Title as='div'>
              <strong>{earring.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as='div'>
            <Rating
              value={earring.rating}
              text={`${earring.numReviews} reviews`}
            />
          </Card.Text>

          <Card.Text as='h3'>${earring.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Earring
