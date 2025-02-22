// app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Definindo a interface para o corpo da requisição
interface EmailRequestBody {
  subject: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  const { subject, email, message }: EmailRequestBody = await request.json();

  // Configuração do Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Você pode mudar para outro e-mail se quiser
    subject: subject,
    text: `From: ${email}\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'E-mail sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'There was an error sending the e-mail.' }, { status: 500 });
  }
}