import { ItemData } from "../../types/ItemData";
import styles from "./items-details.module.css";

export default function ItemDetails({ itemData }: { itemData: ItemData }) {
  console.log(itemData);
  return (
    <div className={styles.container}>
      <header>
        <h1 className={styles.itemHeaderText}>{itemData.itemName}</h1>
      </header>
      <p>
        Click/tap to begin, move on, etc. Grab a kart to inspect it or just hit
        the garage button if you can't catch one. The track button takes you to
        a new location. Smack camera to toggle different views of the track
        (disables kart select). Weather decreases map visibility so the little
        guys are easier to see. Radio switches the music on and off.
      </p>
    </div>
  );
}
