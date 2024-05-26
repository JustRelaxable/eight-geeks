import BackLogo from "../svg/back-logo";
import styles from "./categories-screen.module.css";

export default function CategoriesScreen({
  categoryScreenState,
}: {
  categoryScreenState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}) {
  const [categoryScreenActive, setCategoryScreenActive] = categoryScreenState;
  return (
    <div
      className={`${styles.container} ${
        categoryScreenActive ? styles.categoryScreenActive : ""
      }`}
    >
      <header className={styles.headerContainer}>
        <div className={styles.headerLogoTextContainer}>
          <button
            onClick={() => {
              setCategoryScreenActive(false);
            }}
          >
            <BackLogo />
          </button>
          <p className={styles.headerText}>Categories</p>
        </div>
      </header>
      <div className={styles.categoryContainer}></div>
    </div>
  );
}
