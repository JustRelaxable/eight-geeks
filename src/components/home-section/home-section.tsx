import { ItemData } from "../../types/ItemData";
import HomeSectionHeader from "./header/home-section-header";
import styles from "./home-section.module.css";
import HomeSectionItem from "./item/home-section-item";
import HomeSectionMusicItem from "./square-item/home-section-music-item";

export default function HomeSection({
  sectionName,
  SectionLogo,
  items,
}: {
  sectionName: string;
  SectionLogo: React.FC;
  items: ItemData[];
}) {
  return (
    <section className={styles.container}>
      <HomeSectionHeader sectionName={sectionName} SectionLogo={SectionLogo} />
      <ul className={styles.itemContainer}>
        {items.map((item, index) => {
          if (sectionName === "musics")
            return (
              <HomeSectionMusicItem
                thumbnailSource={item.thumbnailSource}
                itemName={item.itemName}
                itemAuthor={item.itemAuthor}
                sectionName={sectionName}
              />
            );
          else
            return (
              <li>
                <HomeSectionItem
                  thumbnailSource={item.thumbnailSource}
                  itemName={item.itemName}
                  itemAuthor={item.itemAuthor}
                  sectionName={sectionName}
                />
              </li>
            );
        })}
      </ul>
    </section>
  );
}
