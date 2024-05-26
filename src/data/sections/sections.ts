import GameSectionLogo from "../../components/svg/game-section-logo";
import { SectionData } from "../../types/SectionData";
import aquaCop from "./game-thumbnails/aqua-cop_16x9-cover.avif";
import VideoSectionLogo from "../../components/svg/video-section-logo";
import ArtworkSectionLogo from "../../components/svg/artwork-section-logo";
import MusicSectionLogo from "../../components/svg/music-section-logo";

const sections: SectionData[] = [
  {
    sectionName: "games",
    sectionLogo: GameSectionLogo,
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
    sectionName: "videos",
    sectionLogo: VideoSectionLogo,
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
    sectionLogo: ArtworkSectionLogo,
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
    sectionLogo: MusicSectionLogo,
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
