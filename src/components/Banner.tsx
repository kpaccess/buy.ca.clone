import ToggleTab from "./ToggleTab";

const Banner = () => {
  return (
    <div className=" home_main_banner md:min-h-[530px] md:max-h-[530px] !min-h-[440px] relative">
      <div className="home_main_content container mx-auto px-5">
        <div className="max-w-[800px] w-full">
          <h1 className=" text-5xl leading-4">Discover Your Dream Home</h1>
          <h6 className=" font-bold leading-[5rem]">
            Find the perfect buy with Buy.ca!
          </h6>

          <ToggleTab />
        </div>
      </div>

      <div className="absolute right-0 bottom-[-65x] h-[530px] sm:block hidden">
        <img
          src="./home-banner-hero.png"
          style={{ objectFit: "contain", color: "transparent" }}
          alt="hero"
          width={1920}
          height={530}
          className="!opacity-100 h-[530px] !w-full"
        />
      </div>
    </div>
  );
};
export default Banner;

/*<div className="px-6 py-6 ">
        <h1 className=" text-5xl leading-4">Discover Your Dream Home</h1>
        <h6 className=" font-bold leading-[5rem]">
          Find the perfect buy with Buy.ca!
        </h6>

        <ToggleTab />
      </div>
      <div className="absolute right-0">
        <img
          src="./home-banner-hero.png"
          style={{ objectFit: "contain" }}
          alt="hero"
          width={1920}
          height={530}
          className="!opacity-100 h-[530px] !w-full"
        />
      </div>*/
