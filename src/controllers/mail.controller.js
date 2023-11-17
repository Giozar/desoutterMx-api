import nodemailer from 'nodemailer'

import { Email } from '../config/config.js';

async function mainMail(data) {

    // CPANEL
    const transporter = await nodemailer.createTransport({
        host: Email.emailHost,
        // port: Email.emailPort,
        secure: false,
        auth: {
            user: Email.emailUser,
            pass: Email.emailPassword,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    const mailOption = {
        from: Email.emailUser,
        to: Email.emailUser,
        subject: data.subject,
        html:
            `
            <b>You got a message from</b>
            <br/><br/>
            <h3> Email: ${data.email} </h3> <br/>
            <h3> Phone: ${data.phone} </h3> <br/>
            <h2> Name: ${data.fullName} </h2> <br/>
            <p> Message: ${data.message} </p> <br/>
            <p> informations: ${data.informations} </p> <br/>
            <p> products: ${data.products} </p> <br/>
            <p> offers: ${data.offers} </p> <br/>
            <p> phoneNotifications: ${data.phoneNotifications} </p> <br/>
            `,
    };

    try {
        await transporter.sendMail(mailOption);
        return Promise.resolve("Message Sent Successfully!");
    } catch (error) {
        return Promise.reject(error);
    }
};

export async function contact(req, res, next) {
    const { fullName, email, phone, subject, message, informations, products, offers, phoneNotifications } = req.body;
    const data = {fullName, email, phone, subject, message, informations, products, offers, phoneNotifications}
    try {

        await mainMail(data);

        // console.log(req.body);

        res.send("Message Successfully Sent!");
        
    } catch (error) {
        console.log(error)
        res.send("Message Could not be Sent");
    }
}

export async function quote(req, res, next) {
    const {
        floating_tool,
        floating_quantity,
        floating_name,
        floating_phone,
        floating_company,
        floating_message,
      } = req.body;
    const data = {
        floating_tool,
        floating_quantity,
        floating_name,
        floating_phone,
        floating_company,
        floating_message,
      }
    try {

        await mainMail(data);

        // console.log(req.body);

        res.send("Message Successfully Sent!");
        
    } catch (error) {
        console.log(error)
        res.send("Message Could not be Sent");
    }
}
