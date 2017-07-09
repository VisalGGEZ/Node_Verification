'use strict';
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    service: 'Gmail',
    auth: {
        user: 'visal012896@gmail.com',
        pass: 'Visal14k010499805'
    }
};
var transporter = nodemailer.createTransport(smtpConfig);

// setup email data with unicode symbols
let mailOptions = {
    from: 'visal012896@gmail.com', // sender address
    to: 'vg012896@outlook.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<a href="https://www.w3schools.com/html/html_links.asp">Click here</a>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});
