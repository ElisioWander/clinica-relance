interface IntroductionProps {
  procedure: {
    slug: string;
    image: string;
    title: string;
    content: string;
  }
}

export function Introduction({ procedure }: IntroductionProps) {
  return (
    <section 
      className="w-full py-14"
      style={{
        'backgroundImage': `url(${procedure.image})`,
        'backgroundPosition': 'center',
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
      }}
    >

      <main 
        className="w-4/5 lg:w-2/3 m-auto bg-white-100 z-50 rounded-sm lg:flex lg:justify-center shadow-md"
      >
        <div className="md:flex " >
          <div className="w-full flex items-center justify-center" >
            <img 
              src={procedure.image}
              alt="poster depilação a laiser"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full p-5 pb-10 md:p-10 flex flex-col justify-center bg-white-300 " >
            <h1 className="py-4 md:m-0 text-center md:text-start 
           text-2xl lg:text-4xl text-gray-300 font-merriweather " >{procedure.title}</h1>

            <p className="text-center md:text-start md:p-2 text-sm lg:text-base leading-5 font-roboto text-zinc-600 transition-all " >
              {procedure.content}
            </p>
          </div>
        </div>
      </main>
    </section>
  );
}
