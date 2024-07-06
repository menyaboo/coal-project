import {ISocialLinks} from "../../interfaces/links";
import {PiTelegramLogo} from "react-icons/pi";
import {FaWhatsapp} from "react-icons/fa";

const socialLinks: ISocialLinks[] = [
  {
    name: "Telegram",
    url: "",
    svg: <PiTelegramLogo className="text-blue-300 size-5"/>,
  },
  {
    name: "Whatsapp",
    url: "",
    svg: <FaWhatsapp className="text-green-500 size-5"/>,
  }
]

export {
  socialLinks
}