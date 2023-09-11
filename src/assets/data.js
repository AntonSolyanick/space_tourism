import douglasImage from "../assets/crew/image-douglas-hurley.png";
import markImage from "../assets/crew/image-mark-shuttleworth.png";
import victorImage from "../assets/crew/image-victor-glover.png";
import anoushehImage from "../assets/crew/image-anousheh-ansari.png";
import launchImage from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spacePortImage from "../assets/technology/image-spaceport-portrait.jpg";
import spaceCapsuleImage from "../assets/technology/image-space-capsule-portrait.jpg";

export const destinationLinks = ["moon", "mars", "europa", "titan"];

export const crewData = [
  {
    jobTitle: "COMMANDER",
    name: "Douglas Hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: douglasImage,
    imageWidth: "446",
    imageHieght: "559",
    index: 0,
  },
  {
    jobTitle: "MISSION SPECIALIST",
    name: "MARK SHUTTLEWORTH",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: markImage,
    imageWidth: "416",
    imageHieght: "600",
    index: 1,
  },
  {
    jobTitle: "PILOT",
    name: "VICTOR GLOVER",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    image: victorImage,
    imageWidth: "451",
    imageHieght: "554",
    index: 2,
  },
  {
    jobTitle: "FLIGHT ENGINEER",
    name: "ANOUSHEH ANSARI",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: anoushehImage,
    imageWidth: "503",
    imageHieght: "496",
    index: 3,
  },
];

export const technologyData = [
  {
    title: "LAUNCH VEHICLE",
    text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    image: launchImage,
    index: 0,
  },
  {
    title: "SPACEPORT",
    text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    image: spacePortImage,
    index: 1,
  },
  {
    title: "SPACE CAPSULE",
    text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image: spaceCapsuleImage,
    index: 2,
  },
];
