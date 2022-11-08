import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <Calculator/>
      <footer>
          This project was coded by{" "}
          <a href="https://lizsandri-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            Liz Sandri</a>,{" "}open-sourced on {" "}
          <a href="https://github.com/elizbethsandri/react-calculator"
            target="_blank"
            rel="noopener noreferrer">
            GitHub</a>{" "}
          and{" "} hosted on {" "}
          <a href="https://react-calculator-bylizsandri.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
             Netlify</a>
        </footer>
    </div>
  );
}

export default App;
