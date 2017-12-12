const express = require("express");
const path = require('path');
const router = express.Router();
const User = require('../models/User');
const nodemailer = require('nodemailer');
const Mail = require('../models/Mail');


router.post('/sendEmail', (req, res, next) => {
    Mail.findById(req.params.id)
    .populate('userId')
    .then((questionData) => {

      if (typeof(questionData.userId.email) != "undefined"){
        console.log('Hello!');
      nodemailer.createTestAccount((err, account) => {



    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: 'sonrisas@gmail.com', // generated ethereal user
            pass: 'sonrisas'  // generated ethereal password
        }
    });

    let mailOptions = {
        from: 'sonrisas@gmail.com', // sender address
        to: questionData.userId.email, // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Gracias por enviarnos tu solicitud', // plain text body
        html: 'Gracias por ponerte en contacto con nosotros' // html body
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: ' + info.response);
            res.redirect("/user/profile");
        }
    });

});
      }
    })
})

module.exports = router;
