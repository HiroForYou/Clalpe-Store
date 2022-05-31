import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { allProducts } from '../actions/productActions'
import Meta from '../components/Meta'
import Bracelet from '../components/Bracelet'

const BraceletScreen = () => {
  const dispatch = useDispatch()

  const productAll = useSelector((state) => state.productAll)
  const { loading, error, products } = productAll

  const bracelets =
    products && products.filter((product) => product.category === 'Bracelet')
  console.log(bracelets)

  useEffect(() => {
    dispatch(allProducts())
  }, [dispatch])

  return (
    <>
      <Meta />
      <Link to='/' className='btn btn-light'>
        Go Back
      </Link>
      <h1>Bracelets</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {bracelets &&
              bracelets.map((bracelet) => (
                <Col key={bracelet._id} sm={12} md={6} lg={4} xl={3}>
                  <Bracelet bracelet={bracelet} />
                </Col>
              ))}
          </Row>
        </>
      )}
    </>
  )
}

export default BraceletScreen
