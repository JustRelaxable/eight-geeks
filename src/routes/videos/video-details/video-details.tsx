import { useLoaderData } from "react-router-dom";
import CommentSection from "../../../components/comment-section/comment-section";
import ItemDetails from "../../../components/item-details/item-details";
import { getVideoData } from "../../../data/sections/sections";
import { ItemData } from "../../../types/ItemData";
import styles from "./video-details.module.css";
import VideoPlayIcon from "../../../components/svg/video-play-icon";

export function loader({ params }: { params: any }) {
  const videoData = getVideoData(params.videoIdentifier);
  if (videoData) return videoData;
  return null;
}

export default function VideoDetails() {
  const videoData = useLoaderData() as ItemData;
  return (
    <main className={styles.container}>
      <div className={styles.thumbnailContainer}>
        <VideoPlayIcon className={styles.videoPlayIcon} />
        <div className={styles.colorOverlay}></div>
        <img src={videoData.thumbnailSource} className={styles.thumbnail} />
      </div>
      <ItemDetails itemData={videoData} />
      <CommentSection />
    </main>
  );
}
