import nodemailer from "nodemailer"


const smtpOptions = {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "2525"),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  }
  
  export const sendEmail = async (data) => {
    const transporter = nodemailer.createTransport({
      ...smtpOptions,
    })
  
    return await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL, ...data,
    })
  }