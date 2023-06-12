import HeaderMenu from './components/HeaderMenu';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';

 
import logo from './logo.svg';
import './App.css';
import './assets/css/HeaderMenu.css';

function App() {
  return (
    <div className="App">
		<HeaderMenu />
		<HeroSection />
		<ExperienceSection />
    </div>
  );
}

export default App;
