import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Bracelet = ({ bracelet }) => {
  return (
    <>
      <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${bracelet._id}`}>
          <Card.Img src={bracelet.image} />
        </Link>

        <Card.Body>
          <Link to={`/product/${bracelet._id}`}>
            <Card.Title as='div'>
              <strong>{bracelet.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as='div'>
            <Rating
              value={bracelet.rating}
              text={`${bracelet.numReviews} reviews`}
            />
          </Card.Text>

          <Card.Text as='h3'>${bracelet.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Bracelet
