import { useContext, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './assets/fonts/fonts.css';
import './css/universal.css';

import { ModalContext } from './modal_context/ModalContext';

import ModalOffices from './components/ModalOffices';
import ModalTour from './components/ModalTour';
import Nav from './components/Nav';
import Home from './pages/Home';
// import OnlyOneRobson from './pages/OnlyOneRobson';
// import RefinedResidences from './pages/RefinedResidences';
// import TwoSeventyView from './pages/TwoSeventyView';

function App() {
  const { showIntroModal, showTourModal } = useContext(ModalContext);

  // useEffect(() => {
  //   if (window.performance) {
  //     if (performance.navigation.type == 1) {
  //       alert( "This page is reloaded" );
  //     } else {
  //       alert( "This page is not reloaded");
  //     }
  //   }
  // }, [])

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
