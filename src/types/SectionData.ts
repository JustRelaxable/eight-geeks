import { SVGProps } from "react";
import { ItemData } from "./ItemData";

export type SectionData = {
  sectionName: string;
  SectionLogo: React.FC;
  items: ItemData[];
};
