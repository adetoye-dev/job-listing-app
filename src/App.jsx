import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="bg-top">
        <picture>
          <source
            media="(max-width: 480px)"
            srcset="/images/bg-header-mobile.svg"
          />
          <img src="/images/bg-header-desktop.svg" alt="bg-header" />
        </picture>
      </header>
    </div>
  );
}

export default App;
