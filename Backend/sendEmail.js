const express = require("express");
const nodemailer = require("nodemailer");
require('dotenv').config();

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendConfirmationEmail(email, name, carName, carPlateNumber, carModel, carYear, rentalStart, rentalEnd, finalPrice, office, phoneNumber, contactEmail) {
  
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "snollygoster706@gmail.com", // sender address
    to: email, // list of receivers
    subject: "Confirmation Email - FairDeal Car Rental", // Subject line
    html: `
      <p>Dear ${name},</p>
      <p>Thank you for renting a car with us. Please find your booking details below:</p>
      <ul>
        <li>Car name: ${carName}</li>
        <li>Car model and year: ${carModel} ${carYear}</li>
        <li>Car plate number: ${carPlateNumber}</li>
        <li>Rental Start: ${rentalStart}</li>
        <li>Rental End: ${rentalEnd}</li>\n
        <h3>Final price: ${finalPrice}</h3>\n
        <br><br>
      </ul>

      <p>The insurance and financial topics will be discussed in person and you need to sign a contract also.
      Make sure to bring your ID card and the driving licence card too.\n\n</p>
      <p>Please don't hesitate to reach us, if you have any questions!\n\n</p>

      <ul style="list-style: none;">
        <li>Office: ${office}</li>
        <li>Phone number: ${phoneNumber}</li>
        <li>Email: ${contactEmail}</li>
      </ul>

      <h4>We look forward to seeing you soon!\n\nBest regards,\nFairDeal Car Rental team\n\n
      Please don't reply to this email directly. It is just a confirmation email.</h4>
      <p>Enjoy your ride!</p>
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
}

module.exports = { sendConfirmationEmail };
