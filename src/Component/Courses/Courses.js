import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Course from "../Course/Course";


const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('./CoursesData.json')
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  if (courses.length === 0) {
    return (
      <div class="text-center">
        <Spinner animation="border" variant="primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <>
      <Container fluid className="p-5">
        <Row>
          <Col>
            <h1 className="text-center text-info my-5">
              <i className=" fa-2x fab text-info fa-phoenix-squadron"></i>We offer <span className="text-secondary">that course</span>{" "}
              <i className=" fa-2x fab text-info fa-phoenix-squadron"></i>
            </h1>
          </Col>
        </Row>
        <Row>
          {courses.map((course) => (
            <Col className="g-4 mb-3" md={4}>
              <Course key={course?._id} course={course}></Course>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Courses;