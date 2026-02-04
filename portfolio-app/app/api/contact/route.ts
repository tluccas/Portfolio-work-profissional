import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  if (!name || !email) {
    return new Response(
      JSON.stringify({ message: "Name and email are required" }),
      { status: 400 },
    );
  }

  const processedMessage =
    typeof message === "string" && message.trim().length > 0
      ? message
      : "Olá, gostaria de entrar em contato.";

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD, 
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Maybe change to another email
      subject: `[SITE] Mensagem do site de ${name}`,
      text: `Nome: ${name}
      Email: ${email}
      Telefone: ${phone}
      Mensagem: ${processedMessage}`,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
