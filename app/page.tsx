import CardProfile from "../components/card-profile/card-profile";
import Resume from "../components/resume/resume";
import CardInfo from "../components/card-info/card-info";
import CardSkill from "../components/card-skill/card-skill";

import DirectvImage from "../images/works/directv.png";
import SkyImage from "../images/works/sky.png";
import NorwayBankImage from "../images/works/norwaybank.png";

import KahuImage from "../images/projects/kahu.png";
import AssineImage from "../images/projects/assine.png";
import StoryBookImage from "../images/projects/storybook.png";
import KuiperImage from "../images/projects/kuiper.png";

import reactLogo from "../images/skills/react.png";
import nextLogo from "../images/skills/next.png";
import typescriptLogo from "../images/skills/typescript.png";
import sassLogo from "../images/skills/sass.png";
import tailwindLogo from "../images/skills/tailwind.png";
import liferayLogo from "../images/skills/liferay.png";
import jenkinsLogo from "../images/skills/jenkins.png";
import storybookLogo from "../images/skills/storybook.png";
import figmaLogo from "../images/skills/figma.png";
import gitLogo from "../images/skills/git.png";
import qlLogo from "../images/skills/ql.png";
import apiLogo from "../images/skills/api.png";
import jiraLogo from "../images/skills/jira.png";

const cardInfoWorkObj = [
  {
    image: DirectvImage.src,
    company: "DIRECTV Latin America",
    ocupation: "Front End Developer",
    date: "2024 - Now",
  },
  {
    image: SkyImage.src,
    company: "SKY Brasil",
    ocupation: "Front End Developer",
    date: "2024 - Now",
  },
  {
    image: NorwayBankImage.src,
    company: "Norway Bank",
    ocupation: "Front End Developer & UI/UX Designer",
    date: "2023 - 2024",
  },
];

const cardInfoProjectsObj = [
  {
    image: KuiperImage.src,
    company: "Amazon + DIRECTV (KUIPER)",
    ocupation: "Buyflow",
    projectType: "web",
  },
  {
    image: AssineImage.src,
    company: "Assine SKY",
    ocupation: "TV Plans Product Catalog & SKY+",
    projectType: "web",
  },
  {
    image: StoryBookImage.src,
    company: "VRIO Storybook",
    ocupation: "Design System for SKY, Directv and DGO",
    projectType: "web",
  },
  {
    image: KahuImage.src,
    company: "KAHU",
    ocupation: "Landing Page",
    projectType: "web",
  },
];

const cardSkills = [
  { image: reactLogo, name: "React" },
  { image: nextLogo, name: "Next" },
  { image: typescriptLogo, name: "Typescript" },
  { image: sassLogo, name: "SCSS" },
  { image: tailwindLogo, name: "Tailwind CSS" },
  { image: liferayLogo, name: "CMS Liferay" },
  { image: jenkinsLogo, name: "Jenkins" },
  { image: storybookLogo, name: "Storybook" },
  { image: figmaLogo, name: "Figma" },
  { image: gitLogo, name: "Git" },
  { image: qlLogo, name: "GraphQL" },
  { image: apiLogo, name: "API RESTful" },
  { image: jiraLogo, name: "Jira" },
];

export default function Home() {
  return (
    <div className="portfolio">
      <CardProfile />
      <Resume />
      <CardInfo title={"work"} cards={cardInfoWorkObj} />
      <CardInfo title={"projects"} cards={cardInfoProjectsObj} />
      <CardSkill title={"skills"} cards={cardSkills} />
      <p className="copyright">© 2025 Felipe Panebianco Pontin.</p>
    </div>
  );
}
