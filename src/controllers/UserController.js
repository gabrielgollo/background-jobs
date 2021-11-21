const Mail = require("../libs/Mail");

class UserController {
  static async store(req, res) {
    try {
      const { name, email, password } = req.body;

      const user = {
        name,
        email,
        password,
      };

      Mail.sendMail({
        from: "Testando <background-jobs@teste.com.br>",
        to: `${name} <${email}>`,
        subject: "Usuário cadastrado",
        html: `<h1>Olá ${name}</h1>`,
      });

      return res.status(200).json(user);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }
}

module.exports = UserController;
