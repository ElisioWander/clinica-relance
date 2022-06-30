import { useState } from "react";
import { useModal } from "../../context/ModalContext";
import { api } from "../../services/axios";
import { Loading } from "./Loading";
import { useForm, SubmitHandler, Resolver } from 'react-hook-form'

type SendMessageData = {
  name: string;
  email: string;
  comment: string;
}

//configurando os valores do formulário e os erros
const resolver: Resolver<SendMessageData> = async (values) => {
  return {
    values: values.name || values.email ? values : {},
    errors: !values.name || !values.email ? {
      name: {
        type: 'required',
        message: 'Nome obrigatório'
      },
      email: {
        type: 'required',
        message: 'Email obrigatório'
      }
    } : {}
  }
}

export function Form() {
  const [comment, setComment] = useState("");

  const { handleOpenModal } = useModal()
  const { register, formState: {errors, isSubmitting}, handleSubmit, reset } = useForm<SendMessageData>({ resolver })

  const handleSubmitMessage:SubmitHandler<SendMessageData> = async (values) => {
    const { name, email, comment } = values

    await api.post("message", {
      name,
      email,
      comment
    })

    //scrolar para o topo depois de enviar o formulário para o modal não ficar bugado
    window.scrollTo(0, 0)

    //abrir o modal depois que enviar o formulário
    handleOpenModal()
    //resetando os campos do form após o envio
    reset()
    //resetando o campo de mensagem após o envio
    setComment("")
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubmitMessage)}
      className="w-full h-[420px] p-5 flex flex-col justify-center animate-goBack "
    >
      <span className="mb-4 text-zinc-400 font-semibold text-md font-roboto block  ">
        Deixe sua mensagem
      </span>
      <div className="w-full flex flex-col justify-center ">
        <input
          type="text"
          className="mb-5 py-3 px-4 text-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-100 rounded-md placeholder:text-sm bg-zinc-300 "
          placeholder="nome"
          {...register("name")}
        />
        {errors?.name && <span className="-mt-5 mb-5 ml-3 text-sm text-red-500 " >{errors.name.message}</span>}
        <input
          type="email"
          className="mb-5 py-3 px-4 text-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-100 rounded-md placeholder:text-sm bg-zinc-300 "
          placeholder="email"
          {...register("email")}
        />
        {errors?.email && <span className="-mt-5 mb-5 ml-3 text-sm text-red-500 " >{errors.email.message}</span>}
        <textarea
          className="mb-5 p-4 min-h-[112px] text-zinc-800 text-sm rounded-md placeholder:text-sm bg-zinc-300 focus:border-1 focus:ring-green-100 focus:ring-1 focus:outline-none resize-none "
          placeholder="Digite sua mensagem aqui"
          {...register("comment")}
          onChange={e => setComment(e.target.value)}
        />
        {errors?.comment && <span className="-mt-5 mb-5 ml-3 text-sm text-red-500 " >{errors.comment.message}</span>} 

        <button
          type="submit"
          className="py-3 px-4 rounded-md flex items-center justify-center text-sm text-white-300 font-semibold tracking-wide font-roboto hover:brightness-90 transition-all bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-100 disabled:opacity-70 disabled:hover:brightness-100 disabled:cursor-not-allowed "
          disabled={comment.length === 0 || isSubmitting}
        >
          {isSubmitting ? <Loading /> : "Enviar"}
        </button>
      </div>
    </form>
  );
}