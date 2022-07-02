import Link from "next/link";

export default function PrivacyPolicy() {
  const paragraph = `py-2 px-2 md:px-5 text-zinc-600 text-sm md:text-base font-poppins  `;

  return (
    <div className="w-full ">
      <div className="w-full h-[calc(100vh-15rem)] flex items-center justify-center bg-white-300 ">
        <h1 className="text-5xl md:text-7xl text-center text-zinc-900 font-bold font-poppins transition-all ">
          Política de Privacidade
        </h1>
      </div>
      <section className="w-full max-w-[1024px] m-auto py-14 px-5 ">
        <h3>Política Privacidade</h3>
        <p className={`${paragraph}`}>
          A sua privacidade é importante para nós. É política da Clínica Relance
          respeitar a sua privacidade em relação a qualquer informação sua que
          possamos coletar no site{" "}
          <Link href="/">
            <a
              className="text-blue-400 hover:underline underline-offset-2"
              target="_blank"
            >
              Clínica Relance
            </a>
          </Link>
          , e outros sites que possuímos e operamos. <br className="mb-3" />{" "}
          Solicitamos informações pessoais apenas quando realmente precisamos
          delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
          legais, com o seu conhecimento e consentimento. Também informamos por
          que estamos coletando e como será usado.
          <br className="mb-3" /> Apenas retemos as informações coletadas pelo
          tempo necessário para fornecer o serviço solicitado. Quando
          armazenamos dados, protegemos dentro de meios comercialmente
          aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação,
          cópia, uso ou modificação não autorizados. <br className="mb-3" /> Não
          compartilhamos informações de identificação pessoal publicamente ou
          com terceiros, exceto quando exigido por lei. <br className="mb-3" />{" "}
          O nosso site pode ter links para sites externos que não são operados
          por nós. Esteja ciente de que não temos controle sobre o conteúdo e
          práticas desses sites e não podemos aceitar responsabilidade por suas
          respectivas políticas de privacidade. <br className="mb-3" /> Você é
          livre para recusar a nossa solicitação de informações pessoais,
          entendendo que talvez não possamos fornecer alguns dos serviços
          desejados. <br className="mb-3" /> O uso continuado de nosso site será
          considerado como aceitação de nossas práticas em torno de Aviso de
          Privacidad e informações pessoais. Se você tiver alguma dúvida sobre
          como lidamos com dados do usuário e informações pessoais, entre em
          contacto connosco.
        </p>
        <h3>Compromisso do usuário</h3>
        <p className={`${paragraph}`}>
          O usuário se compromete a fazer uso adequado dos conteúdos e da
          informação que a Clínica Relance oferece no site e com caráter
          enunciativo, mas não limitativo:
        </p>
        <ol className={`${paragraph} px-5 md:px-8`}>
          <li>
            1 - Não se envolver em atividades que sejam ilegais ou contrárias à
            boa fé a à ordem pública;{" "}
          </li>
          <li>
            2 - Não difundir propaganda ou conteúdo de natureza racista,
            xenofóbica, Onde dá a Bola ou azar, qualquer tipo de pornografia
            ilegal, de apologia ao terrorismo ou contra os direitos humanos;
          </li>
          <li>
            3 - Não causar danos aos sistemas físicos (hardwares) e lógicos
            (softwares) da Clínica Relance, de seus fornecedores ou terceiros,
            para introduzir ou disseminar vírus informáticos ou quaisquer outros
            sistemas de hardware ou software que sejam capazes de causar danos
            anteriormente mencionados.
          </li>
        </ol>
        <h3>Mais informações</h3>
        <p className={`${paragraph}`}>
          Esperemos que esteja esclarecido e, como mencionado anteriormente, se
          houver algo que você não tem certeza se precisa ou não, geralmente é
          mais seguro deixar os cookies ativados, caso interaja com um dos
          recursos que você usa em nosso site. <br className="mb-3" /> Esta
          política é efetiva a partir de July/2022.
        </p>
      </section>
    </div>
  );
}
