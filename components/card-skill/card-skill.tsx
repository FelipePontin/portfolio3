import Image from "next/image";
import type { StaticImageData } from "next/image";

import "./card-skill.css";

export interface ICardSkillProps {
  image?: string | StaticImageData;
  name?: string;
}

export interface ICardSkill {
  title?: string;
  cards?: ICardSkillProps[];
}

const CardSkill = ({ title, cards }: ICardSkill) => {
  return (
    <div className="cardSkill">
      <h1 className="cardSkill__title">{title}</h1>

      <div className="cardSkill__container">
        {cards?.map((card, index) => {
          return (
            <div className="cardSkill__content" key={`${card.name}_${index}`}>
              <Image
                className="cardSkill__image"
                width={18}
                height={18}
                src={card.image || ""}
                alt={""}
              ></Image>
              <p className="cardSkill__name">{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardSkill;
