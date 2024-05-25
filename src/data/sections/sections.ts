import { SectionData } from "../../types/SectionData";
import aquaCop from "./game-thumbnails/aqua-cop_16x9-cover.avif";

const sections: SectionData[] = [
  {
    sectionName: "games",
    items: [
      { thumbnailSource: aquaCop, itemName: "Aqua Cop", itemAuthor: "Crazy8" },
    ],
  },
];

export function getSectionData() {
  return sections;
}
