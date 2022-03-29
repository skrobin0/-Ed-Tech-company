import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";
import './Login.css'
import login from "../../Images/login.png";
import Menubar from "../Shared/Menubar/Menubar";

const Login = () => {
  const {
    singInWithGoogle,
    handleRegistration,
    handleEmailChange,
    handlePasswordChange,
    error,
    toggleLogin,
    isLogin,
    handleNameChange,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    singInWithGoogle().then((result) => {
      history.push(redirect_url);
    });
  };

  return (
    <div>
      <Menubar></Menubar>
      <Container>
        <Row className="mt-5">
          <Col md={6} sm={12}>
            <img className="m" style={{ width: "80%" }} src={login} alt="" />
          </Col>

          <Col>
            <Col md={6} xs={12} sm={3} className ="text-center">
              <h3 className="text-success">
                Please {isLogin ? "Login" : "Register"}{" "}
              </h3>
              <h3 className="text-danger"> {error} </h3>

              <Button className="btn btn-success" onClick={handleGoogleLogin}>
                <span className="text-center ">Google Sign In </span>
              </Button>
            </Col>

            <Row>
              <Col md={6} xs={12} sm={6}>
                <br />
                <p className="mb-2 text-center">or</p>
              </Col>
            </Row>

            <Row>
          <Col md={6} xs={12} sm={6}>
                <form className="text-center">
                  {!isLogin && (
                    <div className="input-group">
                      <input
                        onBlur={handleNameChange}
                        type="text"
                        className="form-control"
                        name="username"
                        placeholder="User Name"
                        required
                      />
                    </div>
                  )}

                  <br />

                  <div className="input-group">
                    <input
                      onBlur={handleEmailChange}
                      type="text"
                      className="form-control"
                      name="username"
                      placeholder="email address"
                      required
                    />
                  </div>

                  <br />
                  <div className="input-group">
                    <input
                      onBlur={handlePasswordChange}
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <br />

                  <Button
                    onClick={handleRegistration}
                    className="btn btn-success"
                    type="submit"
                  >
                    {isLogin ? "Login" : "Register"}
                  </Button>
                </form>
              </Col>
            </Row>
            <Row>
              <Col md={6} xs={12} sm={3} className='text-center'>
                <label className="checkbox mt-2">
                  <input
                    onChange={toggleLogin}
                    type="checkbox"
                    value="remember-me"
                  />
                  <span> Already Registered </span>
                </label>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;