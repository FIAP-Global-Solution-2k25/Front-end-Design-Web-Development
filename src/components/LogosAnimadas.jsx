import LogoLoop from "./LogoLoop.jsx";

import fiap from "../assets/fiap-logo.png";
import ibm from "../assets/ibm-logo.png";
import inpe from "../assets/inpe-logo.png";
import medicina from "../assets/medicina-logo.png";

const imageLogos = [
  { src: fiap, alt: "FIAP" },
  { src: ibm, alt: "IBM" },
  { src: inpe, alt: "INPE" },
  { src: medicina, alt: "Medicina" }
];

export default function LogosAnimadas() {
  return (
    <div className="w-full py-6 bg-black flex justify-center">
      <LogoLoop
        logos={imageLogos}
        speed={20}
        direction="left"
        gap={40}
        logoHeight={30}
        scaleOnHover={true}
      />
    </div>
  );
}