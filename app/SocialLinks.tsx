import { SiInstagram } from "react-icons/si";

export default function SocialLinks() {
  return (
    <div className="flex gap-6 justify-center mt-6">
      {/*<a
        href="https://www.instagram.com/figurki_z_czekolady/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center hover:scale-110 transition"
      >
        <SiInstagram size={32} color="#E1306C" />
        <span className="mt-1 text-sm font-medium">Instagram</span>
      </a>*/}

    {/* Vinted */}
      <a
        href="https://www.vinted.pl/u/twoj_profil"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center hover:scale-110 transition"
      >
        <img src="/img/vinted.png" alt="Vinted" className="w-6 h-6" />
       <span className="mt-1 text-sm font-semibold font-sans">
          Vinted
        </span>
      </a>

      {/* OLX */}
      <a
        href="https://www.olx.pl/uzytkownik/twoj_profil/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center hover:scale-110 transition"
      >
       <img src="/img/olx.png" alt="OLX" className="w-6 h-6" />
        <span className="mt-1 text-sm font-semibold font-sans">OLX</span>
      </a>
  
        <a
        href="https://www.instagram.com/figurki_z_czekolady/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center hover:scale-110 transition"
      >
        <img src="/img/instagram.png" alt="Instagram" className="w-6 h-6" />
       <span className="mt-1 text-sm font-semibold font-sans">
          Instagram
        </span>
      </a>
  </div>
  );
}




   