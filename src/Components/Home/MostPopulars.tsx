interface MostPopularsProps {
  populars: Array<{
    slug: string;
    title: string;
    image: string;
    content: string;
  }>
}

export function MostPopulars({ populars }: MostPopularsProps) {
  return (
    <div className="w-full py-14 flex flex-col items-center bg-white-400 " >
      <h1
        className="w-full -mt-[58px] p-7 relative bg-gray-300 text-center text-white-100 text-3xl font-merriweather
        uppercase after:content-[''] after:absolute after:left-1/2 after:top-full after:block after:w-0 after:h-0 after:z-10 after:border-t-[20px]
        after:border-gray-300 after:border-solid after:border-l-[20px] after:border-l-transparent after:border-r-[20px]
        after:border-r-transparent after:-translate-x-1/2"
      >
        PROCEDIMENTOS POPULARES
      </h1>
      <div className="w-full max-w-[1080px] h-[1500px] lg:h-[480px] lg:mt-12 px-2 py-5 pt-9 flex flex-col lg:flex-row items-center justify-around " >
        {populars &&
          populars.map((item) => (
            <a 
              href="/" 
              key={item.slug}
              className="w-11/12 h-4/5 lg:w-80 lg:h-full flex items-center justify-center mb-8 lg:mb-0 rounded-sm bg-white-300 shadow-md scale-100 hover:scale-105 hover:border-2 hover:border-green-300 hover:shadow-xl transition-all ">
              <div className="p-7" >
                <div className="w-48 h-48 m-auto rounded-full border-2 shadow-sm">
                  <img
                    src={item.image}
                    alt="microderm-peeling-poster"
                    className="w-full h-full object-cover rounded-full "
                  />
                </div>

                <div className="flex flex-col items-center mt-6 " >
                  <h3 className="mb-2 text-gray-700 text-lg font-poppins font-semibold " >{item.title}</h3>

                  <p className="font-roboto font-light text-zinc-500 text-sm leading-5 text-center ">
                    {item.content}
                  </p>
                </div>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
}