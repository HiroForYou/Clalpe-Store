import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { allProducts } from '../actions/productActions'
import Meta from '../components/Meta'
import Necklace from '../components/Necklace'

const NecklaceScreen = () => {
  const dispatch = useDispatch()

  const productAll = useSelector((state) => state.productAll)
  const { loading, error, products } = productAll
  console.log(products)
  const necklaces =
    products && products.filter((product) => product.category === 'Necklace')
  console.log(necklaces)

  useEffect(() => {
    dispatch(allProducts())
  }, [dispatch])

  return (
    <>
      <Meta />
      <Link to='/' className='btn btn-light'>
        Go Back
      </Link>
      <h1>Necklace</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {necklaces &&
              necklaces.map((necklace) => (
                <Col key={necklace._id} sm={12} md={6} lg={4} xl={3}>
                  <Necklace necklace={necklace} />
                </Col>
              ))}
          </Row>
        </>
      )}
    </>
  )
}

export default NecklaceScreen
