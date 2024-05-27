import { useLoaderData } from "react-router-dom";
import styles from "./artwork-details.module.css";
import { ItemData } from "../../../types/ItemData";
import ItemDetails from "../../../components/item-details/item-details";
import CommentSection from "../../../components/comment-section/comment-section";
import { getArtworkData } from "../../../data/sections/sections";

export function loader({ params }: { params: any }) {
  const artworkData = getArtworkData(params.artworkIdentifier);
  if (artworkData) return artworkData;
  return null;
}

export default function ArtworkDetails() {
  const artworkData = useLoaderData() as ItemData;
  return (
    <main className={styles.container}>
      <img src={artworkData.thumbnailSource} />
      <ItemDetails itemData={artworkData} />
      <CommentSection />
    </main>
  );
}
