import { SectionData } from "../../../types/SectionData";
import styles from "./categories-screen-category.module.css";

export default function CategoriesScreenCategory({
  sectionData,
}: {
  sectionData: SectionData;
}) {
  return (
    <li>
      <header className={styles.headerContainer}>
        <sectionData.SectionLogo />
        <h2 className={styles.headerText}>
          {sectionData.sectionName.charAt(0).toUpperCase() +
            sectionData.sectionName.slice(1)}
        </h2>
      </header>
    </li>
  );
}
