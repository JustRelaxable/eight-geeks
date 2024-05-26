import { SVGProps } from "react";
import { ItemData } from "./ItemData";

export type SectionData = {
  sectionName: string;
  sectionLogo: React.FC;
  items: ItemData[];
};
