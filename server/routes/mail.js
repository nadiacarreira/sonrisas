const express = require("express");
const path = require('path');
const router = express.Router();
const User = require('../models/User');
const nodemailer = require('nodemailer');
const Mail = require('../models/Mail');


router.post('/sendEmail', (req, res, next) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: 'asociacion.dibujando.sonrisas@gmail.com', // generated ethereal user
            pass: 'dibujandosonrisas'  // generated ethereal password
        }
    });
    console.log(req.user.email);
    let mailOptions = {
        from: 'asociacion.dibujando.sonrisas@gmail.com', // sender address
        to: req.user.email, // list of receivers
        subject: 'Hello ✔', // Subject line (titulo)
        text: 'Gracias por enviarnos tu solicitud', // plain text body(creemos q no vale)
        html: 'En primer lugar, desde el equipo Sonrisas queremos darle las gracias por ponerse en contacto con nosotros, es un placer recibir candidaturas para el voluntariado. Lo tendremos en cuenta y le respoderemos lo antes posible. muchas gracias.' // html body(lo q queremos decir al cliente)
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: ' + info.response);
        }
    });

});

module.exports = router;
