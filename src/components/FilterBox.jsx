import "./FilterBox.css";

const FilterTag = ({ tagName, deleteTag }) => {
  return (
    <div className="filter-tag">
      <span className="tag-name">{tagName}</span>
      <span className="remove-tag-btn" onClick={deleteTag}>
        <img src="/images/icon-remove.svg" alt="cancel-btn" />
      </span>
    </div>
  );
};

const FilterBox = ({ filters, clearFilterTags, deleteTag }) => {
  return (
    <div className="filter-box">
      <div className="filters">
        {filters.map((filter) => (
          <FilterTag
            key={filter}
            tagName={filter}
            deleteTag={() => deleteTag(filter)}
          />
        ))}
      </div>
      <span className="clear-filters-btn" onClick={clearFilterTags}>
        Clear
      </span>
    </div>
  );
};

export default FilterBox;
