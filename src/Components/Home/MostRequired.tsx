import mostRequerdSection from "../../../data.json";

type MostRequiredData = {
  mostRequiredSection: Array<{
    id: string;
    img: string;
    content: string;
  }>;
}

export function MostRequired() {
  const data: MostRequiredData = mostRequerdSection;

  return (
    <div className="w-full h-full flex flex-col items-center gap-7" >
      <h2 className="mt-14" >Procedimentos mais requisitados</h2>
      <div className="w-10 h-1 bg-gray-600 -mt-2 mb-9 rounded-t-sm "></div>
      {data &&
        data.mostRequiredSection.map((card) => (
          <div key={card.id} className="w-11/12 max-w-[320px] p-8 bg-white-100 rounded-lg shadow-md shadow-gray-700 ">
            <div className="w-48 h-48 m-auto rounded-full border-2 border-green-300 ">
              <img
                src={card.img}
                alt="microderm-peeling-poster"
                className="w-full h-full object-cover rounded-full "
              />
            </div>

            <h3 className="font-roboto font-light text-gray-700 text-sm leading-5 text-center mt-20  ">
              {card.content}
            </h3>
          </div>
        ))}

      <a href="#" className="w-32 h-9 bg-white-100 text-green-300 text-base flex items-center justify-center font-roboto font-semibold rounded-3xl py-5 hover:bg-green-300 hover:text-white-100 border-2 border-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white-100 transition-all " >Veja todos</a>
    </div>
  );
}
