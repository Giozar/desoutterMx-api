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

        let index = 0;
        let mailBody = '';
        let mailSubject = '';
        for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
                const element = data[key];

                if(index ===  0) {
                    mailBody += (`<h1> Asunto : ${element}</h1> <br>`);
                    mailSubject = element;
                }

                else if(index ===  1) {
                    mailBody += (`<h2> Email : ${element} </h2> <br>`);
                }

                else if(index ===  2) {
                    mailBody += (`<h2> Teléfono : ${element} </h2> <br>`);
                }

                else if(index ==  3) {
                    mailBody += (`<h3> Nombre : ${element}</h3> <br>`);
                }

                else if(index ==  4) {
                    mailBody += (`<h4> Compañia|Empresa : ${element}</h4> <br>`);
                } else {
                    mailBody += (`<h5>${key} : ${element}</h5> <br>`);
                }
                
            }
            index++;
        }

    const mailOption = {
        from: Email.emailUser,
        to: Email.emailUser,
        subject: mailSubject,
        html: mailBody,
    };

    try {
        await transporter.sendMail(mailOption);
        return Promise.resolve("Message Sent Successfully!");
    } catch (error) {
        return Promise.reject(error);
    }
};

export async function contact(req, res, next) {
    const data = req.body;
    try {

        await contactMail(data);
        
        res.send("Message Successfully Sent!");
        
                // calcula cunatas propiedades tiene el objeto
                // const props = Object.getOwnPropertyNames(data).length;
                // console.log(props);
        
    } catch (error) {
        console.log(error)
        res.send("Message Could not be Sent");
    }
}
