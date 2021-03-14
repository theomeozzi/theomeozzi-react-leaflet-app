import React, { useReducer } from 'react';
import LeafletMap from './components/LeafletMap';
import MarkerList from './components/MarkerList';
import UserForm from './components/UserForm';
import MapContext from './context/MapContext';
import MapReducer from './reducer/MapReducer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'leaflet/dist/leaflet.css';

function App()
{
  const [state, dispatch] = useReducer(MapReducer, {marker:[]})

  return (
    <>
      <MapContext.Provider value={{state, dispatch}}>
        <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/"> Carte </Link>
                  </li>
                  <li>
                    <Link to="/markers"> Marqueurs </Link>
                  </li>
                  <li>
                    <Link to="/user"> Utilisateur </Link>
                  </li>
                </ul>
              </nav>

              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/markers">
                  <MarkerList />
                </Route>
                <Route path="/user">
                  <UserForm />
                </Route>
                <Route path="/">
                  <LeafletMap />
                </Route>
              </Switch>
            </div>
          </Router>
        </MapContext.Provider>
    </>
  );
}

export default App;
