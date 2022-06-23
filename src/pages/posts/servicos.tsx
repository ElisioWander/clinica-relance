import Link from "next/link";
import data from "../../../data.json";

export default function Services() {
  return (
    <div className="w-full bg-white-300 flex flex-col">
      <h1
        className="w-full p-7 relative bg-gray-300 text-center text-white-100 text-3xl font-merriweather
        uppercase after:content-[''] after:absolute after:left-1/2 after:top-full after:block after:w-0 after:h-0 after:z-10 after:border-t-[20px]
        after:border-gray-300 after:border-solid after:border-l-[20px] after:border-l-transparent after:border-r-[20px]
        after:border-r-transparent after:-translate-x-1/2"
      >
        PROCEDIMENTOS ESTÉTICOS
      </h1>

      <main className="w-full max-w-[1080px] m-auto py-20 md:px-5 flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 items-center justify-center animate-goTop ">
        {data.procedures.map((item) => (
          <Link href={`/posts/${item.id}`}>
            <a
              key={item.id}
              className="w-11/12 h-[420px] md:w-full flex items-center justify-center mb-8 rounded-sm shadow-md hover:shadow-xl relative overflow-hidden transition-all "
            >
              <img
                src={item.img}
                alt="microderm-peeling-poster"
                className="w-full h-full object-cover brightness-75 hover:brightness-100 absolute transition-all duration-1000 ease-in-out trasform scale-100 hover:scale-150 "
              />

              <div className="w-full flex flex-col items-center absolute bottom-0 p-5 bg-white-100 ">
                <h3 className="mb-2 text-gray-700 text-lg font-poppins font-semibold ">
                  Título
                </h3>

                <p className="font-roboto font-light text-zinc-500 text-sm leading-5 text-center ">
                  {item.content}
                </p>
              </div>
            </a>
          </Link>
        ))}
      </main>
    </div>
  );
}
