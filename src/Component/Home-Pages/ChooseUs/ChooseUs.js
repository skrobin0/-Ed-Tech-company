import React from "react";
import { Col, Row } from "react-bootstrap";
import "./ChooseUs.css";

const ChooseUs = () => {
  return (
    <div className="chooseUs-container text-center text-white">
      <Row>
        <Col lg={6} className="pt-5">
          <h1 className="mt-5 ps-5 fw-bold text-warning">
            Why <br />  Ed-Tech Club ?
          </h1>
          <p className="text-center mt-2 ps-5 text-white fs-3">
            You definitely want results. We have found that the best way to get
            them is with up front research – of your excessive power to
            communicate, target variant community and study in an intensive
            manner. Only after we fully understand you, we do recommend a plan
            of attack with our integrated teaching phase.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default ChooseUs;
