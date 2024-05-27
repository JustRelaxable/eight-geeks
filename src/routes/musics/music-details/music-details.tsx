import { useLoaderData } from "react-router-dom";
import CommentSection from "../../../components/comment-section/comment-section";
import ItemDetails from "../../../components/item-details/item-details";
import { getMusicData } from "../../../data/sections/sections";
import styles from "./music-details.module.css";
import { ItemData } from "../../../types/ItemData";
import PauseIcon from "../../../components/svg/pause-icon";

export function loader({ params }: { params: any }) {
  const musicData = getMusicData(params.musicIdentifier);
  if (musicData) return musicData;
  return null;
}

export default function MusicDetails() {
  const musicData = useLoaderData() as ItemData;
  return (
    <main className={styles.container}>
      <div className={styles.playerContainer}>
        <img src={musicData.thumbnailSource} className={styles.cover} />
        <div className={styles.songInfoContainer}>
          <p className={styles.songNameText}>{musicData.itemName}</p>
          <p className={styles.artistNameText}>{musicData.itemAuthor}</p>
        </div>
        <div className={styles.progressBarBG}>
          <div className={styles.progressBar}></div>
          <div className={styles.progressBarTrackerContainer}>
            <p>3:14</p>
            <p>4:20</p>
          </div>
        </div>
        <PauseIcon className={styles.controlIcon} />
      </div>
      <ItemDetails itemData={musicData} />
      <CommentSection />
    </main>
  );
}
