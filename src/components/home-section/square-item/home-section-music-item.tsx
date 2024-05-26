import { Link } from "react-router-dom";
import styles from "./home-section-music-item.module.css";

export default function HomeSectionMusicItem({
  thumbnailSource,
  itemName,
  itemAuthor,
  sectionName,
}: {
  thumbnailSource: string;
  itemName: string;
  itemAuthor: string;
  sectionName: string;
}) {
  return (
    <Link to={`/${sectionName}/${itemName.toLowerCase().replace(" ", "-")}`}>
      <article className={styles.container}>
        <img src={thumbnailSource} className={styles.thumbnail} />
        <div className={styles.textContainer}>
          <p>{itemName}</p>
          <p className={styles.authorText}>{itemAuthor}</p>
        </div>
      </article>
    </Link>
  );
}
