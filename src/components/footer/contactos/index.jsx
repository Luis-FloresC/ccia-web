import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";
import { FaMapMarkerAlt } from "react-icons/fa";

import "./index.css";

export const links = [
  {
    title: "WhatsApp",
    href: "https://wa.link/i1uvfo",
    icon: ImWhatsapp,
  },
  {
    title: "Correo electrónico",
    href: "mailto:admon.ccia@gmail.com?subject=Consulta Web",
    icon: GrMail,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/CCIA1936",
    icon: BsFacebook,
  },
  {
    title: "Twitter",
    href: "https://www.twitter.com/CCIA_0101",
    icon: BsTwitter,
  },
  {
    title: "YouTube",
    href: "https://youtube.com/@camaradecomercioeindustria3307",
    icon: BsYoutube,
  },
  {
    title:
      "Residencial La Florida, entrada a la Escuela Bilingüe Brassavola, contiguo a Ciudad Mujer, 31101, La Ceiba, Honduras",
    href: "https://goo.gl/maps/tgercABAuCf6bX38A",
    icon: FaMapMarkerAlt,
  },
];

export function Contactos() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      {links.map((link, index) => (
        <a
          className="d-flex justify-content-center align-items-center me-3 text-white fs-5 contact"
          key={index}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          title={link.title}
        >
          <link.icon />
        </a>
      ))}
    </div>
  );
}
