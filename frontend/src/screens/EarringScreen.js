import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { allProducts } from '../actions/productActions'
import Meta from '../components/Meta'
import Earring from '../components/Earring'

const EarringScreen = () => {
  const dispatch = useDispatch()

  const productAll = useSelector((state) => state.productAll)
  const { loading, error, products } = productAll
  console.log(products)
  const earrings =
    products && products.filter((product) => product.category === 'Earrings')
  console.log(earrings)

  useEffect(() => {
    dispatch(allProducts())
  }, [dispatch])

  return (
    <>
      <Meta />
      <Link to='/' className='btn btn-light'>
        Go Back
      </Link>
      <h1>Earring</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {earrings &&
              earrings.map((earring) => (
                <Col key={earring._id} sm={12} md={6} lg={4} xl={3}>
                  <Earring earring={earring} />
                </Col>
              ))}
          </Row>
        </>
      )}
    </>
  )
}

export default EarringScreen
