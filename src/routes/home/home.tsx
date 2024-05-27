import { useLoaderData } from "react-router-dom";
import HomeSection from "../../components/home-section/home-section";
import { getSectionData } from "../../data/sections/sections";
import styles from "./home.module.css";
import { SectionData } from "../../types/SectionData";
import H5AudioPlayer from "react-h5-audio-player";
import { createRef, useContext, useState } from "react";
import PlayIcon from "../../components/svg/play-icon";
import StopIcon from "../../components/svg/stop-icon";
import PauseIcon from "../../components/svg/pause-icon";
import MusicPlayer from "../../components/music-player/music-player";
import MusicPlayerContext from "../../contexts/music-player-context";

export function loader() {
  const sectionData = getSectionData();
  return sectionData;
}

export default function Home() {
  const sections = useLoaderData() as SectionData[];
  const [playerVisible, setPlayerVisible] = useContext(MusicPlayerContext);

  return (
    <main
      className={`${styles.container} ${
        playerVisible ? styles.playerActive : ""
      }`}
    >
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
      <MusicPlayer />
    </main>
  );
}
