import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './assets/fonts/fonts.css';
import './css/universal.css';

import ModalOffices from './components/ModalOffices';
import ModalTour from './components/ModalTour';
import Nav from './components/Nav';
import Home from './pages/Home';
// import OnlyOneRobson from './pages/OnlyOneRobson';
// import RefinedResidences from './pages/RefinedResidences';
// import TwoSeventyView from './pages/TwoSeventyView';

function App() {
  return (
    <>
      <Router>
        <header className="App-header">
          <ModalOffices />
          {/* <ModalTour /> */}
          <Nav />
        </header>
        <section>
          <Switch>
            <Route path='/' exact>
              <Home />
              {/* <OnlyOneRobson />
              <RefinedResidences />
              <TwoSeventyView /> */}
            </Route>
          </Switch>
        </section>
      </Router>
    </>
  );
}

export default App;
