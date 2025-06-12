
import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {

  if (!request) {
    return new Response(JSON.stringify({ error: 'Solicitud no válida' }), { status: 400 });
  }
  const body = await request.json();


  const name = body.name
  const email = body.email
  const subject = body.subject || '(Sin asunto)'
  const message = body.message


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
      from: `"${name}" <${import.meta.env.MAILER_EMAIL}>`,
      replyTo: email,
      to: import.meta.env.MAILER_EMAIL,
      subject: `Formulario: ${subject}`,
      text: message,
    });


    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    // console.error(error);
    return new Response(JSON.stringify({ error: 'Error al enviar el correo' }), { status: 500 });
  }
};

export const GET = () => {
  return new Response(JSON.stringify({ message: 'Endpoint de envío de correo' }), { status: 200 });
}
