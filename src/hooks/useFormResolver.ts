import { Resolver } from 'react-hook-form'

type SendMessageData = {
  name: string
  email: string
  comment: string
}

export function useFormResolver() {
  const resolver: Resolver<SendMessageData> = async (values) => {
    return {
      values: values.name || values.email ? values : {},
      errors:
        !values.name || !values.email
          ? {
              name: {
                type: 'required',
                message: 'Nome obrigatório',
              },
              email: {
                type: 'required',
                message: 'Email obrigatório',
              },
            }
          : {},
    }
  }

  return { resolver }
}
