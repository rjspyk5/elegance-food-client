import im from "../../assets/home/featured.jpg";
import { HeadingSection } from "./Shared/HeadingSection";

export const Featured = () => {
  return (
    <div
      style={{ backgroundImage: `url(${im})` }}
      className="my-14 bg-cover bg-fixed relative"
    >
      <div className="my-10">
        <HeadingSection
          heading="FROM OUR MENU"
          subheading="---Check it out---"
        />
      </div>
      <div className="md:flex justify-center items-center py-8 px-16">
        <img className="w-52" src={im} alt="" />
        <div className="md:ml-10">
          <p>Aug,2024</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
            aperiam quod expedita eveniet similique eius temporibus reiciendis
            nemo modi! Ipsam.
          </p>
          <button className="btn btn-outline">Read More</button>
        </div>
      </div>
    </div>
  );
};
