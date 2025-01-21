import { transporter, mailOptions } from "@/config/transporter";

const CONTACT_MESSAGE_FIELDS = {
  name: "NAME",
  email: "EMAIL",
  subject: "SUBJECT",
  message: "MESSAGE",
};

const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce((str, [key, value]) => {
    return (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${value} \n \n`);
  }, "");

  const htmlData = Object.entries(data).reduce((str, [key, value]) => {
    return (
      str +
      `<tr>
        <td style="padding: 10px 20px; border-bottom: 1px solid #dddddd;">
          <strong style="color: #333;">${CONTACT_MESSAGE_FIELDS[key]}</strong>
        </td>
        <td style="padding: 10px 20px; border-bottom: 1px solid #dddddd; color: #555;">
          ${value}
        </td>
      </tr>`
    );
  }, "");

  return {
    text: stringData,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
          }
          table {
            border-collapse: collapse;
            margin: 20px auto;
            width: 90%;
            max-width: 600px;
            background: #ffffff;
            border: 1px solid #dddddd;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          th {
            background-color: #007BFF;
            color: #ffffff;
            padding: 15px;
            text-align: left;
            font-size: 18px;
          }
          td {
            padding: 10px 20px;
            font-size: 16px;
          }
          .footer {
            margin-top: 20px;
            text-align: center;
            font-size: 14px;
            color: #555;
          }
          .footer a {
            color: #007BFF;
            text-decoration: none;
          }
          .footer a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <table>
          <thead>
            <tr>
              <th colspan="2">New Contact Message</th>
            </tr>
          </thead>
          <tbody>
            ${htmlData}
          </tbody>
        </table>
        <div class="footer">
          <p>This message was sent from your website's contact form.</p>
          <p><a href="#">Visit your website</a></p>
        </div>
      </body>
      </html>
    `,
  };
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.email || !data.subject || !data.message) {
      return res.status(400).json({ Message: "Bad Request" });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: data.subject,
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Bad Request" });
    }
  }
};

export default handler;
