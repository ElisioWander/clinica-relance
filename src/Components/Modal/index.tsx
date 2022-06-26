import { useModal } from "../../context/ModalContext";
import { Check } from "phosphor-react";

export function Modal() {
  const { modal } = useModal();

  if (modal)
    return (
      <div className="flex items-center justify-center absolute top-0 right-0 bottom-0 left-0 z-10 bg-zinc-900 bg-opacity-80 animate-goVisible ">
        <div className="w-72 h-56 md:w-96 flex flex-col items-center justify-center rounded-md bg-white-300 ">
          <Check
            size={38}
            className="mb-4 text-white-50 bg-green-300 rounded-sm "
          />
          <span className="text-zinc-700 text-xl text-center ">
            Mensagem enviada com sucesso!
          </span>
        </div>
      </div>
    );

  return <></>;
}
