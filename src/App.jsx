import "./App.css";
import PostCard from "./components/PostCard";
import data from "../data.json";
import { useEffect, useState } from "react";
import FilterBox from "./components/FilterBox";

function App() {
  const [jobPostings, setJobPostings] = useState(data);
  const [filters, setFilters] = useState([]);

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) {
      return;
    }
    setFilters((prevFilters) => {
      return [...prevFilters, tag];
    });
  };

  // useEffect(() => {
  //   console.log(filters);
  // }, [filters]);

  const renderJobs = jobPostings.map((post) => (
    <PostCard key={post.id} postData={post} handleTagClick={handleTagClick} />
  ));
  return (
    <div className="App">
      <header className="bg-top">
        <picture>
          <source
            media="(max-width: 480px)"
            srcSet="/images/bg-header-mobile.svg"
          />
          <img src="/images/bg-header-desktop.svg" alt="bg-header" />
        </picture>
      </header>
      <main className="main">
        <div className="container">
          {filters.length > 0 ? <FilterBox filters={filters} /> : ""}
          {renderJobs}
        </div>
      </main>
    </div>
  );
}

export default App;
