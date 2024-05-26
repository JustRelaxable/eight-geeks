import { useLoaderData } from "react-router-dom";
import HomeSection from "../../components/home-section/home-section";
import { getSectionData } from "../../data/sections/sections";
import styles from "./home.module.css";
import { SectionData } from "../../types/SectionData";

export function loader() {
  const sectionData = getSectionData();
  return sectionData;
}

export default function Home() {
  const sections = useLoaderData() as SectionData[];
  return (
    <main className={styles.container}>
      {sections.map((section) => {
        return (
          <HomeSection
            sectionName={section.sectionName}
            SectionLogo={section.SectionLogo}
            items={section.items}
            key={section.sectionName}
          />
        );
      })}
    </main>
  );
}
