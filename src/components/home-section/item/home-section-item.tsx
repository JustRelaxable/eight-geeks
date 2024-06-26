import { Link } from "react-router-dom";
import styles from "./home-section-item.module.css";

export default function HomeSectionItem({
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
        <p>{itemName}</p>
        <p className={styles.authorText}>{itemAuthor}</p>
      </article>
    </Link>
  );
}
