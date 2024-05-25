import styles from "./home-section.module.css";

export default function HomeSection() {
  return (
    <section>
      <header className={styles.headerContainer}>
        <div>
          <p className={styles.headerText}>Games</p>
        </div>
        <div>
          <p>View all games</p>
        </div>
      </header>
    </section>
  );
}
