import Header from "./Header";
import "./styles.css";
import WeatherColumn from "./WeatherColumn";
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Header />
      <br />
      <WeatherColumn />   
        
      <footer>
          <a href="https://github.com/kierabon/weather-react" target="_blank" rel="noreferrer" > View Source Code </a>
      </footer>
    </div>
  );
}

export default App;
