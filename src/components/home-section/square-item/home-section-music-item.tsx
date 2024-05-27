import { Link } from "react-router-dom";
import styles from "./home-section-music-item.module.css";
import { useContext } from "react";
import MusicPlayerContext from "../../../contexts/music-player-context";

export default function HomeSectionMusicItem({
  thumbnailSource,
  itemName,
  itemAuthor,
  sectionName,
}: {
  thumbnailSource: string;
  itemName: string;
  itemAuthor: string;
  sectionName: string;
}) {
  const [playerVisible, setPlayerVisible] = useContext(MusicPlayerContext);
  return (
    <article className={styles.container}>
      <img
        src={thumbnailSource}
        className={styles.thumbnail}
        onClick={() => {
          setPlayerVisible(true);
        }}
      />
      <Link to={`/${sectionName}/${itemName.toLowerCase().replace(" ", "-")}`}>
        <div className={styles.textContainer}>
          <p>{itemName}</p>
          <p className={styles.authorText}>{itemAuthor}</p>
        </div>
      </Link>
    </article>
  );
}
