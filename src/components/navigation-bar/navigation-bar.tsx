import EightGeeksLogo from "../svg/eight-geeks-logo";
import styles from "./navigation-bar.module.css";

export default function NavigationBar() {
  return (
    <nav className={styles.container}>
      <div className={styles.logoContainer}>
        <EightGeeksLogo />
        <p className={styles.logoText}>
          Eight <br /> Geeks
        </p>
      </div>
    </nav>
  );
}
