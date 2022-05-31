import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { allProducts } from '../actions/productActions'
import Meta from '../components/Meta'
import Ring from '../components/Ring'

const RingScreen = () => {
  const dispatch = useDispatch()

  const productAll = useSelector((state) => state.productAll)
  const { loading, error, products } = productAll

  const rings =
    products && products.filter((product) => product.category === 'Ring')
  console.log(rings)
  console.log(products)

  useEffect(() => {
    dispatch(allProducts())
  }, [dispatch])

  return (
    <>
      <Meta />
      <Link to='/' className='btn btn-light'>
        Go Back
      </Link>
      <h1>Rings</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {rings &&
              rings.map((ring) => (
                <Col key={ring._id} sm={12} md={6} lg={4} xl={3}>
                  <Ring ring={ring} />
                </Col>
              ))}
          </Row>
        </>
      )}
    </>
  )
}

export default RingScreen
