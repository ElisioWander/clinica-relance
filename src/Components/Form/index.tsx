import { FormEvent, useState } from "react";
import { Loading } from "../Loading";

export function Form() {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSendingMessage, setIsSendingMessage] = useState(false);

  function handleSubmitMessage(e: FormEvent) {
    e.preventDefault();

    setIsSendingMessage(true);
    const data = {
      name,
      email,
      comment
    }
    setIsSendingMessage(false)

  }

  return (
    <form
      onSubmit={handleSubmitMessage}
      className="w-full h-[420px] p-5 flex flex-col justify-center "
    >
      <span className="mb-4 text-zinc-400 font-semibold text-md font-roboto block  ">
        Deixe sua mensagem
      </span>
      <div className="w-full flex flex-col justify-center ">
        <input
          type="text"
          className="mb-5 py-3 px-4 text-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-100 rounded-md placeholder:text-sm bg-zinc-300 "
          placeholder="nome"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="mb-5 py-3 px-4 text-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-100 rounded-md placeholder:text-sm bg-zinc-300 "
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name=""
          className="mb-5 p-4 min-h-[112px] text-zinc-800 text-sm rounded-md placeholder:text-sm bg-zinc-300 focus:border-1 focus:ring-green-100 focus:ring-1 focus:outline-none resize-none "
          placeholder="Digite sua mensagem aqui"
          onChange={(e) => setComment(e.target.value)}
        />

        <button
          type="submit"
          className="py-3 px-4 rounded-md flex items-center justify-center text-sm text-white-300 font-semibold tracking-wide font-roboto hover:brightness-90 transition-all bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-100 disabled:opacity-70 disabled:hover:brightness-100 disabled:cursor-not-allowed "
          disabled={comment.length === 0 || isSendingMessage}
        >
          {isSendingMessage ? <Loading /> : "Enviar"}
        </button>
      </div>
    </form>
  );
}
