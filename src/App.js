import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import LogIn from './components/LogIn/LogIn/LogIn';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
// import ServiceProvider from './context/ServiceProvider';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Register from './components/LogIn/Register/Register';
import AuthProvider from './context/AuthProvider';
import DoctorDetail from './components/DoctorDetail/DoctorDetail';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Doctors from './components/Doctors/Doctors';
function App() {
  return (
    <AuthProvider>
      {/* <ServiceProvider> */}
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <LogIn></LogIn>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <PrivateRoute path='/service/:serviceId'>
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <PrivateRoute path='/doctor/:doctorId'>
            <DoctorDetail></DoctorDetail>
          </PrivateRoute>
          <Route path='/doctors'>
            <Doctors></Doctors>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      {/* </ServiceProvider> */}
    </AuthProvider>
  );
}

export default App;
