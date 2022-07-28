import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'

interface InputProps {
  type: string
  placeholder: string
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { type, placeholder, error, ...rest },
  ref,
) => {
  return (
    <div className="w-full flex flex-col justify-center ">
      <input
        type={type}
        id={type}
        placeholder={placeholder}
        className="mb-5 py-3 px-4 text-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-100 rounded-md placeholder:text-sm bg-zinc-300"
        ref={ref}
        {...rest}
      />

      {!!error && (
        <span className="-mt-5 mb-5 ml-3 text-sm text-red-500 ">
          {error.message}
        </span>
      )}
    </div>
  )
}

export const Input = forwardRef(InputBase)
