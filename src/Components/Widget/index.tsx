import { CloseButton } from "./CloseButton";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

const sendMessageType = {
  WHATSAPP: {
    title: "whatsapp",
    image: <IoLogoWhatsapp className="w-10 h-10" />,
    destination: "https://api.whatsapp.com/send/?phone=5532998001512",
  },
  EMAIL: {
    title: "e-mail",
    image: <AiOutlineMail className="w-10 h-10" />,
    destination: "/contato",
  },
};

interface WidgetProps {
  onClose: () => void;
}

export function Widget({ onClose }: WidgetProps) {
  return (
    <div className="w-[calc(100vw-2rem)] md:w-auto p-4 px-8 mb-4 relative flex flex-col items-center shadow-lg rounded-2xl bg-white-50 ">
      <header>
        <span className="text-xl leading-6 text-zinc-700 ">Fale conosco</span>

        <CloseButton />
      </header>

      <main className="py-8 w-full flex gap-2">
        {Object.entries(sendMessageType).map(([key, value]) => {
          return (
            <Link href={`${value.destination}`} key={key}>
              <a 
                onClick={() => onClose()}
                className="w-24 py-5 flex-1 flex flex-col items-center gap-2 text-zinc-700 border-2 border-transparent hover:border-green-300 focus:outline-none focus:border-green-300 rounded-lg bg-zinc-200">
                {value.image}

                <span>{value.title}</span>
              </a>
            </Link>
          );
        })}
      </main>

      <footer></footer>
    </div>
  );
}
