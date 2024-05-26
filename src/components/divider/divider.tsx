import styles from "./divider.module.css";

export default function Divider({ color }: { color?: string }) {
  return <div style={{ backgroundColor: color }} className={styles.line}></div>;
}
