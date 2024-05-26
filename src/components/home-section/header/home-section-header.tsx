import NextIcon from "../../svg/next-icon";
import styles from "./home-section-header.module.css";

export default function HomeSectionHeader({
  sectionName,
  SectionLogo,
}: {
  sectionName: string;
  SectionLogo: React.FC;
}) {
  return (
    <header className={styles.container}>
      <div className={styles.sectionNameLogoContainer}>
        <SectionLogo />
        <p className={styles.headerText}>
          {sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}
        </p>
      </div>
      <div className={styles.viewAllContainer}>
        <p>View all {sectionName}</p>
        <NextIcon />
      </div>
    </header>
  );
}
