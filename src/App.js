import './App.css';
import Header from './Components/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Shared/Login/Login';
import Home from './Components/Home/Home';
import Destination from './Components/Destination/Destination';
import Contact from './Components/Contact/Contact';
import AuthProvider from './Context/AuthProvider';
import AddDestionation from './Components/AddDestination/AddDestionation';
import TourDetails from './TourDetails/TourDetails';
import Booking from './Components/Booking/Booking';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import TourList from './Components/TourList/TourList';
import ManageAllTours from './Components/ManageAllTours/ManageAllTours';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/destination">
              <Destination />
            </Route>
            <Route path="/addDestination">
              <AddDestionation />
            </Route>
            <Route path="/destinations/:id">
              <TourDetails />
            </Route>
            <PrivateRoute path="/myTourList">
              <TourList />
            </PrivateRoute>
            <PrivateRoute path="/manageTours">
              <ManageAllTours />
            </PrivateRoute>
            <PrivateRoute path="/booking/:id">
              <Booking />
            </PrivateRoute>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
