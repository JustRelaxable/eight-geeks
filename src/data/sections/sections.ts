import GameSectionLogo from "../../components/svg/game-section-logo";
import { SectionData } from "../../types/SectionData";
import VideoSectionLogo from "../../components/svg/video-section-logo";
import ArtworkSectionLogo from "../../components/svg/artwork-section-logo";
import MusicSectionLogo from "../../components/svg/music-section-logo";

import aquaCop from "./game-thumbnails/aqua-cop_16x9-cover.avif";
import blockOps from "./game-thumbnails/blocops_16x9-cover.avif";
import voxiom from "./game-thumbnails/cover_16x9-1714408559317.avif";
import crashStunt from "./game-thumbnails/crash-stunt-cover.avif";
import forkNSausage from "./game-thumbnails/fork-n-sausage_16x9-cover.avif";
import gridPunk from "./game-thumbnails/gridpunk---3v3-battle-royale_16x9-cover.avif";
import colorCoin from "./game-thumbnails/icolorcoin-sort-puzzle_16x9-cover.avif";
import miniGolfClub from "./game-thumbnails/mini-golf-club_16x9-cover.avif";
import mrRacer from "./game-thumbnails/mr-racer---car-racing_16x9-cover.avif";
import trainDrift from "./game-thumbnails/train-drift_16x9-cover.avif";

const sections: SectionData[] = [
  {
    sectionName: "games",
    SectionLogo: GameSectionLogo,
    items: [
      {
        thumbnailSource: aquaCop,
        itemName: "Aqua Cop",
        itemAuthor: "Crazy8",
        itemInfo: [
          ["Developer", "HikBoo Studios"],
          ["Released", "May 2024"],
          ["Last Updated", "May 2024"],
          ["Technology", "HTML5"],
        ],
      },
      { thumbnailSource: blockOps, itemName: "Bloc Ops", itemAuthor: "Crazy8" },
      { thumbnailSource: voxiom, itemName: "Voxiom", itemAuthor: "Crazy8" },
      {
        thumbnailSource: crashStunt,
        itemName: "Crash Stunt",
        itemAuthor: "Crazy8",
      },
      {
        thumbnailSource: forkNSausage,
        itemName: "Fork N Sausage",
        itemAuthor: "Crazy8",
      },
      {
        thumbnailSource: gridPunk,
        itemName: "Grid Punk",
        itemAuthor: "Crazy8",
      },
      {
        thumbnailSource: colorCoin,
        itemName: "Color Coin",
        itemAuthor: "Crazy8",
      },
      {
        thumbnailSource: miniGolfClub,
        itemName: "Mini Golf Club",
        itemAuthor: "Crazy8",
      },
      { thumbnailSource: mrRacer, itemName: "Mr Racer", itemAuthor: "Crazy8" },
      {
        thumbnailSource: trainDrift,
        itemName: "Train Drift",
        itemAuthor: "Crazy8",
      },
    ],
  },
  {
    sectionName: "videos",
    SectionLogo: VideoSectionLogo,
    items: [
      { thumbnailSource: aquaCop, itemName: "Aqua Cop", itemAuthor: "Crazy8" },
      { thumbnailSource: aquaCop, itemName: "Aqua Cop", itemAuthor: "Crazy8" },
      { thumbnailSource: aquaCop, itemName: "Aqua Cop", itemAuthor: "Crazy8" },
      { thumbnailSource: aquaCop, itemName: "Aqua Cop", itemAuthor: "Crazy8" },
      { thumbnailSource: aquaCop, itemName: "Aqua Cop", itemAuthor: "Crazy8" },
      { thumbnailSource: aquaCop, itemName: "Aqua Cop", itemAuthor: "Crazy8" },
      { thumbnailSource: aquaCop, itemName: "Aqua Cop", itemAuthor: "Crazy8" },
      { thumbnailSource: aquaCop, itemName: "Aqua Cop", itemAuthor: "Crazy8" },
      { thumbnailSource: aquaCop, itemName: "Aqua Cop", itemAuthor: "Crazy8" },
      { thumbnailSource: aquaCop, itemName: "Aqua Cop", itemAuthor: "Crazy8" },
    ],
  },
  {
    sectionName: "artworks",
    SectionLogo: ArtworkSectionLogo,
    items: [
      { thumbnailSource: aquaCop, itemName: "Aqua Cop", itemAuthor: "Crazy8" },
      { thumbnailSource: aquaCop, itemName: "Aqua Cop", itemAuthor: "Crazy8" },
      { thumbnailSource: aquaCop, itemName: "Aqua Cop", itemAuthor: "Crazy8" },
      { thumbnailSource: aquaCop, itemName: "Aqua Cop", itemAuthor: "Crazy8" },
      { thumbnailSource: aquaCop, itemName: "Aqua Cop", itemAuthor: "Crazy8" },
      { thumbnailSource: aquaCop, itemName: "Aqua Cop", itemAuthor: "Crazy8" },
      { thumbnailSource: aquaCop, itemName: "Aqua Cop", itemAuthor: "Crazy8" },
      { thumbnailSource: aquaCop, itemName: "Aqua Cop", itemAuthor: "Crazy8" },
      { thumbnailSource: aquaCop, itemName: "Aqua Cop", itemAuthor: "Crazy8" },
      { thumbnailSource: aquaCop, itemName: "Aqua Cop", itemAuthor: "Crazy8" },
    ],
  },
  {
    sectionName: "musics",
    SectionLogo: MusicSectionLogo,
    items: [
      { thumbnailSource: aquaCop, itemName: "Aqua Cop", itemAuthor: "Crazy8" },
      { thumbnailSource: aquaCop, itemName: "Aqua Cop", itemAuthor: "Crazy8" },
      { thumbnailSource: aquaCop, itemName: "Aqua Cop", itemAuthor: "Crazy8" },
      { thumbnailSource: aquaCop, itemName: "Aqua Cop", itemAuthor: "Crazy8" },
      { thumbnailSource: aquaCop, itemName: "Aqua Cop", itemAuthor: "Crazy8" },
      { thumbnailSource: aquaCop, itemName: "Aqua Cop", itemAuthor: "Crazy8" },
      { thumbnailSource: aquaCop, itemName: "Aqua Cop", itemAuthor: "Crazy8" },
      { thumbnailSource: aquaCop, itemName: "Aqua Cop", itemAuthor: "Crazy8" },
      { thumbnailSource: aquaCop, itemName: "Aqua Cop", itemAuthor: "Crazy8" },
      { thumbnailSource: aquaCop, itemName: "Aqua Cop", itemAuthor: "Crazy8" },
    ],
  },
];

export function getSectionData() {
  return sections;
}

export function getGameData(gameIdentifier: string) {
  return sections
    .find((section) => section.sectionName === "games")
    ?.items.find((item) => {
      return item.itemName.toLowerCase().replace(" ", "-") === gameIdentifier;
    });
}
