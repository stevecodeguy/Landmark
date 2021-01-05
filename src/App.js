import "./assets/fonts/fonts.css";
import Nav from './components/Nav';
import Home from './pages/Home';
import OnlyOneRobson from './pages/OnlyOneRobson';
import RefinedResidences from './pages/RefinedResidences';
import TwoSeventyView from './pages/TwoSeventyView';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Home />
        <OnlyOneRobson />
        <RefinedResidences />
        <TwoSeventyView />
      </header>
    </div>
  );
}

export default App;
