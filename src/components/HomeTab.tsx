import { cities } from "../mock-data/cities";
import { result } from "../mock-data/pricesAndCount";
import { formatNumber } from "../utils";
import { useTabs } from "../customHooks/useTabs";

const HomeTab = () => {
  const { handleTabClick, getTabStyle } = useTabs({
    initialTab: "Toronto",
    activeStyle: "bg-gray-300 border rounded-md px-4 py-2 cursor-pointer",
    inActiveStyle: "px-4 py-2 cursor-pointer",
  });

  const { handleTabClick: handleTabClick2, getTabStyle: getTabStyle2 } =
    useTabs({
      initialTab: "Etobicoke",
      activeStyle:
        "bg-green-900 border rounded-md px-4 py-2 cursor-pointer text-white",
      inActiveStyle: "px-4 py-2 cursor-pointer",
    });

  return (
    <section className="container mx-auto px-5 md:pt-[72px] pt-[40px] md:pb-[65px] pb-[40px] ">
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr_300px] ">
        <h1 className=" text-2xl">Browse Properties</h1>
        <div className="flex justify-around">
          {cities.map((item) => (
            <div
              className={getTabStyle(item.city)}
              key={item.id}
              onClick={() => handleTabClick(item.city)}
            >
              {item.city}
            </div>
          ))}
        </div>
        <div className="flex space-x-4 items-center ">
          <label className="flex items-center">
            <input
              type="radio"
              name="propertyType"
              value="Buy"
              className="m-2 cursor-pointer"
            />
            Buy
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="propertyType"
              value="Rent"
              className="m-2 cursor-pointer"
            />
            Rent
          </label>
        </div>
      </div>
      <div className="m-8">
        <ul className="flex justify-center">
          <li
            className={`${getTabStyle2("Etiobicoke")} px-4 py-2`}
            onClick={() => handleTabClick2("Etiobicoke")}
          >
            Etiobicoke
          </li>
          <li
            className={`${getTabStyle2("North York")} px-4 py-2`}
            onClick={() => handleTabClick2("North York")}
          >
            North York
          </li>
          <li
            className={`${getTabStyle2("Scarborough")} px-4 py-2`}
            onClick={() => handleTabClick2("Scarborough")}
          >
            Scarborough
          </li>
          <li
            className={`${getTabStyle2("Toronto & East York")} px-4 py-2`}
            onClick={() => handleTabClick2("Toronto & East York")}
          >
            Toronto & East York
          </li>
        </ul>
      </div>
      <div className="grid gap-4 grid-rows-3 sm:grid-rows-none grid-flow-col sm:grid-flow-row grid-cols-none	sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
        {result.map((_, index) => {
          const name = result[index];
          const details = result[index + 1];

          if (typeof name === "string" && typeof details === "object") {
            return (
              <div className="p-3 bg-white border border-solid border-[#E7E7E7] rounded-lg ">
                <h4>{name}</h4>
                <div>
                  {details.count} Properties | {formatNumber(details.med)} price
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};
export default HomeTab;
