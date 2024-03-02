import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <main>
        <Dictionary defaultKeyword="Dictionary" />
      </main>
      <footer>
        <div>
          <p>
            Designed & Built by{" "}
            <a
              href="https://portfolio-mila-borodkina.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Mila Borodkina
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/MilaBorodkina/react-weather-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
