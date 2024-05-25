import styles from "./home-section-header.module.css";

export default function HomeSectionHeader({
  sectionName,
}: {
  sectionName: string;
}) {
  return (
    <header className={styles.container}>
      <div>
        <p className={styles.headerText}>{sectionName}</p>
      </div>
      <div>
        <p>View all {sectionName}</p>
      </div>
    </header>
  );
}
