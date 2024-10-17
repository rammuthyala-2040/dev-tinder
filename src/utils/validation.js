const validator = require("validator");

const signupValidation = (req) => {
    const { firstName, lastName, emailId, password } = req.body;
    if (!firstName || !lastName) {
        throw new Error("Name is not valid!");
    } else if (!validator.isEmail(emailId)) {
        throw new Error("Email is not valid!");
    } else if (!validator.isStrongPassword(password)) {
        throw new Error("Please enter a strong Password!");
    }

}

const profileValidation = (req) => {
    const allowedEditFields = ["firstName", "lastName", "photoUrl", "email", "age", "gender", "about", "skills"];
    const isEditAllowed = Object.keys(req.body).every((field) =>
        allowedEditFields.includes(field));

    return isEditAllowed;
}

module.exports = { signupValidation, profileValidation };