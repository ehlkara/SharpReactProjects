import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter vaild email")
    .required("Required enter valid email."),
  age: yup
    .number()
    .positive("Please positive enter age.")
    .integer("Please enter positive integer")
    .required("Required enter age"),
  password: yup
    .string()
    .min(5, "Please minimum enter 5 characters.")
    .matches(passwordRules, {
      message:
        "Please enter at least 1 uppercase letter, 1 lowercase letter and 1 number",
    })
    .required("Required enter password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Does not match passwords")
    .required("Please valid enter password"),
});
