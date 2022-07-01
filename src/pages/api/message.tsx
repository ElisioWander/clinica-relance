import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { name, email, comment } = await req.body

    if(!name.trim() || !email.trim() || !comment.trim()) {
      return res.status(403).send('Todos os campos precisam ser preenchidos')
    }

    const transport = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_EMAIL_PASSWORD
      }
    })

    await transport.sendMail({
      from: `Clínica Relance <clinicarelance@hotmail.com>`,
      to: 'clinicarelance@hotmail.com',
      subject: "Mensagem do site",
      html: [
        `<div style="font-family: sans-serif"; font-size: 16px; color: #111; >`,
        `<p>Nome: ${name}</p>`,
        `<p>email: ${email}</p>`,
        `<p>email: ${comment}</p>`,
        `</div>`
      ].join('\n')
    })

    return res.send('');
  } catch (error) {
    return res.json({error: 'error ao enviar o email'})
  }
}
