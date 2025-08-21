import { SiInstagram, SiVinted, SiOlx } from "react-icons/si";

export default function SocialLinks() {
  return (
    <div className="flex gap-6 justify-center mt-6">
      <a
        href="https://www.instagram.com/figurki_z_czekolady/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center hover:scale-110 transition"
      >
        <SiInstagram size={32} color="#E1306C" />
        <span className="mt-1 text-sm font-medium">Instagram</span>
      </a>
      <a
        href="https://www.vinted.pl/u/twoj_profil"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center hover:scale-110 transition"
      >
        <SiVinted size={32} color="#6DCF72" />
        <span className="mt-1 text-sm font-medium">Vinted</span>
      </a>
      <a
        href="https://www.olx.pl/u/twoj_profil"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center hover:scale-110 transition"
      >
        <SiOlx size={32} color="#f7a400" />
        <span className="mt-1 text-sm font-medium">OLX</span>
      </a>
    </div>
  );
}
