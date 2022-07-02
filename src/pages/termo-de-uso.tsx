import Link from "next/link";

export default function TermsOfService() {
  const paragraph = `py-2 px-2 md:px-5 text-zinc-600 text-sm md:text-base font-poppins  `;

  return (
    <div className="w-full ">
      <div className="w-full h-[calc(100vh-15rem)] flex items-center justify-center bg-white-300 ">
        <h1 className="text-5xl md:text-7xl text-center text-zinc-900 font-bold font-poppins transition-all ">
          Termo de Uso
        </h1>
      </div>
      <section className="w-full max-w-[1024px] m-auto py-14 px-5 ">
        <h3>1. Termos</h3>
        <p className={`${paragraph}`}>
          Ao acessar ao site{" "}
          <Link href="https://clinicarelance.com.br">
            <a className="text-blue-400 hover:underline underline-offset-2 transition-all " >Clínica Relance</a>
          </Link>
          , concorda em cumprir estes termos de serviço, todas as leis e
          regulamentos aplicáveis ​​e concorda que é responsável pelo
          cumprimento de todas as leis locais aplicáveis. Se você não concordar
          com algum desses termos, está proibido de usar ou acessar este site.
          Os materiais contidos neste site são protegidos pelas leis de direitos
          autorais e marcas comerciais aplicáveis.
        </p>
        <h3>2. Uso de Licença</h3>
        <p className={`${paragraph}`}>
          É concedida permissão para baixar temporariamente uma cópia dos
          materiais (informações ou software) no site Clínica Relance , apenas
          para visualização transitória pessoal e não comercial. Esta é a
          concessão de uma licença, não uma transferência de título e, sob esta
          licença, você não pode:{" "}
        </p>
        <ol className={`${paragraph} px-5 md:px-8`}>
          <li>1 - modificar ou copiar os materiais; </li>
          <li>
            2 - usar os materiais para qualquer finalidade comercial ou para
            exibição pública (comercial ou não comercial);{" "}
          </li>
          <li>
            3 - tentar descompilar ou fazer engenharia reversa de qualquer
            software contido no site Clínica Relance;{" "}
          </li>
          <li>
            4 - remover quaisquer direitos autorais ou outras notações de
            propriedade dos materiais; ou{" "}
          </li>
          <li>
            5 - transferir os materiais para outra pessoa ou 'espelhe' os
            materiais em qualquer outro servidor.
          </li>
        </ol>
        <p className={`${paragraph} `}>
          Esta licença será automaticamente rescindida se você violar alguma
          dessas restrições e poderá ser rescindida por Clínica Relance a
          qualquer momento. Ao encerrar a visualização desses materiais ou após
          o término desta licença, você deve apagar todos os materiais baixados
          em sua posse, seja em formato eletrónico ou impresso.
        </p>
        <h3>3. Isenção de responsabilidade</h3>
        <ol className={`${paragraph}`}>
          <li>
            1 - Os materiais no site da Clínica Relance são fornecidos 'como
            estão'. A Clínica Relance não oferece garantias, expressas ou
            implícitas, e, por este meio, isenta e nega todas as outras
            garantias, incluindo, sem limitação, garantias implícitas ou
            condições de comercialização, adequação a um fim específico ou não
            violação de propriedade intelectual ou outra violação de direitos.
          </li>
          <li>
            2 - Além disso, a Clínica Relance não garante ou faz qualquer
            representação relativa à precisão, aos resultados prováveis ​​ou à
            confiabilidade do uso dos materiais em seu site ou de outra forma
            relacionado a esses materiais ou em sites vinculados a este site.
          </li>
        </ol>
        <h3>4. Limitações</h3>
        <p className={`${paragraph}`}>
          Em nenhum caso a Clínica Relance ou seus fornecedores serão
          responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos
          por perda de dados ou lucro ou devido a interrupção dos negócios)
          decorrentes do uso ou da incapacidade de usar os materiais na Clínica
          Relance, mesmo que a Clínica Relance ou um representante autorizado da
          Clínica Relance tenha sido notificado oralmente ou por escrito da
          possibilidade de tais danos. Como algumas jurisdições não permitem
          limitações em garantias implícitas, ou limitações de responsabilidade
          por danos conseqüentes ou incidentais, essas limitações podem não se
          aplicar a você.
        </p>
        <h3>5. Precisão dos materiais</h3>
        <p className={`${paragraph}`}>
          Os materiais exibidos no site da Clínica Relance podem incluir erros
          técnicos, tipográficos ou fotográficos. Clínica Relance não garante
          que qualquer material em seu site seja preciso, completo ou atual. A
          Clínica Relance pode fazer alterações nos materiais contidos em seu
          site a qualquer momento, sem aviso prévio. No entanto, A Clínica
          Relance não se compromete a atualizar os materiais.
        </p>
        <h3>6. Links</h3>
        <p className={`${paragraph}`}>
          A Clínica Relance não analisou todos os sites vinculados ao seu site e
          não é responsável pelo conteúdo de nenhum site vinculado. A inclusão
          de qualquer link não implica endosso por Clínica Relance do site. O
          uso de qualquer site vinculado é por conta e risco do usuário.
        </p>
        <h3>Modificações</h3>
        <p className={`${paragraph}`}>
          A Clínica Relance pode revisar estes termos de serviço do site a
          qualquer momento, sem aviso prévio. Ao usar este site, você concorda
          em ficar vinculado à versão atual desses termos de serviço.
        </p>
        <h3>Lei aplicável</h3>
        <p className={`${paragraph}`}>
          Estes termos e condições são regidos e interpretados de acordo com as
          leis da Clínica Relance e você se submete irrevogavelmente à
          jurisdição exclusiva dos tribunais naquele estado ou localidade.
        </p>
      </section>
    </div>
  );
}
