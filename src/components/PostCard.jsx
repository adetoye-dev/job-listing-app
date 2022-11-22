import CategoryTag from "./CategoryTag";
import "./PostCard.css";

const PostCard = () => {
  return (
    <div className="post-card">
      <div className="post-img">
        <img src="/images/account.svg" alt="post-img" />
      </div>
      <div className="post-data">
        <div className="title-tags">
          <h3 className="post-title">Account</h3>
          <span className="tag new">NEW!</span>
          <span className="tag featured">FEATURED</span>
        </div>
        <h2 className="role">Senior Frontend Developer</h2>
        <div className="additional-info">
          <span className="info posted-at">1d ago</span>
          <span className="info contract">Full time</span>
          <span className="info location">USA only</span>
        </div>
      </div>
      <hr className="divider" />
      <div className="post-category">
        <CategoryTag tagName="HTML" />
      </div>
    </div>
  );
};

export default PostCard;
