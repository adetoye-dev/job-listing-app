import "./FilterBox.css";

const FilterTag = ({ tagName }) => {
  return (
    <div className="filter-tag">
      <span className="tag-name">{tagName}</span>
      <span className="remove-tag-btn">
        <img src="/images/icon-remove.svg" alt="cancel-btn" />
      </span>
    </div>
  );
};

const FilterBox = ({ filters, clearFilterTags }) => {
  return (
    <div className="filter-box">
      <div className="filters">
        {filters.map((filter) => (
          <FilterTag key={filter} tagName={filter} />
        ))}
      </div>
      <span className="clear-filters-btn" onClick={clearFilterTags}>
        Clear
      </span>
    </div>
  );
};

export default FilterBox;
