import "./App.css";
import Cards from "./components/Cards";
import useLocalstorange from "./useLocalStorage";
import Overview from "./components/Overview";
import { useEffect } from "react";

function App() {
  const [theme, setTheme] = useLocalstorange("theme", "dark");

  useEffect(() => {
    const checkbox = document.querySelector('input[type="checkbox"]');

    const handleThemeChange = () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    checkbox.addEventListener("change", handleThemeChange);

    return () => {
      checkbox.removeEventListener("change", handleThemeChange);
    };
  }, [setTheme]);

  return (
    <div className="App" data-theme={theme}>
      <div className="App-container">
        <header>
          <div>
            <h1>Social Media Dashboard</h1>
            <p>Total Followers: 23,004</p>
          </div>
          <div>
            <form>
              <p>Dark mode</p>
              <label className="switch">
                <input type="checkbox" defaultChecked={theme === "dark"} />
                <span className="slider round"></span>
              </label>
            </form>
          </div>
        </header>
        <main>
          <Cards />
          <Overview />
        </main>
      </div>
    </div>
  );
}

export default App;
