const nodemailer = require('nodemailer');

module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
        host: 'SMTP.office365.com',
        port: '587',
        auth: {
            user: '    ', // Alterar para o email
            pass: '    ' // Alterar para o password
        }
    });
    const mailOptions = {
        from: `”${formulario.nome} 👻” <${formulario.email}>`,
        to: '    ', // Alterar para o destinatário
        subject: formulario.assunto,
        html: `
 <strong>Nome:</strong> ${formulario.nome} <br/>
 <strong>E-mail:</strong> ${formulario.email} <br/>
 <strong>Mensagem:</strong> ${formulario.mensagem}
 `
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(info);
        }
    });
}