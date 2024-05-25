import { ItemData } from "../../types/ItemData";
import HomeSectionHeader from "./header/home-section-header";
import styles from "./home-section.module.css";
import HomeSectionItem from "./item/home-section-item";

export default function HomeSection({
  sectionName,
  items,
}: {
  sectionName: string;
  items: ItemData[];
}) {
  return (
    <section>
      <HomeSectionHeader sectionName={sectionName} />
      <ul className={styles.itemContainer}>
        {items.map((item) => (
          <li>
            <HomeSectionItem
              thumbnailSource={item.thumbnailSource}
              itemName={item.itemName}
              itemAuthor={item.itemAuthor}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
