import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { name, img, id, price, description, duration } = course;
  return (
    <div>
      <Card className="card shadow">
        <Card.Img variant="top" style={{ height: "400px" }} src={img} />
        <Card.Body className="text-center">
          <Card.Title className="text-success">{name}</Card.Title>
          <Card.Text>
            <h5 className="card-text">Price :{price}</h5>
            <h5 className="card-text">Duration :{duration}</h5>
            <p className="card-text">{description.slice(0, 75)}</p>
          </Card.Text>
          <Link to={`/services/${id}`}>
            <Button variant="primary">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Course;
