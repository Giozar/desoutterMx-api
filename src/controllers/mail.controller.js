import nodemailer from 'nodemailer'

import { Email } from '../config/config.js';

async function contactMail(data) {

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

async function quoteMail(data) {

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
        subject: "Cotización de herramienta",
        html:
            `
            <b>petición de cotización</b>
            <br/><br/>

            <h3> Cotización de herramienta </h3> <br/>
            <h3> Email: ${data.floating_email_quote} </h3> <br/>
            <h3> Phone: ${data.floating_phone_quote} </h3> <br/>
            <h2> Name: ${data.floating_name_quote} </h2> <br/>
            <p> Message: ${data.floating_message_quote} </p> <br/>
            <p> company: ${data.floating_company_quote} </p> <br/>
            <p> products: ${data.floating_tool_quote} </p> <br/>
            <p> quantity: ${data.floating_quantity_quote} </p> <br/>
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

        await contactMail(data);

        // console.log(req.body);

        res.send("Message Successfully Sent!");
        
    } catch (error) {
        console.log(error)
        res.send("Message Could not be Sent");
    }
}

export async function quote(req, res, next) {
    const {
        floating_tool_quote,
        floating_quantity_quote,
        floating_email_quote,
        floating_name_quote,
        floating_phone_quote,
        floating_company_quote,
        floating_message_quote,
      } = req.body;
    const data = {
        floating_tool_quote,
        floating_quantity_quote,
        floating_email_quote,
        floating_name_quote,
        floating_phone_quote,
        floating_company_quote,
        floating_message_quote,
      }
    try {

        await quoteMail(data);

        // console.log(req.body);

        res.send("Message Successfully Sent!");
        
    } catch (error) {
        console.log(error)
        res.send("Message Could not be Sent");
    }
}
