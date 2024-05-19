import { Helmet } from "react-helmet-async";
import bg from "../../assets/menu/banner3.jpg";

export const OurMenu = () => {
  return (
    <div>
      <Helmet>
        <title>Elegance | menu</title>
      </Helmet>
      <div style={{ backgroundImage: `url(${bg})` }}>
        <img src={bg} alt="" />
        <div className="p-24 absolute top-[40%] left-[40%] bg-black bg-opacity-30">
          <h1 className="text-3xl text-white">Our Menu</h1>
          <p>Would you like to try a dish?</p>
        </div>
      </div>
    </div>
  );
};
