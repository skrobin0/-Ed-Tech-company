import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Modals from "../Modals/Modals";
import Footer from "../Shared/Footer/Footer";
import Menubar from "../Shared/Menubar/Menubar";
import "./CourseDetails.css";

const CourseDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/CourseDetails.json")
      .then((res) => res.json())
      .then((data) => setData(data.employee));
  }, []);

  const Data = data.find((item) => item?.id === id);

  return (
    <div>
      <Menubar></Menubar>
      <Row className="mx-auto text-center">
        <Col md={6}>
          <div className="cart p-3 m-2 border border">
            <div className="service img">
              <img style={{ width: "100%" }} src={Data?.img} alt="category" />
            </div>
            <h6 className="mt-4 text-info">Teacher :{Data?.name}</h6>
            <p className="mt-2">{Data?.description}</p>

            <Modals></Modals>
          </div>
        </Col>
      </Row>
      <Footer></Footer>
    </div>
  );
};

export default CourseDetails;
