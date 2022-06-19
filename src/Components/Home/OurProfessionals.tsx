export function OurProfessionals() {
  return (
    <div className="w-full bg-white-50 py-14 flex flex-col items-center ">
      <h2>Nossas Profissionais</h2>
      <div className="w-10 h-1 bg-gray-600 mt-4 mb-9 rounded-t-sm "></div>
      <div className="md:flex transition-all ">
        <div className="lg:h-[400px] lg:w-[400px] flex items-center justify-center  ">
          <img
            src="/images/ellipse-1.svg"
            alt="shape under the profile photo"
            className="lg:h-full lg:w-full"
          />
          <img
            src="/images/ellipse-with-photo-1.svg"
            alt="shape with profile photo inside"
            className="absolute lg:w-[400px] lg:h-[400px] "
          />
        </div>

        <div className="w-full max-w-sm p-2 pt-5 pl-9 lg:flex lg:flex-col lg:items-center lg:justify-center ">
          <p className="text-left text-sm lg:text-base text-gray-700 font-roboto leading-5 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            explicabo repellendus voluptate laudantium ipsam aperiam voluptates
            eos error doloribus inventore ipsum repudiandae, expedita nihil ea
            quia voluptatem! Omnis, facilis quod.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            explicabo repellendus voluptate laudantium ipsam aperiam voluptates
            eos error doloribus inventore ipsum repudiandae, expedita nihil ea
            quia voluptatem! Omnis, facilis quod.
          </p>

          <a
            href="#"
            className="w-[130px] h-9 flex items-center justify-center text-white-100 text-base font-roboto font-semibold rounded-3xl mt-7 bg-green-300 hover:brightness-90 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white-100 "
          >
            Conheça elas
          </a>
        </div>
      </div>
    </div>
  );
}
