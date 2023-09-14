"use client";

import { getHtmlEmail } from "@/services/PlantillaCorreo";



export default async function (req, res) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");

  // console.log(datatrans);
  const transporter = nodemailer.createTransport({
    port: process.env.portEmail,
    host: process.env.host,
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
    secure: true,
  });

  const data = [
    {
      nombre: req.body.name + " " + req.body.lastname,
      correo: req.body.email,
      mensaje: req.body.message,
    },
  ];

  const contenidoHtml = await getHtmlEmail(data);
  // console.log(data);
  // console.log(contenidoHtml);
  const mailData = {
    from: req.body.email,
    to: process.env.email,
    subject: `Mensaje de ${req.body.name}`,
    text: req.body.message + " | Enviado desde: " + req.body.email,
    html: contenidoHtml,
  };
  var error = 0;
  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
      return res.status(409).send("error");
    } else {
      console.log(info);
      return res.status(200).send("success");
    }
  });

  //console.log(req.body)
}
