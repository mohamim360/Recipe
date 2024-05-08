import nodemailer from 'nodemailer';

const sendEmail = async (to, subject, text) => {
 
  let transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    secure: false, 
    auth: {
      user: 'mohamim360@gmail.com',
      pass: '',
    },
  });

  let info = await transporter.sendMail({
    from: '"Your Name" <your-email@example.com>',
    to: to,
    subject: subject,
    text: text,
  });

  console.log('Message sent: %s', info.messageId);
};

export default sendEmail;
