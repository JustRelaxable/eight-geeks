import EightGeeksLogo from "../svg/eight-geeks-logo";
import HamburgerMenuLogo from "../svg/hamburger-menu-logo";
import SearchLogo from "../svg/search-logo";
import styles from "./navigation-bar.module.css";

export default function NavigationBar() {
  return (
    <nav className={styles.container}>
      <div className={styles.logoSearchContainer}>
        <div className={styles.logoContainer}>
          <EightGeeksLogo />
          <p className={styles.logoText}>
            Eight <br /> Geeks
          </p>
        </div>
        <SearchLogo />
      </div>
      <HamburgerMenuLogo />
    </nav>
  );
}
