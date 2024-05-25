import styles from "./home-section-item.module.css";

export default function HomeSectionItem({
  itemName,
  itemAuthor,
}: {
  itemName: string;
  itemAuthor: string;
}) {
  return (
    <article className={styles.container}>
      <img className={styles.thumbnail} />
      <p>{itemName}</p>
      <p>{itemAuthor}</p>
    </article>
  );
}
