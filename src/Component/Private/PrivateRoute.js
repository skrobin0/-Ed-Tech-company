import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { users, isLoad } = useAuth();

  if (isLoad) {
    return (
      <div class="text-center pt-2">
        <Spinner animation="border" variant="primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        users.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;