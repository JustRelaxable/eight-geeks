import NavigationBar from "../../components/navigation-bar/navigation-bar";
import styles from "./root.module.css";
import { Outlet } from "react-router-dom";
export default function Root() {
  return (
    <div className={`${styles.container}`}>
      <NavigationBar />
      <Outlet />
    </div>
  );
}
