// pages/api/sendEmail.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { name, lastname, phone, email, ville, sp, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail', // Replace with your email service
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'New Message from Devis Form',
        text: `
      Name: ${name} ${lastname}
      Phone: ${phone}
      Email: ${email}
      City: ${ville}
      Specialty: ${sp}
      Message: ${message}
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, error: 'Failed to send email' });
    }
};

export default handler;
