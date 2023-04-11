var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jihene.lahbibipro@gmail.com',
    pass: 'jihenelahbibi1794'
  }
});

var mailOptions = {
  from: 'jihene.lahbibipro@gmail.com',
  to: 'lahbibijiji@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});