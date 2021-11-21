const validateStoreUser = require("../validations/storeUserSchema");

const Queue = require("../queue");

class UserController {
  static async store(req, res) {
    try {
      const { name, email, password } = req.body;

      validateStoreUser({ name, email, password });

      const user = {
        name,
        email,
        password,
      };

      Queue.add("MailRegister", { user });

      return res.status(200).json(user);
    } catch (error) {
      return res.status(error.statusCode || 500).json({ error: error.message });
    }
  }
}

module.exports = UserController;
