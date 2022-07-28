import { useModal } from '../../context/ModalContext'
import { api } from '../../services/axios'
import { Loading } from './Loading'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useFormResolver } from '../../hooks/useFormResolver'
import { Input } from './Input'
import { NavigationItem } from '../Navigation/NavigationItem'

type SendMessageData = {
  name: string
  email: string
  comment: string
}

export function Form() {
  const { resolver } = useFormResolver()
  const { handleOpenModal } = useModal()
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
    watch,
  } = useForm<SendMessageData>({ resolver })

  const handleSubmitMessage: SubmitHandler<SendMessageData> = async (
    values,
  ) => {
    const { name, email, comment } = values

    await api.post('message', {
      name,
      email,
      comment,
    })

    console.log(values)

    window.scrollTo(0, 0)

    handleOpenModal()
    reset()
  }

  const navigationStyle = `text-blue-400 hover:underline underline-offset-2`

  const messageField = watch('comment')
  const loadingWhileSubmitting = isSubmitting ? <Loading /> : 'Enviar'
  const isSubmitDisabled = !messageField || isSubmitting

  return (
    <form
      onSubmit={handleSubmit(handleSubmitMessage)}
      className="w-full h-[420px] p-5 flex flex-col justify-center md:animate-goBack "
    >
      <span className="mb-4 text-zinc-400 font-semibold text-md font-roboto block  ">
        Deixe sua mensagem
      </span>
      <div className="w-full flex flex-col justify-center ">
        <Input
          type="name"
          placeholder="nome"
          error={errors?.name}
          {...register('name')}
        />
        <Input
          type="email"
          placeholder="email"
          error={errors?.email}
          {...register('email')}
        />
        <textarea
          className="mb-5 p-4 min-h-[112px] text-zinc-800 text-sm rounded-md placeholder:text-sm bg-zinc-300 focus:border-1 focus:ring-green-100 focus:ring-1 focus:outline-none resize-none "
          placeholder="Digite sua mensagem aqui"
          {...register('comment')}
        />
        {errors?.comment && (
          <span className="-mt-5 mb-5 ml-3 text-sm text-red-500 ">
            {errors.comment.message}
          </span>
        )}
        <button
          type="submit"
          className="py-3 px-4 mb-3 rounded-md flex items-center justify-center text-sm text-white-300 font-semibold tracking-wide font-roboto hover:brightness-90 transition-all bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-100 disabled:opacity-70 disabled:hover:brightness-100 disabled:cursor-not-allowed "
          disabled={isSubmitDisabled}
        >
          {loadingWhileSubmitting}
        </button>
        <p className="text-[12px] text-zinc-500 text-center  ">
          Clicando em &quot;Enviar&quot; você estará concordando com o{' '}
          <NavigationItem
            style={navigationStyle}
            url="/termo-de-uso"
            name="Termo de Uso"
          />
          <span> e </span>
          <NavigationItem
            style={navigationStyle}
            url="politica-de-privacidade"
            name="Política de Privacidade"
          />{' '}
          da Clínica Relance
        </p>
      </div>
    </form>
  )
}
