import "./CategoryTag.css";

const CategoryTag = ({ tagName, handleClick }) => {
  return (
    <span className="category-tag" onClick={handleClick}>
      {tagName}
    </span>
  );
};

export default CategoryTag;
