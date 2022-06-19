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
    <div className="w-full py-14 flex flex-col items-center bg-white-400 " >
      <h2>Procedimentos mais requisitados</h2>
      <div className="w-10 h-1 bg-gray-600 mt-5 mb-7 rounded-t-sm "></div>
      <div className="w-full max-w-[1080px] h-[1390px] lg:h-[440px] px-2 py-5 flex flex-col lg:flex-row items-center justify-around " >
        {data &&
          data.mostRequiredSection.map((card) => (
            <a 
              href="/" 
              key={card.id}
              className="w-11/12 lg:w-80 block p-8 mb-8 lg:mb-0 rounded-lg bg-white-100 shadow-lg scale-100 hover:scale-105 hover:border-2 hover:border-green-300 hover:shadow-xl transition-all ">
              <div>
                <div className="w-48 h-48 m-auto rounded-full border-2 border-green-300 ">
                  <img
                    src={card.img}
                    alt="microderm-peeling-poster"
                    className="w-full h-full object-cover rounded-full "
                  />
                </div>

                <div className="flex flex-col items-center p-5 " >
                  <h3 className="mb-2 text-gray-700 text-lg font-poppins font-semibold " >Title</h3>

                  <p className="font-roboto font-light text-gray-700 text-sm leading-5 text-center ">
                    {card.content}
                  </p>
                </div>
              </div>
            </a>
          ))}
      </div>
      <a href="#" className="w-32 h-9 lg:mt-5 bg-white-100 text-green-300 text-base flex items-center justify-center font-roboto font-semibold rounded-3xl py-5 hover:bg-green-300 hover:text-white-100 border-2 border-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white-100 transition-all " >Veja todos</a>
    </div>
  );
}
