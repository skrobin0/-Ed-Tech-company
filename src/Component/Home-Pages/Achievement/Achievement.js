import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Achievement = () => {
    return (
        <div className="container-fluid bg-success p-5 m-auto text-center text-white">
      <h2 className="mb-5 text-center">
        <i className="fas fa-2x fa-draw-polygon"></i> Achievement <br />{" "}
        We Earned
      </h2>
      <Row>
        <Col md={3} className="p-3">
          <h2>
            <i className="fas fa-2x fa-hotel"></i> 8
          </h2>
          <p className="fs-5">Total Branch</p>
        </Col>
        <Col md={3} className="p-3">
          <h2>
            <i className="fas fa-2x fa-users-cog"></i> 13
          </h2>
          <p className="fs-5">coordinator</p>
        </Col>
        <Col md={3} className="p-3">
          <h2>
            <i className="far fa-2x fa-grin-beam"></i> 2580
          </h2>
          <p className="fs-5">Happy Students</p>
        </Col>
        <Col md={3} className="p-3">
          <h2>
            <i className="fas fa-2x fa-clipboard-check"></i> 127
          </h2>
          <p className="fs-5">Successful Event</p>
        </Col>
      </Row>
    </div>
    );
};

export default Achievement;