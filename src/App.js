import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home-Pages/Home/Home';
import AuthProvider from "./Component/Context/AuthProvider";
import CourseDetails from "./Component/CourseDetails/CourseDetails";
import Login from "./Component/Login/Login";
import PrivateRoute from "./Component/Private/PrivateRoute";

function App() {
  return (
    <AuthProvider>
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/services/:id">
           <CourseDetails></CourseDetails>
          </PrivateRoute>
        </Switch>
      </Router>
      </AuthProvider>
  );
}

export default App;
