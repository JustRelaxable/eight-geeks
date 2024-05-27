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

import anUnusualBirthday from "./video-thumbnails/an-unusual-birthday.avif";
import domain from "./video-thumbnails/domain.avif";
import dontStop from "./video-thumbnails/dont-stop.avif";
import growth from "./video-thumbnails/growth.avif";
import justUnderwear from "./video-thumbnails/just-underwear.avif";
import leaveItInTheGround from "./video-thumbnails/leave-it-in-the-ground.avif";
import missingHome from "./video-thumbnails/missing-home.avif";
import myWifeTheMonster from "./video-thumbnails/mywifethemonster.avif";
import onlyThePurestMayMountMe from "./video-thumbnails/only-the-purest-may-mount-me.avif";
import theChaosClover from "./video-thumbnails/the chaos clover.avif";

import kkiRoom from "./artwork-thumbnails/2kki-room.avif";
import comicDance from "./artwork-thumbnails/comic-dance.avif";
import eastBlue from "./artwork-thumbnails/east-blue.avif";
import forestTunnel from "./artwork-thumbnails/forest-tunnel.avif";
import gasStation from "./artwork-thumbnails/gas-station.avif";
import lovely from "./artwork-thumbnails/lovely.avif";
import madmanJoe from "./artwork-thumbnails/madman-joe.avif";
import theProtagonist from "./artwork-thumbnails/the-protagonist.avif";
import theSeaAdventure from "./artwork-thumbnails/the-sea-adventure.avif";
import welcomeToNG from "./artwork-thumbnails/welcome-to-ng.avif";

import devilsGun from "./cover-thumbnails/devilsgun.avif";
import disconnected from "./cover-thumbnails/disconnected.avif";
import discovery from "./cover-thumbnails/discovery.avif";
import mountain from "./cover-thumbnails/mountain.avif";
import myTurn from "./cover-thumbnails/myturn.avif";
import pain from "./cover-thumbnails/pain.avif";
import paradise from "./cover-thumbnails/paradise.avif";
import rapgod from "./cover-thumbnails/rapgod.avif";
import ride from "./cover-thumbnails/ride.avif";
import sunshine from "./cover-thumbnails/sunshine.avif";

