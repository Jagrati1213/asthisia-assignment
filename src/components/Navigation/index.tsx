import { NavIcon } from "./NavIcon";
import LogoImg from "../../assets/Logomark.png";
import HomeIconImg from "../../assets/home.svg";
import AnalysisIconImg from "../../assets/analysis.svg";
import StaticsIconImg from "../../assets/statics.svg";
import GraphIconImg from "../../assets/graph.svg";
import CheckIconImg from "../../assets/check.svg";
import CommunityIconImg from "../../assets/community.svg";
import SettingsImg from "../../assets/settings.svg";
import RollBackImg from "../../assets/rollback.svg";
import AvatarImg from "../../assets/avtar.png";

const NAV_ICONS_DATA = [
  {
    iconName: "home",
    iconImage: HomeIconImg,
  },
  {
    iconName: "analysis",
    iconImage: AnalysisIconImg,
  },
  {
    iconName: "stattics",
    iconImage: StaticsIconImg,
  },
  {
    iconName: "check",
    iconImage: CheckIconImg,
  },
  {
    iconName: "graph",
    iconImage: GraphIconImg,
  },
  {
    iconName: "community",
    iconImage: CommunityIconImg,
  },
];

export function Navigation() {
  return (
    <div className="bg-asBlack flex justify-between items-center text-asWhite px-5 py-5 flex-col border-asBorderGray border-r">
      <div>
        <div className="w-11 h-10 overflow-hidden my-3">
          <img src={LogoImg} className="object-cover w-full h-full" />
        </div>
        <div className="flex justify-center items-center w-full flex-col gap-5 mt-6">
          {NAV_ICONS_DATA.map(({ iconName, iconImage }) => {
            return <NavIcon iconImg={iconImage} key={iconName} />;
          })}
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center w-full flex-col gap-5 mt-6">
          <NavIcon iconImg={RollBackImg} />
          <NavIcon iconImg={SettingsImg} />
          <NavIcon iconImg={AvatarImg} isHover={false} />
        </div>
      </div>
    </div>
  );
}
