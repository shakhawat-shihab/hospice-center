import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/NaviationBar/NavigationBar';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import LogIn from './components/LogIn/LogIn/LogIn';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
function App() {
  return (
    <div>
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
          <Route path='/service/:serviceId'>
            <ServiceDetail></ServiceDetail>
          </Route>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
