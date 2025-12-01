import Image from "next/image";
import BrazilImage from "../../images/brazil-flag.svg";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

import "./card-profile.css";

const CardProfile = () => {
  return (
    <div className="cardProfile">
      <div className="cardProfile__status">
        <div className="cardProfile__status--division">
          <div className="cardProfile__status--ping animate-ping rounded-full bg-green-400 h-[8px] w-[8px] inline-block mr-2 absolute top-2.5"></div>

          <div className="cardProfile__status--circle rounded-full bg-green-400 h-[8px] w-[8px] inline-block mr-2"></div>
        </div>
        <h3 className="cardProfile__status--text">open to work</h3>
      </div>
      <div className="cardProfile__name">
        <h1 className="cardProfile__name--personal">
          Felipe Panebianco Pontin
        </h1>
        <span className="cardProfile__name--global">@felipepontin</span>
      </div>
      <p className="cardProfile__ocupation">
        Front End Developer & UI/UX Designer
      </p>
      <div className="cardProfile__location">
        <Image
          src={BrazilImage}
          width={16}
          height={16}
          className="cardProfile__location--image"
          alt="Brazil flag image"
        />
        <span className="cardProfile__location--name">São Paulo - SP</span>
      </div>
      <div className="cardProfile__icons">
        <FiGithub className="cardProfile__icons--icon" />
        <FiLinkedin className="cardProfile__icons--icon" />
        <FiMail className="cardProfile__icons--icon" />
      </div>
    </div>
  );
};

export default CardProfile;
