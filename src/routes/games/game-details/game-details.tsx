import { useLoaderData } from "react-router-dom";
import { getGameData } from "../../../data/sections/sections";
import { ItemData } from "../../../types/ItemData";
import styles from "./game-details.module.css";
import ItemDetails from "../../../components/item-details/item-details";

export function loader({ params }: { params: any }) {
  const gameData = getGameData(params.gameIdentifier);
  if (gameData) return gameData;
  return null;
}

export default function GameDetails() {
  const gameData = useLoaderData() as ItemData;
  return (
    <main className={styles.container}>
      <img src={gameData.thumbnailSource} />
      <ItemDetails itemData={gameData} />
    </main>
  );
}
