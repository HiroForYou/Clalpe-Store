import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Ring = ({ ring }) => {
  return (
    <>
      <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${ring._id}`}>
          <Card.Img src={ring.image} />
        </Link>

        <Card.Body>
          <Link to={`/product/${ring._id}`}>
            <Card.Title as='div'>
              <strong>{ring.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as='div'>
            <Rating value={ring.rating} text={`${ring.numReviews} reviews`} />
          </Card.Text>

          <Card.Text as='h3'>${ring.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Ring
