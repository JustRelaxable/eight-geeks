import HomeSectionHeader from "./header/home-section-header";
import styles from "./home-section.module.css";
import HomeSectionItem from "./item/home-section-item";
import placeholderThumbnail from "./item/placeholder-home-section-item-thumbnail.avif";

export default function HomeSection() {
  return (
    <section>
      <HomeSectionHeader sectionName="Games" />
      <ul className={styles.itemContainer}>
        {Array.from(Array(10)).map((x) => (
          <li>
            <HomeSectionItem
              thumbnailSource={placeholderThumbnail}
              itemName="The Emily's Adventures"
              itemAuthor="Taha Sökmen"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
