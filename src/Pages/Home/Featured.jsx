import im from "../../assets/home/featured.jpg";
import { HeadingSection } from "./Shared/HeadingSection";

export const Featured = () => {
  return (
    <div
      style={{ backgroundImage: `url(${im})` }}
      className="my-14 bg-cover  relative"
    >
      <div className="my-10">
        <HeadingSection
          heading="FROM OUR MENU"
          subheading="---Check it out---"
        />
      </div>
      <img className="w-52" src={im} alt="" />
    </div>
  );
};
