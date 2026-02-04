import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().optional(),
});
export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  const parseResult = schema.safeParse({ name, email, phone, message });

  if (!parseResult.success) {
    return Response.json(
      { error: z.treeifyError(parseResult.error) },
      { status: 400 },
    );
  }

  if (!parseResult.data.name || !parseResult.data.email) {
    return new Response(
      JSON.stringify({ message: "Name and email are required" }),
      { status: 400 },
    );
  }

  const processedMessage =
    typeof parseResult.data.message === "string" && parseResult.data.message.trim().length > 0
      ? parseResult.data.message
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
      subject: `[SITE] Mensagem do site de ${parseResult.data.name}`,
      text: `Nome: ${parseResult.data.name}
      Email: ${parseResult.data.email}
      Telefone: ${parseResult.data.phone}
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
