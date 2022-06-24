import { Introduction } from "../../Components/serviceIntroduction";
import question from "../../../data.json";
import procedures from "../../../data.json";

export default function SingleService() {
  return (
    <>
      <Introduction />

      <div>
        <main className="w-full max-w-[820px] p-5 pb-14 m-auto ">
          <h2 className="text-1xl md:text-3xl py-5 pb-8 md:text-start md:mb-5 flex ">
            O que você precisa saber
            <img 
              src="/images/arrow-1.svg"
              alt="flecha na direção das perguntas de estética"
              className="hidden md:block md:w-5 md:mt-5 md:ml-2"
            />
          </h2>

          {question &&
            question.questions.map((item) => (
              <div
                key={item.id}
                className="rounded-sm mb-3 shadow-md bg-white-300 "
              >
                <details className="p-6 open:bg-zinc-200 transition-all ">
                  <summary className="text-zinc-700 text-md  md:text-lg font-roboto font-bold hover:cursor-pointer ">
                    <span className="ml-1">{item.summary}</span>
                  </summary>

                  <div className="text-zinc-600 text-sm md:text-base p-3 md:px-5 transition-all  tracking-normal font-roboto">
                    <p>{item.content}</p>
                  </div>
                </details>
              </div>
            ))}
        </main>

        <section className="w-full max-w-[1080px] m-auto pb-5 md:px-5  animate-goTop">
          <h2 className="w-1/3 text-3xl p-5 mb-8 " >
            Galeria
          </h2>

          <div className="w-full flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 items-center justify-center">
            {procedures &&
              procedures.procedures.map((item) => (
                <div
                  key={item.id}
                  className="w-11/12 h-[340px] md:w-full flex items-center justify-center mb-8 rounded-sm shadow-md hover:shadow-xl relative overflow-hidden transition-all "
                >
                  <img
                    src={item.img}
                    alt="microderm-peeling-poster"
                    className="w-full h-full object-cover brightness-75 hover:brightness-100 absolute transition-all duration-1000 ease-in-out trasform scale-100 hover:scale-150 "
                  />
                </div>
              ))}
          </div>
        </section>
      </div>
    </>
  );
}
