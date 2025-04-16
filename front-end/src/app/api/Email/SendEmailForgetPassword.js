import nodemailer from 'nodemailer';

export const SendEmailForgetPassword = async ({ email, subject, text }) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ibrahemelsaid692@gmail.com',
            pass: 'phsf wivd tand hvtj',
        },
    });

    const mailOptions = {
        from: 'ibrahemelsaid692@gmail.com',
        to: email,
        subject: subject,
        html: `<strong>${text}</strong>`,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
    } catch (error) {
        console.error('Failed to send email:', error);
    }
};
