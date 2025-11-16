import { VelocityScrollLogos } from "./scroll-based-velocity";

const logos = [
  {
    src: "/image.png", // Replace with actual logo paths
    alt: "Ubuntu Portal",
    width: 120,
    height: 40,
  },
  {
    src: "/Parkklywhite.png",
    alt: "Parkkly",
    width: 120,
    height: 40,
  },
  {
    src: "/omnifood-logo.png",
    alt: "OmniFood",
    width: 120,
    height: 40,
  },
  {
    src: "/Spacex.png",
    alt: "SpaceX",
    width: 120,
    height: 40,
  },
  {
    src: "/Inhive.png",
    alt: "InHIVE",
    width: 120,
    height: 40,
  },
  {
    src: "/EduTest.png",
    alt: "Edutest",
    width: 120,
    height: 40,
  },
  {
    src: "/masjidlinkicon.png",
    alt: "Masjidlink",
    width: 120,
    height: 40,
  },
  {
    src: "/akinico.png",
    alt: "Akinsemoyin",
    width: 100,
    height: 40,
  },
];

export default function TrustedPartners() {
  return (
    <section className=" ">
      <div className=" mx-auto md:px-5">
        <VelocityScrollLogos
          logos={logos}
          baseVelocity={8}
          className="py-4  rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}
