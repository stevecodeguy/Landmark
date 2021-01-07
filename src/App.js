import { useContext, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './assets/fonts/fonts.css';
import './css/universal.css';

import { ModalContext } from './context/ModalContext';
import { ScreenContext } from './context/ScreenContext';

import ModalOffices from './components/ModalOffices';
import ModalTour from './components/ModalTour';
import Nav from './components/Nav';
import Home from './pages/Home';
import OnlyOneRobson from './pages/OnlyOneRobson';
import TwoSeventyView from './pages/TwoSeventyView';
import RefinedResidences from './pages/RefinedResidences';
import Tours from './pages/Tours';
import Amenities from './pages/Amenities';
import Team from './pages/Team';
import Media from './pages/Media';
import Register from './pages/Register';
import Contact from './pages/Contact';

function App() {
  const { showIntroModal, showTourModal } = useContext(ModalContext);
  const { setScreenDistanceScrolled } = useContext(ScreenContext);

  const scrollY = () => {
    const position = window.pageYOffset;
    setScreenDistanceScrolled(position);
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollY, { passive: true });

    return () => {
      window.removeEventListener('scroll', scrollY);
    }
  });

  return (
    <>
      <Router>
        <header className="App-header">
          {showIntroModal ? <ModalOffices /> : null}
          {showTourModal ? <ModalTour /> : null}
          <Nav />
        </header>
        <section>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/robson' >
              <OnlyOneRobson />
            </Route>
            <Route path='/views' >
              <TwoSeventyView />
            </Route>
            <Route path='/residences' >
              <RefinedResidences />
            </Route>
            <Route path='/virtual-tours' >
              <Tours />
            </Route>
            <Route path='/amenities' >
              <Amenities />
            </Route>
            <Route path='/team' >
              <Team />
            </Route>
            <Route path='/media' >
              <Media />
            </Route>
            <Route path='/register' >
              <Register />
            </Route>
            <Route path='/contact' >
              <Contact />
            </Route>
          </Switch>
        </section>
      </Router>
    </>
  );
}

export default App;
