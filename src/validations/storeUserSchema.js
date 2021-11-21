const yup = require("yup");
const CustomError = require("../helpers/customError");

const storeuserSchema = yup.object().shape({
  name: yup.string().required("O campo name é obrigatório"),
  email: yup.string().email().required("O campo email é obrigatório"),
  password: yup.string().required("O campo password é obrigatório"),
});

const validateStoreUser = (message) => {
  try {
    const validateMessage = storeuserSchema.validateSync(message);
    return validateMessage;
  } catch (error) {
    throw new CustomError(error.message, "ValidationError", 400);
  }
};

module.exports = serSchema;
