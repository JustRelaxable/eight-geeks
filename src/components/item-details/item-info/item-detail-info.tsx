import styles from "./item-detail-info.module.css";

export default function ItemDetailInfo({
  infoHeaderText,
  infoText,
}: {
  infoHeaderText: string;
  infoText: string;
}) {
  return (
    <p>
      <span className={styles.headerText}>{infoHeaderText}:</span>
      {" " + infoText}
    </p>
  );
}
