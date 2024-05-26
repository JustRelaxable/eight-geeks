import { getSectionData } from "../../data/sections/sections";
import BackLogo from "../svg/back-logo";
import styles from "./categories-screen.module.css";
import CategoriesScreenCategory from "./category/categories-screen-category";

export default function CategoriesScreen({
  categoryScreenState,
}: {
  categoryScreenState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}) {
  const [categoryScreenActive, setCategoryScreenActive] = categoryScreenState;
  const sections = getSectionData();
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
      <ul className={styles.categoryContainer}>
        {sections.map((section) => (
          <CategoriesScreenCategory sectionData={section} />
        ))}
      </ul>
    </div>
  );
}
