import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/NaviationBar/NavigationBar';
import Home from './components/Home/Home/Home';
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Switch>
          <Route>
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
