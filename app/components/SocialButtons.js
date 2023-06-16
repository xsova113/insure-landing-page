import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

const SocialButtons = () => {
  return (
    <div className="flex gap-4 mb-10">
      <AiFillFacebook
        size={30}
        className="fill-[#837D87] hover:fill-[#2D2640] transition cursor-pointer hover:-translate-y-1"
      />
      <AiOutlineTwitter
        size={30}
        className="fill-[#837D87] hover:fill-[#2D2640] transition cursor-pointer hover:-translate-y-1"
      />
      <BsPinterest
        size={30}
        className="fill-[#837D87] hover:fill-[#2D2640] transition cursor-pointer hover:-translate-y-1"
      />
      <AiOutlineInstagram
        size={30}
        className="fill-[#837D87] hover:fill-[#2D2640] transition cursor-pointer hover:-translate-y-1"
      />
    </div>
  );
};

export default SocialButtons;
