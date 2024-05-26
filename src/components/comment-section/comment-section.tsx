import { useState } from "react";
import Divider from "../divider/divider";
import CloseIcon from "../svg/close-icon";
import styles from "./comment-section.module.css";
import Comment from "./comment/comment";
import templatePP from "./profile-pictures/1.png";

export default function CommentSection() {
  const [commentSectionActive, setCommentSectionActive] = useState(false);
  return (
    <>
      <div
        className={styles.container}
        onClick={() => {
          setCommentSectionActive(true);
        }}
      >
        <header className={styles.headerContainer}>
          <h2 className={styles.headerText}>Comments</h2>
          <p className={styles.commentCountText}>11</p>
        </header>
        <Comment />
      </div>
      <div
        className={`${styles.commentsContainer} ${
          commentSectionActive ? styles.commentsContainerVisible : ""
        }`}
      >
        <header className={styles.commentsContainerHeader}>
          <p className={styles.commentContainerHeaderText}>Comments</p>
          <CloseIcon
            onClick={() => {
              setCommentSectionActive(false);
            }}
          />
        </header>
        <Divider color="#32344D" />
        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
        <div className={styles.commentInputContainer}>
          <img src={templatePP} className={styles.lastCommentPP} />
          <input
            type="text"
            placeholder="Add a comment..."
            className={styles.commentInput}
          />
        </div>
      </div>
    </>
  );
}
