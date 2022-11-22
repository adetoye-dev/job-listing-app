import { useEffect, useState } from "react";
import CategoryTag from "./CategoryTag";
import "./PostCard.css";

const PostCard = ({ postData, handleTagClick }) => {
  const [tagArrays, setTagArrays] = useState([]);
  useEffect(() => {
    setTagArrays((prevTagArrays) => {
      return [
        ...prevTagArrays,
        postData.role,
        postData.level,
        ...postData.languages,
        ...postData.tools,
      ];
    });
    return () => {
      setTagArrays([]);
    };
  }, []);

  return (
    <div
      className={postData.featured ? "post-card featured-post" : "post-card"}
    >
      <div className="post-img">
        <img src={`/images/${postData.logo}`} alt="post-img" />
      </div>
      <div className="post-data">
        <div className="title-tags">
          <h3 className="company">{postData.company}</h3>
          {postData.new ? <span className="tag new">NEW!</span> : ""}
          {postData.featured ? (
            <span className="tag featured">FEATURED</span>
          ) : (
            ""
          )}
        </div>
        <h2 className="position">{postData.position}</h2>
        <div className="additional-info">
          <span className="info posted-at">{postData.postedAt}</span>
          <span className="info contract">{postData.contract}</span>
          <span className="info location">{postData.location}</span>
        </div>
      </div>
      <hr className="divider" />
      <div className="post-category">
        {tagArrays.map((tag) => (
          <CategoryTag
            key={tag}
            tagName={tag}
            handleClick={() => handleTagClick(tag)}
          />
        ))}
      </div>
    </div>
  );
};

export default PostCard;
