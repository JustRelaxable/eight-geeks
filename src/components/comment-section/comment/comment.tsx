import styles from "./comment.module.css";
import templatePP from "../profile-pictures/1.png";

export default function Comment() {
  return (
    <div className={styles.lastCommentContainer}>
      <img src={templatePP} className={styles.lastCommentPP} />
      <div>
        <p className={styles.commenterName}>AnassAnimationPro</p>
        <p>DAMMIT I NOT HERE but good job your...</p>
      </div>
    </div>
  );
}
