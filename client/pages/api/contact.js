import { transporter, mailOptions } from "../../services/nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.subject || !data.senderEmail || !data.phone || !data.content) {
      return res.status(400).json();
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: data.subject,
        html: `<div>
        <h2>Email: ${data.senderEmail}</h2>
        <h2>Contato: ${data.phone}</h2>

        <h3>Mensagem:</h3>
        <p>${data.content}</p></div>`,
        replyTo: data.senderEmail,
      });
    } catch (err) {
      console.log(err);
    }
  }
}
