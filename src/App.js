import './App.css';
import Header from './Components/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Components/Shared/Login/Login';
import Home from './Components/Home/Home';
import Destination from './Components/Destination/Destination';
import AuthProvider from './Context/AuthProvider';
import AddDestionation from './Components/AddDestination/AddDestionation';
import TourDetails from './TourDetails/TourDetails';
import Booking from './Components/Booking/Booking';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import TourList from './Components/TourList/TourList';
import ManageAllTours from './Components/ManageAllTours/ManageAllTours';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import Register from './Components/Register/Register';

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
            <PrivateRoute path="/addDestination">
              <AddDestionation />
            </PrivateRoute>
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
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
