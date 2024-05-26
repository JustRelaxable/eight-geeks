import { useEffect, useState } from "react";
import EightGeeksLogo from "../svg/eight-geeks-logo";
import HamburgerMenuLogo from "../svg/hamburger-menu-logo";
import SearchLogo from "../svg/search-logo";
import styles from "./navigation-bar.module.css";
import CategoriesScreen from "../categories-screen/categories-screen";

export default function NavigationBar() {
  const [categoryScreenActive, setCategoryScreenActive] = useState(false);
  useEffect(() => {
    if (categoryScreenActive) document.body.classList.add("disableScroll");
    else document.body.classList.remove("disableScroll");
  }, [categoryScreenActive]);

  return (
    <>
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
        <button
          onClick={() => {
            setCategoryScreenActive(true);
          }}
        >
          <HamburgerMenuLogo />
        </button>
      </nav>
      <CategoriesScreen
        categoryScreenState={[categoryScreenActive, setCategoryScreenActive]}
      />
    </>
  );
}
