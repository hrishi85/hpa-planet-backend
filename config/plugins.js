// config/plugins.js
module.exports = ({ env }) => ({
    email: {
        config: {
            provider: 'nodemailer', // this matches the provider you installed
                providerOptions: {
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: env('SMTP_USER'),
                    pass: env('SMTP_PASS'),
                },
            },
            settings: {
                defaultFrom: env('SMTP_USER'),
                defaultReplyTo: env('SMTP_USER'),
            },
        },
    },
});
  