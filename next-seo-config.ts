const title = 'Centro Estético Relance - Saude e Beleza'
const description = 'Cuidamos de sua saúde e aparência'

export const SEO = {
  title,
  description,
  canonical: 'https://clinicarelance.com.br',
  openGraph: {
    type: 'website',
    locale: 'pt-BR',
    url: 'https://clinicarelance.com.br',
    title,
    description,
    images: [
      {
        url: './public/images/logo.ico',
        width: 800,
        height: 600,
        alt: title,
      },
    ],
  },
}
