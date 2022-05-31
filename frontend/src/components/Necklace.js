import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Necklace = ({ necklace }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${necklace._id}`}>
          <Card.Img src={necklace.image} />
        </Link>

        <Card.Body>
          <Link to={`/product/${necklace._id}`}>
            <Card.Title as="div">
              <strong>{necklace.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as="div">
            <Rating
              value={necklace.rating}
              text={`${necklace.numReviews} reseñas`}
            />
          </Card.Text>

          <Card.Text as="h3">${necklace.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Necklace;
