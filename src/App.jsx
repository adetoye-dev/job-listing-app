import "./App.css";
import PostCard from "./components/PostCard";

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
      <main className="main">
        <div className="container">
          <PostCard />
        </div>
      </main>
    </div>
  );
}

export default App;