const sections: SectionData[] = [
  {
    sectionName: "games",
    SectionLogo: GameSectionLogo,
    items: [
      {
        thumbnailSource: aquaCop,
        itemName: "Aqua Cop",
        itemAuthor: "HikBoo Studios",
        itemInfo: [
          ["Developer", "HikBoo Studios"],
          ["Released", "May 2024"],
          ["Last Updated", "May 2024"],
          ["Technology", "HTML5"],
        ],
      },
      {
        thumbnailSource: blockOps,
        itemName: "Bloc Ops",
        itemAuthor: "PixelPulse Games",
        itemInfo: [
          ["Developer", "PixelPulse Games"],
          ["Released", "September 2023"],
          ["Last Updated", "April 2024"],
          ["Technology", "Unity Engine"],
        ],
      },
      {
        thumbnailSource: voxiom,
        itemName: "Voxiom",
        itemAuthor: "Dreamscape Creations",
        itemInfo: [
          ["Developer", "Dreamscape Creations"],
          ["Released", "January 2024"],
          ["Last Updated", "March 2024"],
          ["Technology", "Unreal Engine 4"],
        ],
      },
      {
        thumbnailSource: crashStunt,
        itemName: "Crash Stunt",
        itemAuthor: "Neon Rain Studios",
        itemInfo: [
          ["Developer", "Neon Rain Studios"],
          ["Released", "June 2023"],
          ["Last Updated", "February 2024"],
          ["Technology", "GameMaker Studio 2"],
        ],
      },
      {
        thumbnailSource: forkNSausage,
        itemName: "Fork N Sausage",
        itemAuthor: "RetroByte Games",
        itemInfo: [
          ["Developer", "RetroByte Games"],
          ["Released", "October 2022"],
          ["Last Updated", "January 2023"],
          ["Technology", "Godot Engine"],
        ],
      },
      {
        thumbnailSource: gridPunk,
        itemName: "Grid Punk",
        itemAuthor: "Nebula Forge",
        itemInfo: [
          ["Developer", "Nebula Forge"],
          ["Released", "August 2023"],
          ["Last Updated", "December 2023"],
          ["Technology", "Construct 3"],
        ],
      },
      {
        thumbnailSource: colorCoin,
        itemName: "Color Coin",
        itemAuthor: "Eclipse Studios",
        itemInfo: [
          ["Developer", "Eclipse Studios"],
          ["Released", "March 2024"],
          ["Last Updated", "May 2024"],
          ["Technology", "CryEngine"],
        ],
      },
      {
        thumbnailSource: miniGolfClub,
        itemName: "Mini Golf Club",
        itemAuthor: "Vortex Interactive",
        itemInfo: [
          ["Developer", "Vortex Interactive"],
          ["Released", "November 2023"],
          ["Last Updated", "February 2024"],
          ["Technology", "Phaser Framework"],
        ],
      },
      {
        thumbnailSource: mrRacer,
        itemName: "Mr Racer",
        itemAuthor: "Spectral Games",
        itemInfo: [
          ["Developer", "Spectral Games"],
          ["Released", "April 2024"],
          ["Last Updated", "April 2024"],
          ["Technology", "Defold Engine"],
        ],
      },
      {
        thumbnailSource: trainDrift,
        itemName: "Train Drift",
        itemAuthor: "LunarLabs",
        itemInfo: [
          ["Developer", "LunarLabs"],
          ["Released", "July 2023"],
          ["Last Updated", "October 2023"],
          ["Technology", "LibGDX"],
        ],
      },
    ],
  },
  {
    sectionName: "videos",
    SectionLogo: VideoSectionLogo,
    items: [
      {
        thumbnailSource: anUnusualBirthday,
        itemName: "An Unusual Birthday",
        itemAuthor: "Lunar",
        itemInfo: [
          ["Creator", "Lunar"],
          ["Uploaded", "July 2023"],
        ],
      },
      {
        thumbnailSource: domain,
        itemName: "Domain",
        itemAuthor: "AstroPhile",
        itemInfo: [
          ["Creator", "AstroPhile"],
          ["Uploaded", "January 2024"],
        ],
      },
      {
        thumbnailSource: dontStop,
        itemName: "Don't Stop",
        itemAuthor: "StarDustGazer",
        itemInfo: [
          ["Creator", "StarDustGazer"],
          ["Uploaded", "November 2023"],
        ],
      },
      {
        thumbnailSource: growth,
        itemName: "Growth",
        itemAuthor: "VisionaryDreamer",
        itemInfo: [
          ["Creator", "VisionaryDreamer"],
          ["Uploaded", "April 2024"],
        ],
      },
      {
        thumbnailSource: justUnderwear,
        itemName: "Just Underwear",
        itemAuthor: "ImaginationInMotion",
        itemInfo: [
          ["Creator", "ImaginationInMotion"],
          ["Uploaded", "September 2023"],
        ],
      },
      {
        thumbnailSource: leaveItInTheGround,
        itemName: "Leave it in the Ground",
        itemAuthor: "EarthlyExplorer",
        itemInfo: [
          ["Creator", "EarthlyExplorer"],
          ["Uploaded", "December 2023"],
        ],
      },
      {
        thumbnailSource: missingHome,
        itemName: "Missing Home",
        itemAuthor: "CosmicWanderer",
        itemInfo: [
          ["Creator", "CosmicWanderer"],
          ["Uploaded", "June 2023"],
        ],
      },
      {
        thumbnailSource: myWifeTheMonster,
        itemName: "My Wife the Monster",
        itemAuthor: "FantasticTales",
        itemInfo: [
          ["Creator", "FantasticTales"],
          ["Uploaded", "February 2024"],
        ],
      },
      {
        thumbnailSource: onlyThePurestMayMountMe,
        itemName: "Only the Purest may Mount Me",
        itemAuthor: "DreamWeaver",
        itemInfo: [
          ["Creator", "DreamWeaver"],
          ["Uploaded", "August 2023"],
        ],
      },
      {
        thumbnailSource: theChaosClover,
        itemName: "The Chaos Clover",
        itemAuthor: "ImaginaryRealities",
        itemInfo: [
          ["Creator", "ImaginaryRealities"],
          ["Uploaded", "October 2023"],
        ],
      },
    ],
  },
  {
    sectionName: "artworks",
    SectionLogo: ArtworkSectionLogo,
    items: [
      {
        thumbnailSource: kkiRoom,
        itemName: "2kki Room",
        itemAuthor: "Luna",
        itemInfo: [
          ["Artist", "Luna"],
          ["Published", "July 2023"],
        ],
      },
      {
        thumbnailSource: comicDance,
        itemName: "Comic Dance",
        itemAuthor: "ArtsyDoodle",
        itemInfo: [
          ["Artist", "ArtsyDoodle"],
          ["Published", "February 2024"],
        ],
      },
      {
        thumbnailSource: eastBlue,
        itemName: "East Blue",
        itemAuthor: "ArtisticWaves",
        itemInfo: [
          ["Artist", "ArtisticWaves"],
          ["Published", "June 2023"],
        ],
      },
      {
        thumbnailSource: forestTunnel,
        itemName: "Forest Tunnel",
        itemAuthor: "NatureCanvas",
        itemInfo: [
          ["Artist", "NatureCanvas"],
          ["Published", "September 2023"],
        ],
      },
      {
        thumbnailSource: gasStation,
        itemName: "Gas Station",
        itemAuthor: "UrbanSketcher",
        itemInfo: [
          ["Artist", "UrbanSketcher"],
          ["Published", "April 2024"],
        ],
      },
      {
        thumbnailSource: lovely,
        itemName: "Lovely",
        itemAuthor: "SerenePalette",
        itemInfo: [
          ["Artist", "SerenePalette"],
          ["Published", "August 2023"],
        ],
      },
      {
        thumbnailSource: madmanJoe,
        itemName: "Madman Joe",
        itemAuthor: "WhimsicalDreams",
        itemInfo: [
          ["Artist", "WhimsicalDreams"],
          ["Published", "March 2024"],
        ],
      },
      {
        thumbnailSource: theProtagonist,
        itemName: "The Protagonist",
        itemAuthor: "CharacterCraft",
        itemInfo: [
          ["Artist", "CharacterCraft"],
          ["Published", "October 2023"],
        ],
      },
      {
        thumbnailSource: theSeaAdventure,
        itemName: "The Sea Adventure",
        itemAuthor: "OceanWhispers",
        itemInfo: [
          ["Artist", "OceanWhispers"],
          ["Published", "November 2023"],
        ],
      },
      {
        thumbnailSource: welcomeToNG,
        itemName: "Welcome to NG",
        itemAuthor: "DigitalDreamer",
        itemInfo: [
          ["Artist", "DigitalDreamer"],
          ["Published", "December 2023"],
        ],
      },
    ],
  },
  {
    sectionName: "musics",
    SectionLogo: MusicSectionLogo,
    items: [
      {
        thumbnailSource: devilsGun,
        itemName: "Devil's Gun",
        itemAuthor: "Ethan Johnson",
        itemInfo: [
          ["Artist", "Ethan Johnson"],
          ["Published", "December 2023"],
        ],
      },
      {
        thumbnailSource: disconnected,
        itemName: "Disconnected",
        itemAuthor: "Olivia Anderson",
        itemInfo: [
          ["Artist", "Olivia Anderson"],
          ["Published", "February 2024"],
        ],
      },
      {
        thumbnailSource: discovery,
        itemName: "Discovery",
        itemAuthor: "Lucas Miller",
        itemInfo: [
          ["Artist", "Lucas Miller"],
          ["Published", "June 2023"],
        ],
      },
      {
        thumbnailSource: mountain,
        itemName: "Mountain",
        itemAuthor: "Isabella Thompson",
        itemInfo: [
          ["Artist", "Isabella Thompson"],
          ["Published", "September 2023"],
        ],
      },
      {
        thumbnailSource: myTurn,
        itemName: "My Turn",
        itemAuthor: "Liam Martinez",
        itemInfo: [
          ["Artist", "Liam Martinez"],
          ["Published", "April 2024"],
        ],
      },
      {
        thumbnailSource: pain,
        itemName: "Pain",
        itemAuthor: "Sophia Brown",
        itemInfo: [
          ["Artist", "Sophia Brown"],
          ["Published", "August 2023"],
        ],
      },
      {
        thumbnailSource: paradise,
        itemName: "Paradise",
        itemAuthor: "Noah Taylor",
        itemInfo: [
          ["Artist", "Noah Taylor"],
          ["Published", "March 2024"],
        ],
      },
      {
        thumbnailSource: rapgod,
        itemName: "Rap God",
        itemAuthor: "Ava Wilson",
        itemInfo: [
          ["Artist", "Ava Wilson"],
          ["Published", "October 2023"],
        ],
      },
      {
        thumbnailSource: ride,
        itemName: "Ride",
        itemAuthor: "Logan Harris",
        itemInfo: [
          ["Artist", "Logan Harris"],
          ["Published", "November 2023"],
        ],
      },
      {
        thumbnailSource: sunshine,
        itemName: "Sunshine",
        itemAuthor: "Emily Clark",
        itemInfo: [
          ["Artist", "Emily Clark"],
          ["Published", "December 2023"],
        ],
      },
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

export function getVideoData(videoIdentifier: string) {
  return sections
    .find((section) => section.sectionName === "videos")
    ?.items.find((item) => {
      return item.itemName.toLowerCase().replace(" ", "-") === videoIdentifier;
    });
}

export function getArtworkData(artworkIdentifier: string) {
  return sections
    .find((section) => section.sectionName === "artworks")
    ?.items.find((item) => {
      return (
        item.itemName.toLowerCase().replace(" ", "-") === artworkIdentifier
      );
    });
}
