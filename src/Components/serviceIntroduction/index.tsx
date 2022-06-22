export function Introduction() {
  return (
    <section className="w-full py-11 bg-LaiserPageSection " >
      <main className="w-4/5 lg:w-2/3 m-auto bg-white-100 rounded-sm lg:flex lg:justify-center shadow-md " >
        <div className="md:flex " >
          <div className="md:w-1/2 md:py-10 px-5 flex items-center justify-center" >
            <img src="/images/laiser-page-1.svg" alt="poster depilação a laiser" />
          </div>
          <div className="w-full p-5 pb-10 md:p-10 flex flex-col justify-center bg-white-300 " >
            <h1 className="py-4 md:m-0 text-center md:text-start 
           text-2xl lg:text-4xl text-gray-300 font-merriweather " >Depilação a laiser</h1>

            <p className="lg:pr-20 text-center md:text-start md:p-2 text-sm lg:text-base leading-5 font-roboto text-zinc-600 transition-all " >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum nisi tempore earum? Libero adipisicing elit. Illum nisi tempore earum? Libero accusantium quo maxime? Omnis iure ut suscipit pariatur non sed architecto? Libero non tempore voluptatem blanditiis natus.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
}
