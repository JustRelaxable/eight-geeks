import { createRef, useContext, useState } from "react";
import styles from "./music-player.module.css";
import H5AudioPlayer from "react-h5-audio-player";
import placeholderThumbnail from "../../data/sections/cover-thumbnails/devilsgun.avif";
import StopIcon from "../svg/stop-icon";
import PauseIcon from "../svg/pause-icon";
import PlayIcon from "../svg/play-icon";
import AudioPlayer from "react-h5-audio-player";
import MusicPlayerContext from "../../contexts/music-player-context";

export default function MusicPlayer() {
  const [playerVisible, setPlayerVisible] = useContext(MusicPlayerContext);
  const [playerPlaying, setPlayerPlaying] = useState(false);
  const [percentagePlayed, setPercentagePlayed] = useState(0);
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
    <>
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
    </>
  );
}
