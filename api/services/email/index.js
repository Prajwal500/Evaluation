var nodemailer = require("nodemailer");
var config = require("../../configs/config");

var Mailgen = require("mailgen");
// https://medium.com/javascript-in-plain-english/how-to-send-emails-with-node-js-1bb282f334fe
module.exports = {
    sendMail: function (name, email, intro, cb) {


        let transporter = nodemailer.createTransport({
            service: "Yahoo",
            secure: true,
            auth: {
                user: config.email.user,
                pass: config.email.pass
            },
        });
        let MailGenerator = new Mailgen({
            theme: "default",
            product: {
                name: "superAdmin",
                link: "https://robosoftin.com",
            },
        });
        let response = {
            body: {
                name,
                intro: intro,
            },
        };
        let mail = MailGenerator.generate(response);
        let message = {
            from: config.email.user,
            to: email,
            subject: "Role has been Added",
            html: mail
        };

        transporter
            .sendMail(message)
            .then(() => {
                console.log("------------message success");
                cb();
                
            })
            .catch((error) => console.error(error));
        // };

    }
}
