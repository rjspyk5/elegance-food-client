import bg from "../../assets/home/chef-service.jpg";
export const ChefService = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="my-14 bg-cover">
      <div className="p-24">
        <div className="py-24 px-36 bg-white text-center rounded-md">
          <h1 className="text-2xl">EleganceFood</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
            sapiente quis tenetur eius architecto quam itaque eligendi dicta,
            nulla nobis!
          </p>
        </div>
      </div>
    </div>
  );
};
