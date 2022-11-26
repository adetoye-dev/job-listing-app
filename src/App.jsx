import "./App.css";
import PostCard from "./components/PostCard";
import data from "../data.json";
import { useState } from "react";
import FilterBox from "./components/FilterBox";

function App() {
  const [filters, setFilters] = useState([]);

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) {
      return;
    }
    setFilters((prevFilters) => {
      return [...prevFilters, tag];
    });
  };

  const clearFilterTags = () => {
    setFilters([]);
  };

  const deleteTag = (tag) => {
    setFilters((prevFilters) => prevFilters.filter((item) => item !== tag));
  };

  const filterItems = (arr) => {
    return filters.every((el) => arr.includes(el));
  };

  const filteredPosts = data.filter((post) => {
    return filterItems([
      post.role,
      post.level,
      ...post.languages,
      ...post.tools,
    ]);
  });

  const renderJobs = filteredPosts.map((post) => (
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
          {filters.length > 0 ? (
            <FilterBox
              filters={filters}
              clearFilterTags={clearFilterTags}
              deleteTag={deleteTag}
            />
          ) : (
            ""
          )}
          {renderJobs}
        </div>
      </main>
    </div>
  );
}

export default App;
