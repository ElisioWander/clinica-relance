import Link from "next/link";
import data from "../../../data.json";

export default function Services() {
  const text = "testando"

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
          <Link key={item.id} href={`/posts/${item.id}`}>
            <a
              className="w-11/12 h-[420px] md:w-full flex items-center justify-center mb-8 rounded-sm shadow-md hover:shadow-xl relative overflow-hidden transition-all"
              style={{
                'backgroundImage': `url(${item.img})`,
                'backgroundPosition': 'center',
                'backgroundSize': 'cover',
              }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center p-5 text-center text-transparent hover:text-white-300 hover:bg-zinc-900 hover:bg-opacity-50 transition-all duration-500" >
                <p className="text-sm font-poppins tracking-wide "
                >
                  <span className="text-2xl pb-1 font-merriweather block text-center transition-all duration-500" >Testando</span>
                  {item.content}
                </p>
              </div>

              {/* <img
                src={item.img}
                alt="microderm-peeling-poster"
                className="w-full h-full object-cover"
              /> */}
            </a>
          </Link>
        ))}
      </main>
    </div>
  );
}
