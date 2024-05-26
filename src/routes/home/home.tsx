import { useLoaderData } from "react-router-dom";
import HomeSection from "../../components/home-section/home-section";
import { getSectionData } from "../../data/sections/sections";
import styles from "./home.module.css";
import { SectionData } from "../../types/SectionData";
import H5AudioPlayer from "react-h5-audio-player";
import placeholderThumbnail from "../../data/sections/cover-thumbnails/devilsgun.avif";
import { createRef, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import PlayIcon from "../../components/svg/play-icon";
import StopIcon from "../../components/svg/stop-icon";
import PauseIcon from "../../components/svg/pause-icon";

export function loader() {
  const sectionData = getSectionData();
  return sectionData;
}

export default function Home() {
  const [playerVisible, setPlayerVisible] = useState(true);
  const [playerPlaying, setPlayerPlaying] = useState(false);
  const [percentagePlayed, setPercentagePlayed] = useState(0);
  const sections = useLoaderData() as SectionData[];
  const player = createRef<H5AudioPlayer>();
  const handleListen = (e: any) => {
    if (player.current) {
      const audioElement = player.current.audio.current;
      if (audioElement) {
        const percentage =
          (audioElement.currentTime / audioElement.duration) * 100;
        setPercentagePlayed(percentage);
      }
    }
  };
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
      {playerVisible && (
        <div className={styles.audioPlayerContainer}>
          <div className={styles.thumbnailArtistContainer}>
            <img src={placeholderThumbnail} className={styles.coverThumbnail} />
            <div>
              <p>Song name</p>
              <p className={styles.artistName}>Artist name</p>
            </div>
          </div>
          <div className={styles.controlsContainer}>
            <StopIcon
              onClick={(event) => {
                if (playerPlaying) player.current?.togglePlay(event);
                setPlayerVisible(false);
              }}
            />
            {playerPlaying ? (
              <PauseIcon
                onClick={(event) => {
                  player.current?.togglePlay(event);
                  setPlayerPlaying(false);
                }}
              />
            ) : (
              <PlayIcon
                onClick={(event) => {
                  player.current?.togglePlay(event);
                  setPlayerPlaying(true);
                }}
              />
            )}
          </div>
          <span
            style={{ width: `${percentagePlayed}%` }}
            className={styles.progressBar}
          ></span>
        </div>
      )}
      <AudioPlayer
        showJumpControls={false}
        showDownloadProgress={false}
        layout="horizontal"
        ref={player}
        onListen={handleListen}
        src="https://ia601400.us.archive.org/20/items/pkmn-rgby-soundtrack/Disc%201%2F02%20-%20Title%20Screen.mp3"
        style={{ display: "none" }}
      />
    </main>
  );
}

/*
      <H5AudioPlayer
        showJumpControls={false}
        showDownloadProgress={false}
        layout="horizontal"
      />
      https://ia601400.us.archive.org/20/items/pkmn-rgby-soundtrack/Disc%201%2F02%20-%20Title%20Screen.mp3
*/
