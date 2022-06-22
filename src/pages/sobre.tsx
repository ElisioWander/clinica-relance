export default function Sobre() {
  return (
    <div>
      <h1
        className="p-7 relative bg-gray-300 text-center text-white-100 text-3xl font-merriweather
        uppercase after:content-[''] after:absolute after:left-1/2 after:top-full after:block after:w-0 after:h-0 after:z-10 after:border-t-[20px]
        after:border-gray-300 after:border-solid after:border-l-[20px] after:border-l-transparent after:border-r-[20px]
        after:border-r-transparent after:-translate-x-1/2"
      >
        CONHEÇA NOSSO TIME
      </h1>
      <main className="w-full m-auto py-14 transition-all ">
        <section className="md:py-14 flex flex-col items-center md:items-start justify-center md:flex-row animate-goBack  ">
          <div className="w-80 p-5 md:p-0 md:mt-8 ">
            <img
              src="/images/amanda-profile.svg"
              alt="foto da micropigmentadora Amanda"
            />
          </div>

          <div className="p-5 mt-2 ">
            <span className="text-sm text-green-300 uppercase font-bold font-poppins ">
              Amanda Cristina
            </span>
            <span className="w-8 h-1 block bg-green-300"></span>

            <h2 className="pt-5 pb-3 text-start ">Micropigmentadora</h2>
            <p className="max-w-[538px] md:w-[320px] lg:w-[580px] text-zinc-600 text-sm font-roboto leading-5 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
              corporis, eligendi quidem accusantium atque ullam, exercitationem
              magnam corrupti illo dolorum nulla. Fugiat sit ipsa voluptates et
              enim nobis qui cum?Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Quo, corporis, eligendi quidem accusantium atque
              ullam, exercitationem magnam corrupti illo dolorum nulla. Fugiat
              sit ipsa voluptates et enim nobis qui cum?Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Quo, corporis, eligendi quidem
              accusantium atque ullam, exercitationem magnam corrupti illo
              dolorum nulla. Fugiat sit ipsa voluptates et enim nobis qui
              cum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
              corporis, eligendi quidem accusantium atque ullam, exercitationem
              magnam corrupti illo dolorum nulla. Fugiat sit ipsa voluptates et
              enim nobis qui cum?Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Quo, corporis, eligendi quidem accusantium atque
              ullam, exercitationem magnam corrupti illo dolorum nulla. Fugiat
              sit ipsa voluptates et enim nobis qui cum
            </p>
          </div>
        </section>
        <section className="py-8 flex flex-col items-center md:items-start justify-center md:flex-row bg-white-300 in-range:animate-spin ">
          <div className="p-5 mt-2 order-1 md:order-none ">
            <span className="text-sm text-green-300 uppercase font-bold font-poppins ">
              Tamyris Ferreira
            </span>
            <span className="w-8 h-1 block bg-green-300"></span>

            <h2 className="pt-5 pb-3 text-start ">Esteticista</h2>
            <p className="max-w-[538px] md:w-[320px] lg:w-[580px] text-zinc-600 text-sm font-roboto leading-5 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
              corporis, eligendi quidem accusantium atque ullam, exercitationem
              magnam corrupti illo dolorum nulla. Fugiat sit ipsa voluptates et
              enim nobis qui cum?Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Quo, corporis, eligendi quidem accusantium atque
              ullam, exercitationem magnam corrupti illo dolorum nulla. Fugiat
              sit ipsa voluptates et enim nobis qui cum?Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Quo, corporis, eligendi quidem
              accusantium atque ullam, exercitationem magnam corrupti illo
              dolorum nulla. Fugiat sit ipsa voluptates et enim nobis qui
              cum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
              corporis, eligendi quidem accusantium atque ullam, exercitationem
              magnam corrupti illo dolorum nulla. Fugiat sit ipsa voluptates et
              enim nobis qui cum?Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Quo, corporis, eligendi quidem accusantium atque
              ullam, exercitationem magnam corrupti illo dolorum nulla. Fugiat
              sit ipsa voluptates et enim nobis qui cum
            </p>
          </div>
          <div className="w-80 p-5 md:p-0 md:mt-8 ">
            <img
              src="/images/tamyris-profile.svg"
              alt="foto da micropigmentadora Amanda"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
