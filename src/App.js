import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <main>
        <About />
        <Portfolio />
        <Contact />
        <Resume />
      </main>
    </div>
  );
}

export default App;