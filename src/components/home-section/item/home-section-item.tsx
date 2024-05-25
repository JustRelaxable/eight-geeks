import styles from "./home-section-item.module.css";

export default function HomeSectionItem({
  thumbnailSource,
  itemName,
  itemAuthor,
}: {
  thumbnailSource: string;
  itemName: string;
  itemAuthor: string;
}) {
  return (
    <article className={styles.container}>
      <img src={thumbnailSource} className={styles.thumbnail} />
      <p>{itemName}</p>
      <p className={styles.authorText}>{itemAuthor}</p>
    </article>
  );
}
