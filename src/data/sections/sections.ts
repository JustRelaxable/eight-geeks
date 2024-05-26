import GameSectionLogo from "../../components/svg/game-section-logo";
import { SectionData } from "../../types/SectionData";
import aquaCop from "./game-thumbnails/aqua-cop_16x9-cover.avif";
import VideoSectionLogo from "../../components/svg/video-section-logo";
import ArtworkSectionLogo from "../../components/svg/artwork-section-logo";
import MusicSectionLogo from "../../components/svg/music-section-logo";

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
