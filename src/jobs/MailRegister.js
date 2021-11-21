const Mail = require("../libs/Mail");

class MailRegister {
  static configure = () => {
    return {
      key: "MailRegister",
      options: {
        delay: 5000,
        priority: 3,
      },
    };
  };
  static async handle({ data }) {
    const {
      user: { name, email },
    } = data;

    await Mail.sendMail({
      from: "Testando <background-jobs@teste.com.br>",
      to: `${name} <${email}>`,
      subject: "Usuário cadastrado",
      html: `<h1>Olá ${name}</h1>`,
    });
  }
}

module.exports = MailRegister;
