// pages/api/send-email.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '');

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { name, lastname, phone, email, ville, sp, message } = req.body;

        await sendgrid.send({
            to: 'hamazizou1@gmail.com', // Your email address
            from: 'hamazizou1@gmail.com', // Your verified sender email address
            subject: `New contact form submission from ${name} ${lastname}`,
            html: `
                <p><strong>Name:</strong> ${name} ${lastname}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Ville:</strong> ${ville}</p>
                <p><strong>Spécialité paramédicale:</strong> ${sp}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        res.status(200).json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error sending email' });
    }
};

export default sendEmail;
