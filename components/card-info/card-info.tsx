import Image from "next/image";
import "./card-info.css";

export interface ICardProps {
  image?: string;
  company?: string;
  ocupation?: string;
  date?: string;
  projectType?: string;
}

export interface ICardInfo {
  title: string;
  cards: ICardProps[];
}

const CardInfo = ({ title, cards }: ICardInfo) => {
  return (
    <div className="cardInfo">
      <h1 className="cardInfo__title">{title}</h1>
      <div className="cardInfo__works">
        {cards?.map((card) => {
          return (
            <div className="cardInfo__work" key={card.company}>
              <div className="cardInfo__content">
                <Image
                  className="cardInfo__image"
                  width={47}
                  height={47}
                  src={card.image || ""}
                  alt={"Directv"}
                />
                <div className="cardInfo__name">
                  <p className="cardInfo__company">{card.company}</p>
                  <p className="cardInfo__ocupation">{card.ocupation}</p>
                </div>
              </div>
              {card.projectType ? (
                <div className="cardInfo__projectType">{card.projectType}</div>
              ) : (
                <p className="cardInfo__date">{card.date}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardInfo;
