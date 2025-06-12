export const prerender = false;

import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  // console.log({request})
  // debugger
  const formData = await request.formData();

  const name = formData.get('nombre')?.toString();
  const email = formData.get('email')?.toString();
  const subject = formData.get('subject')?.toString() || 'Sin asunto';
  const message = formData.get('mensaje')?.toString();

  console.log({
    name,
    email,
    subject,
    message,
  })

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Faltan campos obligatorios' }), { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: import.meta.env.MAILER_EMAIL,
      pass: import.meta.env.MAILER_SECRET_KEY,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: import.meta.env.MAILER_EMAIL,
      subject: `Formulario: ${subject}`,
      text: message,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Error al enviar el correo' }), { status: 500 });
  }
};
