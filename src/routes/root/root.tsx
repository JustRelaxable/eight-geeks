import NavigationBar from "../../components/navigation-bar/navigation-bar";
import styles from "./root.module.css";
import { Outlet } from "react-router-dom";
import MusicPlayerContext from "../../contexts/music-player-context";
import { useState } from "react";
export default function Root() {
  const [playerVisible, setPlayerVisible] = useState(false);
  return (
    <div className={`${styles.container}`}>
      <NavigationBar />
      <MusicPlayerContext.Provider value={[playerVisible, setPlayerVisible]}>
        <Outlet />
      </MusicPlayerContext.Provider>
    </div>
  );
}
