type CitiesProps = {
  id: number;
  city: string;
};

const cities: CitiesProps[] = [
  {
    id: 1,
    city: "Toronto",
  },
  {
    id: 2,
    city: "Durham",
  },
  {
    id: 3,
    city: "Halton",
  },
  {
    id: 4,
    city: "Peel",
  },
  {
    id: 4,
    city: "York",
  },
];

const HomeTab = () => {
  return (
    <section className="container mx-auto px-5 md:pt-[72px] pt-[40px] md:pb-[65px] pb-[40px] ">
      <div className="home_tab">
        <div>Browse Properties</div>
        <div className="flex justify-around">
          {cities.map((item) => (
            <div key={item.id}>{item.city}</div>
          ))}
        </div>
        <div className="flex space-x-4 items-center">
          <label className="flex items-center">
            <input
              type="radio"
              name="propertyType"
              value="Buy"
              className="m-2"
            />
            Buy
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="propertyType"
              value="Rent"
              className="m-2"
            />
            Rent
          </label>
        </div>
      </div>
    </section>
  );
};
export default HomeTab;
