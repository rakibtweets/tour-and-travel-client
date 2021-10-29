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
            <PrivateRoute path="/booking">
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
